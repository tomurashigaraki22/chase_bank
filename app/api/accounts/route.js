// c:\Users\emman\OneDrive\Desktop\chase_bank\app\api\accounts\route.js
import { NextResponse } from "next/server";
import pool from "../../../lib/db";
import { verifyToken } from "../../../lib/auth";

export const runtime = "nodejs";

export async function GET(req) {
  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  const payload = verifyToken(token);
  if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const [rows] = await pool.execute("SELECT id, type, number, balance, status FROM accounts WHERE user_id = ? ORDER BY id", [Number(payload.uid)]);
  const accounts = rows.map(a => ({ ...a, balance: Number(a.balance) }));
  return NextResponse.json({ accounts });
}