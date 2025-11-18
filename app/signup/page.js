"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { UserPlus } from "lucide-react";

export default function Signup() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password, firstName, lastName })
      });
      const data = await res.json();
      if (!res.ok) {
        setError(data.error || "Signup failed");
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
          <Link href="/login" className="text-chase-navy hover:underline">Sign in</Link>
        </div>
      </div>

      <main className="mx-auto max-w-md px-4 py-12">
        <h1 className="text-2xl font-semibold text-chase-navy mb-6">Open an account</h1>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm text-chase-navy mb-1">First name</label>
            <input type="text" value={firstName} onChange={(e)=>setFirstName(e.target.value)} className="w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-chase-blue" />
          </div>
          <div>
            <label className="block text-sm text-chase-navy mb-1">Last name</label>
            <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} className="w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-chase-blue" />
          </div>
          <div>
            <label className="block text-sm text-chase-navy mb-1">Email</label>
            <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-chase-blue" />
          </div>
          <div>
            <label className="block text-sm text-chase-navy mb-1">Phone</label>
            <input type="tel" value={phone} onChange={(e)=>setPhone(e.target.value)} className="w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-chase-blue" />
          </div>
          <div>
            <label className="block text-sm text-chase-navy mb-1">Password</label>
            <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} className="w-full rounded border px-3 py-2 outline-none focus:ring-2 focus:ring-chase-blue" />
          </div>
          {error && <div className="text-sm text-red-600">{error}</div>}
          <button type="submit" disabled={loading} className="w-full rounded bg-chase-blue px-4 py-2 text-white font-medium flex items-center justify-center gap-2"><UserPlus size={16}/>{loading ? "Creating..." : "Create account"}</button>
        </form>
        <p className="text-xs text-muted mt-4">By opening an account, you agree to the terms and acknowledge the privacy notice.</p>
      </main>
    </div>
  );
}