// c:\Users\emman\OneDrive\Desktop\chase_bank\app\dashboard\page.js
import Link from "next/link";
import {
  Wallet,
  PiggyBank,
  CreditCard,
  Send,
  DollarSign,
  Banknote,
  ReceiptText,
  Bell,
  Settings,
  UserCircle,
  ChevronDown,
  ArrowUpRight,
  ArrowDownLeft,
  TrendingUp,
  Lock,
} from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-white">
      <div className="border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/chase.jpeg.jpeg" alt="Chase Bank" className="h-7" />
            <nav className="hidden md:flex items-center gap-6 text-sm text-chase-navy">
              <Link href="/" className="hover:text-chase-blue">Home</Link>
              <Link href="/dashboard" className="pb-1 font-semibold text-chase-blue border-b-2 border-chase-blue">Dashboard</Link>
            </nav>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded p-2 hover:bg-gray-100"><Bell size={18} /></button>
            <button className="rounded p-2 hover:bg-gray-100"><Settings size={18} /></button>
            <button className="flex items-center gap-2 rounded px-3 py-1 hover:bg-gray-100">
              <UserCircle size={20} />
              <span className="text-sm text-chase-navy">Emmanuel</span>
              <ChevronDown size={16} />
            </button>
          </div>
        </div>
      </div>

      <main className="mx-auto max-w-7xl px-4 py-6 grid gap-6 md:grid-cols-12">
        <section className="md:col-span-8 space-y-6">
          <div className="rounded-lg border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs text-gray-500">Total balance</p>
                <h2 className="mt-1 text-3xl font-semibold text-chase-navy">$12,534.87</h2>
              </div>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 text-green-600"><ArrowUpRight size={18} /><span className="text-sm">+$3,420</span></div>
                <div className="flex items-center gap-2 text-red-600"><ArrowDownLeft size={18} /><span className="text-sm">-$2,075</span></div>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Checking ••••1234</p>
                    <p className="text-lg font-semibold text-chase-navy">$6,120.44</p>
                  </div>
                  <Wallet size={20} className="text-chase-blue" />
                </div>
                <span className="mt-3 inline-block rounded-full bg-green-50 text-green-700 text-xs px-2 py-1">Active</span>
              </div>
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Savings ••••8890</p>
                    <p className="text-lg font-semibold text-chase-navy">$5,402.18</p>
                  </div>
                  <PiggyBank size={20} className="text-chase-blue" />
                </div>
                <span className="mt-3 inline-block rounded-full bg-green-50 text-green-700 text-xs px-2 py-1">Active</span>
              </div>
              <div className="rounded-md border p-4">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs text-gray-500">Travel card ••••1122</p>
                    <p className="text-lg font-semibold text-chase-navy">$1,012.25</p>
                  </div>
                  <CreditCard size={20} className="text-chase-blue" />
                </div>
                <span className="mt-3 inline-block rounded-full bg-red-50 text-red-700 text-xs px-2 py-1">Frozen</span>
              </div>
            </div>
          </div>

          <div className="rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="px-4 py-3 bg-gray-50 text-sm text-chase-navy font-semibold">Recent activity</div>
            <div className="divide-y">
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3"><ReceiptText size={18} className="text-gray-900" /><div><p className="text-sm text-chase-navy">Direct deposit • Employer</p><p className="text-xs text-gray-500">Nov 12, 2025</p></div></div>
                <span className="text-sm font-medium text-green-700">+$2,100.00</span>
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3"><ReceiptText size={18} className="text-gray-900" /><div><p className="text-sm text-chase-navy">Groceries • Market</p><p className="text-xs text-gray-500">Nov 10, 2025</p></div></div>
                <span className="text-sm font-medium text-red-700">-$86.42</span>
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3"><ReceiptText size={18} className="text-gray-900" /><div><p className="text-sm text-chase-navy">Online purchase • Retailer</p><p className="text-xs text-gray-500">Nov 9, 2025</p></div></div>
                <span className="text-sm font-medium text-red-700">-$132.19</span>
              </div>
              <div className="px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-3"><ReceiptText size={18} className="text-gray-900" /><div><p className="text-sm text-chase-navy">Transfer • Savings</p><p className="text-xs text-gray-500">Nov 8, 2025</p></div></div>
                <span className="text-sm font-medium text-gray-800">-$500.00</span>
              </div>
            </div>
          </div>
        </section>

        <aside className="md:col-span-4 space-y-6">
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-chase-navy">Quick actions</h3>
            <div className="mt-4 grid grid-cols-2 gap-3">
              <button className="flex items-center gap-2 rounded border px-3 py-2 hover:bg-gray-400"><Send size={18} className="text-gray-600"/><span className="text-sm text-gray-600">Transfer</span></button>
              <button className="flex items-center gap-2 rounded border px-3 py-2 hover:bg-gray-400"><DollarSign size={18} className="text-gray-600" /><span className="text-sm text-gray-600">Pay</span></button>
              <button className="flex items-center gap-2 rounded border px-3 py-2 hover:bg-gray-400"><Banknote size={18} className="text-gray-600" /><span className="text-sm text-gray-600">Deposit</span></button>
              <button className="flex items-center gap-2 rounded border px-3 py-2 hover:bg-gray-400"><Lock size={18} className="text-gray-600" /><span className="text-sm text-gray-600">Card lock</span></button>
            </div>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-chase-navy">Rewards</h3>
            <p className="mt-2 text-3xl font-semibold text-chase-blue">12,450</p>
            <p className="text-xs text-gray-500">Ultimate Rewards points</p>
            <Link href="#" className="mt-3 inline-block rounded bg-chase-blue px-3 py-2 text-white text-sm">Redeem</Link>
          </div>
          <div className="rounded-lg border p-4 shadow-sm">
            <h3 className="text-sm font-semibold text-chase-navy">Spending insights</h3>
            <div className="mt-3 flex items-center gap-2 text-gray-600"><TrendingUp size={18} /><span className="text-sm">This month: $2,075</span></div>
          </div>
        </aside>
      </main>
    </div>
  );
}