import React from "react"
import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-fira" });

export const metadata: Metadata = {
  title: 'Tag Programming | Desenvolvimento Web Profissional',
  description: 'Desenvolvimento de sites e aplicações web de alta performance. Transforme sua presença digital com soluções personalizadas.',
  generator: 'Thalis Gabriel',
  icons: {
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <body className={`${inter.variable} ${firaCode.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
