import Link from "next/link";
import { Car, Search, CreditCard, PiggyBank, Home as HomeIcon, Plane, Briefcase, ChevronRight, ChevronDown, ChevronLeft, UserCircle } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-2 flex flex-wrap items-center justify-between gap-3 text-xs text-chase-navy">
          <div className="flex items-center gap-4">
            <Link href="#" className="pb-1 font-semibold text-chase-blue border-b-2 border-chase-blue">Personal</Link>
            <Link href="#" className="hover:text-chase-blue">Business</Link>
            <Link href="#" className="hover:text-chase-blue">Commercial</Link>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-chase-blue">Schedule a meeting</Link>
            <button className="flex items-center gap-1 hover:text-chase-blue">Customer service <ChevronDown size={16}/></button>
            <Link href="#" className="hover:text-chase-blue">Español</Link>
            <button className="hover:text-chase-blue"><Search size={18}/></button>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <img src="/chase.jpeg.jpeg" alt="Chase Bank" className="h-8" />
          </div>
          <div className="hidden md:flex items-center gap-3">
            <Link href="/login" className="text-chase-navy hover:underline">Sign in</Link>
            <Link href="/signup" className="rounded bg-chase-blue px-4 py-2 text-white">Open an account</Link>
          </div>
          <div className="flex md:hidden items-center gap-2 w-full justify-end">
            <Link href="/login" className="text-chase-navy underline">Sign in</Link>
            <Link href="/signup" className="rounded bg-chase-blue px-3 py-1.5 text-white text-sm">Open</Link>
          </div>
        </div>
        <div className="mx-auto max-w-7xl px-4 pb-3 border-b">
          <nav className="flex items-center gap-4 md:gap-6 text-sm text-chase-navy overflow-x-auto whitespace-nowrap">
            <Link href="#" className="hover:text-chase-blue">Checking</Link>
            <Link href="#" className="hover:text-chase-blue">Savings &amp; CDs</Link>
            <Link href="#" className="hover:text-chase-blue">Credit cards</Link>
            <Link href="#" className="hover:text-chase-blue">Home loans</Link>
            <Link href="#" className="hover:text-chase-blue">Auto</Link>
            <Link href="#" className="hover:text-chase-blue">Investing by J.P. Morgan</Link>
            <Link href="#" className="hover:text-chase-blue">Education &amp; goals</Link>
            <Link href="#" className="hover:text-chase-blue">Travel</Link>
          </nav>
        </div>
      </div>

      <section className="bg-chase-blue">
        <div className="mx-auto max-w-7xl px-4 py-10 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-start">
         <div className="text-white flex items-start gap-6 md:gap-10 justify-center mt-6 md:mt-10 w-full">
  <div className="flex flex-col items-start">
    <div className="text-2xl md:text-3xl">Enjoy</div>
    <div className="text-5xl md:text-7xl font-semibold">$300</div>
  </div>

  <div className="w-full max-w-full">
    <div className="mt-2 text-3xl md:text-5xl font-semibold leading-tight">
      <span className="block">New Chase checking</span>
      <span className="block">customers</span>
    </div>

    <p className="mt-4 max-w-md text-sm md:text-base">
      Open a Chase Total Checking account with qualifying activities.
    </p>

    <Link
      href="/signup"
      className="mt-6 inline-flex items-center gap-2 rounded bg-white px-3 py-2 md:px-4 text-chase-blue font-medium"
    >
      Open an account <ChevronRight size={16} />
    </Link>
  </div>
