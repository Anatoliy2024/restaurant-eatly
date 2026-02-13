import type { Metadata } from "next"

import { Inter, Poppins, Public_Sans, Quicksand } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin", "cyrillic"],
  variable: "--font-inter",
  display: "swap",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
})

const publicSans = Public_Sans({
  subsets: ["latin"],
  variable: "--font-public-sans",
  display: "swap",
})

const quicksand = Quicksand({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-quicksand",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Restaurant Early",
  description: "the best restaurant in the city",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} 
        ${poppins.variable} 
        ${publicSans.variable}
        ${quicksand.variable}
         antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
