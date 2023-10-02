import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { Sidebar } from './components/sidebar'
import { Navbar } from './components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Tickets',
  description: 'Crie seu evento rápido e fácil',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ptBR">
      <body className={inter.className}>
        <Navbar />
        <Sidebar />
        {children}
      </body>
    </html>
  )
}
