// app/layout.tsx
import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'IM Solutions',
  description: 'Your trusted marketing partner',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <nav className="bg-blue-900 text-white p-4 shadow-md">
          <div className="container mx-auto flex justify-between items-center">
            <Link href="/" className="text-xl font-bold">
              <img src="/logo.png" alt="IM Solutions Logo" className="h-10 inline" />
            </Link>
            <ul className="flex space-x-6 font-semibold">
              <li><Link href="/">Home</Link></li>
              <li><Link href="#services">Services</Link></li>
              <li><Link href="#about">About</Link></li>
              <li><Link href="#contact">Contact</Link></li>
            </ul>
          </div>
        </nav>
        <main>{children}</main>
      </body>
    </html>
  )
}
