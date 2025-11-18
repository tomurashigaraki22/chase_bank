// c:\Users\emman\OneDrive\Desktop\chase_bank\app\api\me\route.js
import { NextResponse } from "next/server";
import pool from "../../../lib/db";
import { verifyToken } from "../../../lib/auth";

export const runtime = "nodejs";

export async function GET(req) {
  const auth = req.headers.get("authorization") || "";
  const token = auth.startsWith("Bearer ") ? auth.slice(7) : "";
  const payload = verifyToken(token);
  if (!payload) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const [rows] = await pool.execute(
    "SELECT id, email, first_name, last_name, created_at FROM users WHERE id = ?",
    [Number(payload.uid)]
  );
  const user = rows[0];
  if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ user });
}