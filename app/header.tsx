/* -------------------------------------------------------------------------- */
/*                                HEADER (auto tint)                         */
/* -------------------------------------------------------------------------- */
'use client'

import { Dialog } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Mission', href: '#mission' },
  { name: 'Services', href: '#services' },
  { name: 'Programs', href: '#programs' },
  { name: 'Team', href: '#team' },
  { name: 'Contact', href: '#footer-heading' },
]

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  /* watch scroll ---------------------------------------------------------- */
  useEffect(() => {
    const onScroll = () => setIsSticky(window.scrollY > 64)
    onScroll()                       // run once on mount
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  /* colour helpers -------------------------------------------------------- */
  const navText    = isSticky ? 'text-[#061726]' : 'text-white'
  const hoverColor = isSticky ? 'hover:text-[#E94224]' : 'hover:text-[#ffb33e]'

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300
                  ${isSticky ? 'backdrop-blur-nav ring-1 ring-black/5' : ''}`}
    >
      <nav className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
           aria-label='Global'>

        {/* Brand ------------------------------------------------------------ */}
        <Link href='/' className='-m-1.5 p-1.5 flex lg:flex-1'>
          <Image
            src='/assets/LL.png'
            alt='Lile Labs'
            width={120}
            height={64}
            className='h-10 w-auto'
          />
        </Link>

        {/* Mobile hamburger ------------------------------------------------- */}
        <button
          onClick={() => setMobileOpen(true)}
          className='-m-2.5 p-2.5 text-white lg:hidden'
        >
          <span className='sr-only'>Open main menu</span>
          <Bars3Icon className='h-6 w-6' aria-hidden='true' />
        </button>

        {/* Desktop nav ------------------------------------------------------ */}
        <div className='hidden lg:flex lg:gap-x-12'>
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`text-sm font-semibold leading-6 ${navText} ${hoverColor}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Desktop CTA ------------------------------------------------------ */}
        <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
          <Link
            href='https://calendar.app.google/VLkyP6wNXuvu988g7'
            className='rounded-full bg-[#E94224] px-6 py-2.5 text-sm font-semibold text-white
                       shadow-sm hover:bg-[#00857C] focus-visible:outline-2
                       focus-visible:outline-offset-2 focus-visible:outline-[#E94224]'
          >
            Let’s&nbsp;Talk
          </Link>
        </div>
      </nav>

      {/* Mobile slide-in panel --------------------------------------------- */}
      <Dialog as='div' className='lg:hidden' open={mobileOpen} onClose={setMobileOpen}>
        <div className='fixed inset-0 z-50 bg-black/30 backdrop-blur-sm' />
        <Dialog.Panel
          className='fixed inset-y-0 right-0 z-50 w-full max-w-sm overflow-y-auto
                     bg-white px-6 py-6 sm:ring-1 sm:ring-gray-900/10'
        >
          <div className='flex items-center justify-between'>
            <Link href='/' className='-m-1.5 p-1.5' onClick={() => setMobileOpen(false)}>
              <Image src='/assets/LL.png' alt='Lile Labs' width={120} height={64} className='h-10 w-auto'/>
            </Link>
            <button
              onClick={() => setMobileOpen(false)}
              className='-m-2.5 rounded-md p-2.5 text-[#061726]'
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>

          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-100'>
              <div className='space-y-2 py-6'>
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold
                               leading-7 text-[#061726] hover:bg-gray-50'
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className='py-6'>
                <Link
                  href='https://calendar.app.google/VLkyP6wNXuvu988g7'
                  className='block rounded-full bg-[#E94224] px-6 py-2.5 text-center
                             text-sm font-semibold text-white shadow-sm hover:bg-[#00857C]'
                  onClick={() => setMobileOpen(false)}
                >
                  Let’s&nbsp;Talk
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
