import Link from "next/link";

export default function Header() {
    return (
        <header className="bg-gradient-to-r from-purple-700 via-indigo-700 to-blue-700 text-white py-4 px-6 shadow-md">
            <div className="max-w-7xl mx-auto flex items-center justify-between">
                {/* logo */}
                <Link href="" className="text-2xl font-bold uppercase tracking-wide hover:text-yellow-300 transition">
                    KHZX
                </Link>

                {/* nav */}
                <nav className="space-x-8 hidden md:flex">
                    <Link href="/about" className="hover:text-yellow-300 transition">
                    About
                    </Link>
                    <Link href="/services" className="hover:text-yellow-300 transition">
                    Service
                    </Link>
                    <Link href="/contact" className="hover:text-yellow-300 transition">
                    Contact
                    </Link>
                </nav>

                {/* cta future paling */}
                <div>
                    <Link href="/login" className="px-4 py-2 bg-yellow-400 text-purple-900 font-semibold rounded-md hover:bg-yellow-300 transition">
                        Sign In
                    </Link>
                </div>

                {/* mobile menu smol screen */}
                <div className="md:hidden">
                    {/* menu icon */}
                    <button aria-label="Open menu" className="focus:outline-none">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24" >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                        </svg>
                    </button>
                </div>
            </div>
        </header>
    );
}