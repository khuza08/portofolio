import Header from './components/header';
import Footer from './components/footer';
import Geser from './components/geserbawah';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Geser />
        <Footer />
      </body>
    </html>
  );
}
