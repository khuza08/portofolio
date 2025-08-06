import Link from "next/link";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-gradient-to-r from-blue-700 via-indigo-700 to-purple-700 text-white py-6 px-6 shadow-inner mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Huza Antisuki. All rights reserved.</p>

        {/* footer nav */}
        <nav className="space-x-6">
          <Link href="/" className="hover:text-yellow-300 transition">
            Home
          </Link>
          <Link href="/about" className="hover:text-yellow-300 transition">
            About
          </Link>
          <Link href="/services" className="hover:text-yellow-300 transition">
            Services
          </Link>
          <Link href="/contact" className="hover:text-yellow-300 transition">
            Contact
          </Link>
        </nav>

        {/* social media (wip) */}
        <div className="flex space-x-4">
          <a
            href="https://instagram.com/huzawastaken"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:text-yellow-300 transition"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M8 19c7.732 0 11.972-6.4 11.972-11.944 0-.18-.004-.357-.012-.534A8.588 8.588 0 0022 5.557a8.385 8.385 0 01-2.357.646 4.125 4.125 0 001.806-2.27 8.22 8.22 0 01-2.605.998 4.109 4.109 0 00-7.002 3.746A11.654 11.654 0 013 4.763a4.107 4.107 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.107 4.107 0 003.292 4.023 4.11 4.11 0 01-1.852.07 4.11 4.11 0 003.833 2.855A8.235 8.235 0 014 18.407a11.616 11.616 0 006.29 1.837" />
            </svg>
          </a>
          {/* additional heree */}
        </div>
      </div>
    </footer>
  );
}
