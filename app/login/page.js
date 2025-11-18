"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, ShieldCheck } from "lucide-react";

export default function Login() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [remember, setRemember] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password })
      });
      const data = await res.json();
      console.log("Data; ", data)
      if (!res.ok) {
        setError(data.error || "Login failed");
      } else {
        if (data.token) {
          try { localStorage.setItem("session", data.token); } catch {}
        }
        router.push("/dashboard");
      }
    } catch {
      setError("Network error");
    } finally {
      setLoading(false);
    }
  }
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b bg-white">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-chase-blue text-white flex items-center justify-center font-bold">C</div>
            <span className="text-xl font-semibold text-chase-navy">Chase</span>
          </div>
          <Link href="/signup" className="rounded bg-chase-blue px-4 py-2 text-white">Open an account</Link>
        </div>
      </div>

      <main className="mx-auto max-w-md px-4 py-12">
        <h1 className="text-2xl font-semibold text-chase-navy mb-6">Sign in</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-chase-navy mb-1">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-chase-blue" />
          </div>
          <div>
            <label className="block text-sm text-chase-navy mb-1">Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-chase-blue" />
          </div>
          <div className="flex items-center justify-between">
            <label className="flex items-center gap-2 text-sm text-chase-navy"><input type="checkbox" checked={remember} onChange={(e)=>setRemember(e.target.checked)} className="rounded border"/>Remember me</label>
            <Link href="#" className="text-sm text-chase-blue">Use token</Link>
          </div>
          {error && <div className="text-sm text-red-600">{error}</div>}
          <button type="submit" disabled={loading} className="w-full rounded bg-chase-blue px-4 py-2 text-white font-medium flex items-center justify-center gap-2"><Lock size={16}/>{loading ? "Signing in..." : "Sign in"}</button>
          <div className="flex items-center justify-between text-xs">
            <Link href="#" className="text-chase-blue">Forgot username/password?</Link>
            <Link href="/signup" className="text-chase-blue">Not enrolled? Sign up</Link>
          </div>
        </form>
        <div className="mt-6 flex items-center gap-2 text-xs text-muted"><ShieldCheck size={16}/>Bank securely with advanced encryption.</div>
      </main>
    </div>
  );
}