import Header from './components/header';
import Footer from './components/footer';
import Geser from './components/geserbawah';
import './globals.css';
import { Inter } from "next/font/google"

const interaktif = Inter ({
  subsets: ["latin"],
  weight: "400",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${interaktif.className}`}>
        <Header />
        <main>{children}</main>
        <Geser />
        <Footer />
      </body>
    </html>
  );
}
