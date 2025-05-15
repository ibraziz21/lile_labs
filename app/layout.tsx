import type { Metadata } from 'next'
import { Raleway } from 'next/font/google'
import './globals.css'

/* -------------------------------------------------------------------------- */
/*                               Font & Metadata                              */
/* -------------------------------------------------------------------------- */
const raleway = Raleway({ subsets: ['latin'], variable: '--font-raleway' })

export const metadata: Metadata = {
  title: 'Lile Labs | Blockchain Consulting, Research & Education',
  description:
    'Blockchain consultants driving adoption in Africa through data-driven research, smart-contract expertise, and hands-on education.',
}

/* -------------------------------------------------------------------------- */
/*                               Root Layout                                  */
/* -------------------------------------------------------------------------- */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang='en'
      // enables smooth-scroll for in-page links (Header anchors)
      className='scroll-smooth'
    >
      <body
        // Tailwind brand colours are declared in globals.css / tailwind.config
        className={`${raleway.variable} font-sans bg-white text-[#061726]`}
      >
        {children}
      </body>
    </html>
  )
}
