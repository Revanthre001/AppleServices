import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import './globals.css'
import Header from '@/components/core/header'
import Footer from '@/components/core/footer'

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '300', '500', '700', '900'],
  display: 'swap'
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${roboto.className} antialiased bg-gray-900 text-slate-100 w-full min-w-[320px] max-w-[1920px] mx-auto`}
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
