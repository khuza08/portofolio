import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bottom-0 left-0 w-full background-blur-lg border-t border-white/25 text-white py-6 px-6 shadow-inner mt-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
        {/* copyright */}
        <p className="text-sm">&copy; {new Date().getFullYear()} Huza Antisuki. All rights reserved.</p>

        {/* footer nav */}
        <nav className="space-x-6">
          <Link href="/" className="hover:bg-white/15 transition">
            Home
          </Link>
          <Link href="/about" className="hover:bg-white/15 transition">
            About
          </Link>
          <Link href="/services" className="hover:bg-white/15 transition">
            Services
          </Link>
          <Link href="/contact" className="hover:bg-white/15 transition">
            Contact
          </Link>
        </nav>

        {/* social media (wip) */}
        <div className="flex space-x-4 ">

          <a
            href="https://instagram.com/huzawastaken"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
            className="hover:bg-white/10 hover:border-white/30 border border-white/25 p-2 rounded-lg transition"
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

          <a href="https://instagram.com/huzawastaken"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:bg-white/10 hover:border-white/30 border border-white/30 p-2 rounded-lg transition"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5a4.25 4.25 0 0 0 4.25-4.25v-8.5A4.25 4.25 0 0 0 16.25 3.5h-8.5Zm4.25 3.25A5.25 5.25 0 1 1 6.75 12 5.25 5.25 0 0 1 12 6.75Zm0 1.5A3.75 3.75 0 1 0 15.75 12 3.75 3.75 0 0 0 12 8.25Zm5.25-.5a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25Z" />
            </svg>

          </a>
          <a href="#"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Discord"
            className="hover:bg-white/10 hover:border-white/30 border border-white/30 p-2 rounded-lg transition"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M21.943 6.19a2.147 2.147 0 0 0-1.52-1.515A16.647 16.647 0 0 0 16.592 3.7a.098.098 0 0 0-.104.037 11.33 11.33 0 0 0-.488.772c-2.88-.432-5.75-.432-8.608 0a11.548 11.548 0 0 0-.49-.772A.093.093 0 0 0 6.898 3.7a16.616 16.616 0 0 0-3.832.976 2.146 2.146 0 0 0-1.52 1.513A21.783 21.783 0 0 0 .252 17.204a2.28 2.28 0 0 0 2.307 2.247c.19.024.378.036.566.035a19.722 19.722 0 0 0 3.608-.37.1.1 0 0 0 .092-.07c.26-.615.495-1.249.703-1.898a.099.099 0 0 0-.053-.122.099.099 0 0 0-.038-.012 14.993 14.993 0 0 1-2.23-.605.1.1 0 0 1-.035-.163c.157-.12.313-.244.462-.372a.096.096 0 0 1 .098-.014c4.75 2.155 9.89 2.155 14.61 0a.096.096 0 0 1 .099.012c.15.128.305.252.462.373a.1.1 0 0 1-.034.162 15.287 15.287 0 0 1-2.231.603.096.096 0 0 0-.07.063c.21.65.445 1.284.704 1.899a.1.1 0 0 0 .092.07 19.67 19.67 0 0 0 3.608.37c.188.001.376-.011.566-.035a2.28 2.28 0 0 0 2.306-2.248A21.745 21.745 0 0 0 21.943 6.19ZM8.02 15.331c-1.026 0-1.871-.965-1.871-2.151 0-1.185.83-2.151 1.872-2.151 1.048 0 1.886.976 1.872 2.151-.014 1.186-.83 2.151-1.872 2.151Zm7.963 0c-1.027 0-1.871-.965-1.871-2.151 0-1.185.83-2.151 1.872-2.151 1.049 0 1.887.976 1.872 2.151-.015 1.186-.83 2.151-1.872 2.151Z" />
            </svg>
          </a>

          <a href=""
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            className="hover:bg-white/10 hover:border-white/30 border border-white/30 p-2 rounded-lg transition"
          >
            <svg
              className="w-5 h-5"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M22 3.24l-3.197 17.404c-.242 1.193-.874 1.486-1.769.924l-4.885-3.602-2.355 2.267c-.26.26-.477.477-.977.477l.349-4.9L18.69 6.392c.212-.187-.046-.291-.329-.104L6.38 13.945l-4.68-1.465c-1.016-.317-1.032-1.016.212-1.515L20.42 2.298c.886-.314 1.66.215 1.58.942z" />
            </svg>

          </a>

          {/* additional heree */}
        </div>
      </div>
    </footer>
  );
}
