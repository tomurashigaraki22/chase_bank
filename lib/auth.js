// c:\Users\emman\OneDrive\Desktop\chase_bank\lib\auth.js
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export function hashPassword(password) {
  return bcrypt.hashSync(password, 10);
}
export function verifyPassword(password, hash) {
  return bcrypt.compareSync(password, hash);
}
export function signToken(payload) {
  return jwt.sign(payload, process.env.AUTH_SECRET || "dev", { expiresIn: "7d" });
}
export function verifyToken(token) {
  try {
    return jwt.verify(token, process.env.AUTH_SECRET || "dev");
  } catch {
    return null;
  }
}