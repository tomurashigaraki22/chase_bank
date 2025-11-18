// c:\Users\emman\OneDrive\Desktop\chase_bank\app\api\transfer\route.js
import { NextResponse } from "next/server";
import pool from "../../../lib/db";
import { verifyToken } from "../../../lib/auth";

export const runtime = "nodejs";

export async function POST(req) {
  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  const payload = verifyToken(token);
  if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const b = await req.json();
  const fromId = Number(b.fromAccountId);
  const toId = Number(b.toAccountId);
  const amount = Number(b.amount);
  const desc = String(b.description || "Transfer");
  if (!fromId || !toId || !amount || amount <= 0) return NextResponse.json({ error: "Invalid input" }, { status: 400 });

  const [fromRows] = await pool.execute("SELECT id, user_id, balance, status FROM accounts WHERE id = ?", [fromId]);
  const [toRows] = await pool.execute("SELECT id, user_id, balance, status FROM accounts WHERE id = ?", [toId]);
  const from = fromRows[0];
  const to = toRows[0];
  if (!from || !to || Number(from.user_id) !== Number(payload.uid) || Number(to.user_id) !== Number(payload.uid)) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (from.status !== "active") return NextResponse.json({ error: "Source account frozen" }, { status: 400 });
  if (Number(from.balance) < amount) return NextResponse.json({ error: "Insufficient funds" }, { status: 400 });

  const conn = await pool.getConnection();
  try {
    await conn.beginTransaction();
    await conn.execute("UPDATE accounts SET balance = balance - ? WHERE id = ?", [amount, from.id]);
    await conn.execute("UPDATE accounts SET balance = balance + ? WHERE id = ?", [amount, to.id]);
    await conn.execute("INSERT INTO transactions (user_id, account_id, type, amount, description) VALUES (?, ?, ?, ?, ?)", [Number(payload.uid), from.id, "debit", amount, desc]);
    await conn.execute("INSERT INTO transactions (user_id, account_id, type, amount, description) VALUES (?, ?, ?, ?, ?)", [Number(payload.uid), to.id, "credit", amount, desc]);
    await conn.commit();
  } catch (e) {
    try { await conn.rollback(); } catch {}
    conn.release();
    return NextResponse.json({ error: "Transfer failed" }, { status: 500 });
  }
  conn.release();

  const [rows] = await pool.execute("SELECT id, type, balance, status FROM accounts WHERE user_id = ? ORDER BY id", [Number(payload.uid)]);
  const accounts = rows.map(a => ({ ...a, balance: Number(a.balance) }));
  return NextResponse.json({ ok: true, accounts });
}