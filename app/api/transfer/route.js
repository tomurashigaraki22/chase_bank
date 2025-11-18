// c:\Users\emman\OneDrive\Desktop\chase_bank\app\api\transfer\route.js
import { NextResponse } from "next/server";
import db from "../../../lib/db";
import { verifyToken } from "../../../lib/auth";
import { cookies } from "next/headers";

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

  const from = db.prepare("SELECT id, user_id, balance, status FROM accounts WHERE id = ?").get(fromId);
  const to = db.prepare("SELECT id, user_id, balance, status FROM accounts WHERE id = ?").get(toId);
  if (!from || !to || from.user_id !== Number(payload.uid) || to.user_id !== Number(payload.uid)) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (from.status !== "active") return NextResponse.json({ error: "Source account frozen" }, { status: 400 });
  if (from.balance < amount) return NextResponse.json({ error: "Insufficient funds" }, { status: 400 });

  const update = db.prepare("UPDATE accounts SET balance = ? WHERE id = ?");
  const insertTx = db.prepare("INSERT INTO transactions (user_id, account_id, type, amount, description) VALUES (?, ?, ?, ?, ?)");
  const txn = db.transaction(() => {
    update.run(from.balance - amount, from.id);
    update.run(to.balance + amount, to.id);
    insertTx.run(Number(payload.uid), from.id, "debit", amount, desc);
    insertTx.run(Number(payload.uid), to.id, "credit", amount, desc);
  });
  txn();

  const accounts = db.prepare("SELECT id, type, balance, status FROM accounts WHERE user_id = ? ORDER BY id").all(Number(payload.uid));
  return NextResponse.json({ ok: true, accounts });
}