</div>





          <div className="bg-white rounded-md shadow-md p-4 sm:p-5 w-full max-w-sm md:justify-self-end">
            <div className="text-sm text-muted">Welcome</div>
            <form className="mt-3 space-y-3">
              <div>
                <label className="block text-sm text-chase-navy mb-1">Username</label>
                <input type="text" className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-chase-blue outline-none" />
              </div>
              <div>
                <label className="block text-sm text-chase-navy mb-1">Password</label>
                <input type="password" className="w-full rounded border px-3 py-2 focus:ring-2 focus:ring-chase-blue outline-none" />
              </div>
              <div className="flex items-center justify-between">
                <label className="flex items-center gap-2 text-sm text-chase-navy"><input type="checkbox" className="rounded border"/>Remember me</label>
                <Link href="#" className="text-sm text-chase-blue">Use token</Link>
              </div>
              <button className="w-full rounded bg-chase-blue px-4 py-2 text-white font-medium">Sign in</button>
              <div className="flex items-center justify-between text-xs">
                <Link href="#" className="text-chase-blue">Forgot username/password?</Link>
                <Link href="/signup" className="text-chase-blue">Not enrolled? Sign up</Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-4">
        <div className="py-10 md:py-12 text-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-gray-800">Choose what's right for you</h2>
          <div className="mt-6 grid grid-cols-3 sm:grid-cols-6 gap-4 md:gap-6 text-gray-600">
            <div className="flex flex-col items-center gap-1"><Briefcase color="gray" size={32} strokeWidth={1.5}/><span className="text-xs md:text-sm font-medium text-blue-800">Business</span></div>
            <div className="flex flex-col items-center gap-1"><CreditCard color="gray" size={32} strokeWidth={1.5}/><span className="text-xs md:text-sm font-medium text-blue-800">Credit cards</span></div>
            <div className="flex flex-col items-center gap-1"><HomeIcon color="gray" size={32} strokeWidth={1.5}/><span className="text-xs md:text-sm font-medium text-blue-800">Checking</span></div>
            <div className="flex flex-col items-center gap-1"><Plane color="gray" size={32} strokeWidth={1.5}/><span className="text-xs md:text-sm font-medium text-blue-800">Travel</span></div>
            <div className="flex flex-col items-center gap-1"><PiggyBank color="gray" size={32} strokeWidth={1.5}/><span className="text-xs md:text-sm font-medium text-blue-800">Savings</span></div>
            <div className="flex flex-col items-center gap-1"><HomeIcon color="gray" size={32} strokeWidth={1.5}/><span className="text-xs md:text-sm font-medium text-blue-800">Home loans</span></div>
          </div>
          <div className="mt-4 flex items-center justify-center gap-4">
            <button className="rounded-full border border-gray-300 p-1 text-chase-blue"><ChevronLeft size={18}/></button>
            <span className="h-1.5 w-1.5 rounded-full bg-chase-blue"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
            <span className="h-1.5 w-1.5 rounded-full bg-gray-300"></span>
            <button className="rounded-full border border-gray-300 p-1 text-chase-blue"><ChevronRight size={18}/></button>
          </div>
          <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            <div className="rounded-lg border border-gray-200 overflow-hidden text-left shadow-sm min-h-[240px]">
              <div className="bg-[#003A79] text-white px-4 py-3 flex items-center justify-between">
                <h3 className="text-base font-bold">Chase Sapphire Reserve®</h3>
                <CreditCard size={24} strokeWidth={1.75} />
              </div>
              <div className="px-4 py-4">
                <p className="text-chase-navy text-base font-bold">Earn 125,000 bonus points</p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">Get more than $2,700 in annual value. Plus, earn 4x on flights and hotels booked direct. Terms apply.</p>
                <Link href="#" className="mt-3 inline-block text-sm text-chase-blue font-medium hover:underline">See details</Link>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 overflow-hidden text-left shadow-sm min-h-[240px]">
              <div className="bg-[#003A79] text-white px-4 py-3 flex items-center justify-between">
                <h3 className="text-base font-bold">J.P. Morgan</h3>
                <UserCircle size={24} strokeWidth={1.75} />
              </div>
              <div className="px-4 py-4">
                <p className="text-chase-navy text-base font-bold">Don't go it alone</p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">Partner with J.P. Morgan Private Client for your investment goals.</p>
                <Link href="#" className="mt-3 inline-block rounded bg-chase-blue px-4 py-2 text-white text-sm font-medium">Continue</Link>
              </div>
            </div>
            <div className="rounded-lg border border-gray-200 overflow-hidden text-left shadow-sm min-h-[240px]">
              <div className="bg-[#003A79] text-white px-4 py-3 flex items-center justify-between">
                <h3 className="text-base font-bold">Chase Credit Cards</h3>
                <CreditCard size={24} strokeWidth={1.75} />
              </div>
              <div className="px-4 py-4">
                <p className="text-chase-navy text-base font-bold">See if you're preapproved</p>
                <p className="mt-1 text-sm text-gray-600 leading-relaxed">Learn which Chase Credit Cards you’re preapproved for in just a few moments. Plus, there’s no impact to your credit score.</p>
                <Link href="#" className="mt-3 inline-block rounded bg-chase-blue px-4 py-2 text-white text-sm font-medium">Get started</Link>
              </div>
            </div>
          </div>
        </div>
        <div className="py-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="flex items-center md:items-start gap-6 md:gap-10 text-center md:text-left justify-center">
            <Car color="#0D5CB6" strokeWidth={1.25} className="w-32 h-32 md:w-[280px] md:h-[280px]" />
            <div className="flex flex-col items-center md:items-start justify-center">
              <h3 className="text-lg md:text-xl font-semibold text-chase-navy">Get prequalified in seconds with Chase Auto</h3>
              <p className="mt-2 text-sm md:text-base text-gray-600">Learn how much you can borrow with no impact on your credit score.</p>
              <Link href="#" className="mt-4 inline-block rounded bg-[#006747] px-3 py-2 md:px-4 text-white text-sm font-medium">Get prequalified</Link>
            </div>
          </div>
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="text-chase-navy">
              <h3 className="text-lg md:text-xl font-semibold">New Chase checking customers</h3>
              <p className="mt-2 text-sm md:text-base text-gray-600">Enjoy $100 when you open a Chase Secure Banking account with qualifying transactions.</p>
              <Link href="#" className="mt-4 inline-block rounded bg-[#006747] px-3 py-2 md:px-4 text-white text-sm font-medium">Open an account</Link>
            </div>
            <div className="bg-chase-blue text-white px-6 py-4 rounded-md text-4xl md:text-5xl font-bold">$100</div>
          </div>
        </div>
      </main>

      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 text-sm text-muted">© 2025 JPMorgan Chase & Co. For demo purposes only.</div>
      </footer>
    </div>
  );
}
