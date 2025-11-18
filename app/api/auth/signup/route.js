// c:\Users\emman\OneDrive\Desktop\chase_bank\app\api\auth\signup\route.js
import { NextResponse } from "next/server";
import pool from "../../../../lib/db";
import { hashPassword, signToken } from "../../../../lib/auth";

export const runtime = "nodejs";

function accountNumber() {
  return "4" + Math.floor(Math.random() * 1e11).toString().padStart(11, "0");
}

export async function POST(req) {
  const b = await req.json();
  const email = String(b.email || "").toLowerCase().trim();
  const password = String(b.password || "");
  const first = String(b.firstName || "");
  const last = String(b.lastName || "");
  if (!email || !password) return NextResponse.json({ error: "Missing fields" }, { status: 400 });

  const [existing] = await pool.execute("SELECT id FROM users WHERE email = ?", [email]);
  if (existing.length) return NextResponse.json({ error: "Email already registered" }, { status: 409 });

  const hash = hashPassword(password);
  const [info] = await pool.execute("INSERT INTO users (email, password_hash, first_name, last_name) VALUES (?, ?, ?, ?)", [email, hash, first, last]);
  const userId = info.insertId;

  await pool.execute("INSERT INTO accounts (user_id, type, number, balance, status) VALUES (?, ?, ?, ?, ?)", [userId, "checking", accountNumber(), 6120.44, "active"]);
  await pool.execute("INSERT INTO accounts (user_id, type, number, balance, status) VALUES (?, ?, ?, ?, ?)", [userId, "savings", accountNumber(), 5402.18, "active"]);
  await pool.execute("INSERT INTO accounts (user_id, type, number, balance, status) VALUES (?, ?, ?, ?, ?)", [userId, "card", accountNumber(), 1012.25, "frozen"]);

  const token = signToken({ uid: Number(userId) });
  return NextResponse.json({ ok: true, token });
}