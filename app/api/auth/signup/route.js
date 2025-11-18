// c:\Users\emman\OneDrive\Desktop\chase_bank\app\api\auth\signup\route.js
import { NextResponse } from "next/server";
import db from "../../../../lib/db";
import { hashPassword, signToken } from "../../../../lib/auth";

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

  const existing = db.prepare("SELECT id FROM users WHERE email = ?").get(email);
  if (existing) return NextResponse.json({ error: "Email already registered" }, { status: 409 });

  const hash = hashPassword(password);
  const info = db.prepare("INSERT INTO users (email, password_hash, first_name, last_name) VALUES (?, ?, ?, ?)").run(email, hash, first, last);
  const userId = info.lastInsertRowid;

  const insertAcc = db.prepare("INSERT INTO accounts (user_id, type, number, balance, status) VALUES (?, ?, ?, ?, ?)");
  insertAcc.run(userId, "checking", accountNumber(), 6120.44, "active");
  insertAcc.run(userId, "savings", accountNumber(), 5402.18, "active");
  insertAcc.run(userId, "card", accountNumber(), 1012.25, "frozen");

  const token = signToken({ uid: Number(userId) });
  return NextResponse.json({ ok: true, token });
}