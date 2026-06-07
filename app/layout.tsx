import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Studio Bradley — Design with feelings.',
  description: 'A dynamic freelance creative team specializing in graphic design, web design, brand identity, and video editing.',
  openGraph: {
    title: 'Studio Bradley — Design with feelings.',
    description: 'A dynamic freelance creative team crafting brands and visuals that connect.',
    url: 'https://studiobradley.com',
    siteName: 'Studio Bradley',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
