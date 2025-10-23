import '../styles/globals.css'; // or your global styles file
import Link from 'next/link';

export const metadata = {
  title: 'Safe Rental Marketplace',
  description: 'Verified, safe rental marketplace with Firebase auth',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header
          style={{
            padding: '1.25rem 3rem',
            borderBottom: '2px solid #a78bfa',
            fontWeight: '900',
            fontSize: '1.8rem',
            color: '#6b21a8',
            letterSpacing: '0.07em',
            fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Link href="/" style={{ textDecoration: 'none', color: '#6b21a8' }}>
            SAFE RENTAL MARKETPLACE
          </Link>
          <nav>
            <Link href="/" style={{ marginRight: '1rem', color: '#6b21a8' }}>
              Home
            </Link>
            <Link href="/properties" style={{ marginRight: '1rem', color: '#6b21a8' }}>
              All Properties
            </Link>
            <Link
              href="/properties/new"
              style={{
                backgroundColor: '#a78bfa',
                padding: '0.5rem 1rem',
                borderRadius: '0.8rem',
                color: 'white',
                fontWeight: '600',
              }}
            >
              Add Property
            </Link>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
