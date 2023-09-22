import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'katrinasten.com',
  // description: 'Welcome to Katrina Sten OnlyFan Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body>
        <div id="__next">
          {children}
        </div>
      </body>
    </html>
  )
}
