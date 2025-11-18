// c:\Users\emman\OneDrive\Desktop\chase_bank\app\api\auth\login\route.js
import { NextResponse } from "next/server";
import pool from "../../../../lib/db";
import { verifyPassword, signToken } from "../../../../lib/auth";

export const runtime = "nodejs";

export async function POST(req) {
  const b = await req.json();
  const email = String(b.email || "").toLowerCase().trim();
  const password = String(b.password || "");
  if (!email || !password) return NextResponse.json({ error: "Missing fields" }, { status: 400 });
  const [rows] = await pool.execute("SELECT id, password_hash FROM users WHERE email = ?", [email]);
  const user = rows[0];
  if (!user || !verifyPassword(password, user.password_hash)) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  const token = signToken({ uid: Number(user.id) });
  return NextResponse.json({ ok: true, token });
}