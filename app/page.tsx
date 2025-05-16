// NOTE: Tailwind classes assume brand colours taken directly from the Lile Labs logo
// Primary Navy  #061726  |  Accent Coral  #E94224  |  Accent Teal  #00857C

import Image from 'next/image'
import Header from './header'
import { footerNavigation, people, secondaryFeatures, pillars, programs } from '@/data/data'
import Link from 'next/link'
import SocialIcon from '@/components/SocialIcon'

export default async function Home() {
  return (
    <div className='bg-white'>
      <main>
        <div className='bg-white'>
          {/* ── Header ─────────────────────────────────────────────── */}
          <Header />

          <div className='relative isolate overflow-hidden bg-[#061726] pt-20'>

{/* ── Animated blobs (pure CSS) ───────────────────────────── */}
<div
  className='pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full
             bg-[#E94224]/40 blur-3xl animate-blob'
  /* shorter duration = faster drift; tweak at will */
  style={{ animationDuration: '18s' }}
/>
<div
  className='pointer-events-none absolute -bottom-32 -right-32 h-96 w-96 rounded-full
             bg-[#00857C]/40 blur-3xl animate-blob'
  style={{ animationDuration: '22s', animationDelay: '4s' }}
/>

{/* ── Main content ────────────────────────────────────────── */}
<div className='relative z-10 mx-auto max-w-7xl px-6 py-20 sm:py-28
                lg:flex lg:items-center lg:gap-x-14 lg:px-8'>

  {/* Copy block */}
  <div className='max-w-2xl text-white'>
    <h1 className='text-4xl font-bold tracking-tight sm:text-6xl'>
      Empowering Africa’s&nbsp;Blockchain Future
    </h1>
    <p className='mt-6 text-lg leading-8 text-gray-300'>
      Lile Labs is a Nairobi-based consulting and education studio helping
      founders, enterprises, and institutions unlock Web3 through expert
      research, immersive training, and battle-tested product guidance.
    </p>

    {/* CTAs */}
    <div className='mt-10 flex gap-4'>
      <Link
        href='mailto:hello@lilelabs.africa'
        className='rounded-full bg-white/10 px-8 py-2.5 font-semibold text-white
                   backdrop-blur ring-1 ring-white/20 transition hover:bg-[#E94224]'
      >
        Work&nbsp;With&nbsp;Us
      </Link>
      <Link
        href='#services'
        className='inline-flex items-center gap-1 text-sm font-semibold
                   text-gray-300 hover:text-[#ffb33e]'
      >
        Our Services <span aria-hidden>→</span>
      </Link>
    </div>
  </div>

  {/* Hero illustration */}
  <Image
    src='/assets/Lile.jpg'   /* swap for your actual art */
    alt='Lile Labs hero'
    width={1400}
    height={1200}
    className='mt-16 w-full max-w-lg lg:mt-0'
    priority
  />
</div>
</div>
</div>

        {/* ── Partner Logo Cloud ───────────────────────────────────── */}
        <section className='mx-auto sm:mt-28 max-w-7xl px-6' id='partners'>
          <p className='py-10 text-center text-3xl font-bold tracking-tight text-[#061726] sm:text-4xl'>
            Trusted&nbsp;By
          </p>

          <div
            className='mx-auto grid max-w-lg grid-cols-2 place-items-center gap-x-8 gap-y-12 sm:max-w-xl sm:grid-cols-3 sm:gap-x-10 sm:gap-y-14 lg:max-w-none lg:grid-cols-5'
          >
            <Image className='max-h-12 w-full object-contain' src='/assets/Aquapurge.png' alt='Aquapurge' width={158} height={48} />
            <Image className='max-h-12 w-full object-contain' src='/assets/web3Clubs.jpg' alt='Web3 Clubs' width={158} height={48} />
            <Image className='max-h-12 w-full object-contain' src='/assets/mashinani.png' alt='Nurturing Stars' width={158} height={48} />
            <Image className='max-h-12 w-full object-contain' src='/assets/Minipay.png' alt='Minipay' width={158} height={48} />
    
          </div>
        </section>

        <section className='mx-auto mt-12 max-w-5xl rounded-xl bg-[#061726] px-6 py-14 sm:mt-28 lg:px-16'>
    {/* Mission statement */}
    <div className='mx-auto max-w-2xl text-center'>
      <h2 className='text-3xl font-bold tracking-tight text-white sm:text-4xl'>
        Our&nbsp;Mission
      </h2>
      <p className='mt-4 text-lg leading-8 text-gray-300'>
        Empower Africa’s builders, businesses, and institutions with world-class
        blockchain expertise—through actionable research, hands-on education,
        and bespoke consulting.
      </p>
    </div>

    {/* Glass cards */}
    <ul className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
      {pillars.map(({ title, body }) => (
        <li
          key={title}
          className='rounded-xl bg-white/10 p-6 backdrop-blur
                     ring-1 ring-white/15 transition hover:ring-[#E94224]'
        >
          <h3 className='text-lg font-semibold text-white'>{title}</h3>
          <p className='mt-2 text-sm text-gray-200'>{body}</p>
        </li>
      ))}
    </ul>
  </section>
         {/* ─────────────────────── SERVICES ─────────────────────── */}
         <section id='services' className='mx-auto mt-28 max-w-7xl px-6 lg:px-8'>
          <h2 className='text-center text-3xl font-bold tracking-tight text-[#061726] sm:text-4xl'>What&nbsp;We&nbsp;Do</h2>
          <p className='mx-auto mt-4 max-w-2xl text-center text-lg leading-8 text-gray-600'>
            We cover the full blockchain journey—from ideation to production and up-skilling your team.
          </p>

          {/* Service cards */}
          <div className='mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3'>
            {/* Consulting */}
            <div className='rounded-2xl border border-gray-100 p-8 shadow-sm transition hover:shadow-lg'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#E94224]/10'>
                <svg className='h-6 w-6 text-[#E94224]' fill='currentColor' viewBox='0 0 20 20'><path d='M2 10l6 6L18 4'/></svg>
              </div>
              <h3 className='mt-6 text-xl font-semibold text-[#061726]'>Consulting</h3>
              <p className='mt-2 text-base leading-7 text-gray-600'>Token design, DeFi architecture, audits, and go-to-market playbooks tailored to your roadmap.</p>
            </div>

            {/* Research & Insights */}
            <div className='rounded-2xl border border-gray-100 p-8 shadow-sm transition hover:shadow-lg'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#00857C]/10'>
                <svg className='h-6 w-6 text-[#00857C]' fill='currentColor' viewBox='0 0 20 20'><path d='M13 7H7v6h6V7z'/><path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16z' clipRule='evenodd'/></svg>
              </div>
              <h3 className='mt-6 text-xl font-semibold text-[#061726]'>Research&nbsp;&amp;&nbsp;Reports</h3>
              <p className='mt-2 text-base leading-7 text-gray-600'>Deep-dive market analysis, on-chain data dashboards, and bespoke white-papers that give you an edge.</p>
            </div>

            {/* Education Cohorts */}
            <div className='rounded-2xl border border-gray-100 p-8 shadow-sm transition hover:shadow-lg'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#E94224]/10'>
                <svg className='h-6 w-6 text-[#E94224]' fill='currentColor' viewBox='0 0 20 20'><path d='M4 3h12v2H4zM4 9h12v2H4zM4 15h12v2H4z'/></svg>
              </div>
              <h3 className='mt-6 text-xl font-semibold text-[#061726]'>Web3&nbsp;Education</h3>
              <p className='mt-2 text-base leading-7 text-gray-600'>Cohort-based programs and workshops—starting with Africa’s first blockchain data-analytics track.</p>
            </div>

            {/* Institutional / Gov Training */}
            <div className='rounded-2xl border border-gray-100 p-8 shadow-sm transition hover:shadow-lg'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#00857C]/10'>
                <svg className='h-6 w-6 text-[#00857C]' fill='currentColor' viewBox='0 0 20 20'><path d='M10 2l6 6-6 6-6-6 6-6z'/></svg>
              </div>
              <h3 className='mt-6 text-xl font-semibold text-[#061726]'>Institutional&nbsp;Training</h3>
              <p className='mt-2 text-base leading-7 text-gray-600'>Curricula for banks, governments, and universities—turning policy makers into informed innovators.</p>
            </div>

            {/* Startup Solutions */}
            <div className='rounded-2xl border border-gray-100 p-8 shadow-sm transition hover:shadow-lg'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#E94224]/10'>
                <svg className='h-6 w-6 text-[#E94224]' fill='currentColor' viewBox='0 0 20 20'><path d='M11 17l-5-5h3V3h4v9h3l-5 5z'/></svg>
              </div>
              <h3 className='mt-6 text-xl font-semibold text-[#061726]'>Startup&nbsp;Solutions</h3>
              <p className='mt-2 text-base leading-7 text-gray-600'>Rapid prototyping, MVP builds, and validation sprints for African founders ready to ship.</p>
            </div>

            {/* Opportunity Mapping */}
            <div className='rounded-2xl border border-gray-100 p-8 shadow-sm transition hover:shadow-lg'>
              <div className='flex h-12 w-12 items-center justify-center rounded-full bg-[#00857C]/10'>
                <svg className='h-6 w-6 text-[#00857C]' fill='currentColor' viewBox='0 0 20 20'><path d='M3 3h14v14H3V3z' /><path d='M7 7h6v6H7V7z' fill='white' /></svg>
              </div>
              <h3 className='mt-6 text-xl font-semibold text-[#061726]'>Economic&nbsp;Opportunity&nbsp;Mapping</h3>
              <p className='mt-2 text-base leading-7 text-gray-600'>Research that spotlights high-leverage blockchain use cases for job creation across the continent.</p>
            </div>
          </div>

          <div className='mt-16 flex justify-center'>
            <Link
              href='mailto:hello@lilelabs.africa'
              className='rounded-full bg-[#00857C] px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#E94224] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00857C]'
            >
              Schedule a Discovery Call
            </Link>
          </div>
        </section>

        <section id='programs' className='mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8'>
    <div className='mx-auto max-w-2xl text-center'>
      <h2 className='text-3xl font-bold tracking-tight text-[#061726] sm:text-4xl'>
        Our&nbsp;Flagship&nbsp;Programs
      </h2>
      <p className='mt-4 text-lg leading-8 text-gray-600'>
        Purpose-built initiatives that turn learning into real-world impact.
      </p>
    </div>

    {/* Card grid */}
    <ul
      role='list'
      className='mx-auto mt-20 grid max-w-2xl gap-x-8 gap-y-12
                 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3'
    >
      {programs.map(({ slug, title, blurb, href, image }) => (
        <li
          key={slug}
          className='flex flex-col overflow-hidden rounded-xl bg-white shadow
                     ring-1 ring-gray-100 transition hover:-translate-y-1 hover:shadow-lg'
        >
          {/* HERO IMAGE */}
          <Image
            src={image}
            alt={title}
            width={600}
            height={400}
            className='h-40 w-full object-cover'
            priority={slug === 'web3-mashinani'}  // load the first one eagerly
          />

          {/* Body */}
          <div className='flex flex-1 flex-col p-6'>
            <h3 className='text-lg font-semibold text-[#061726]'>{title}</h3>
            <p className='mt-2 text-sm leading-6 text-gray-600 flex-1'>{blurb}</p>

            <Link
              href={href}
              target='_blank'
              className='mt-4 inline-flex items-center text-sm font-semibold
                         text-[#E94224] hover:text-[#00857C]'
            >
              Learn&nbsp;More&nbsp;→
            </Link>
          </div>
        </li>
      ))}
    </ul>
  </section>

        <section id='team' className='py-20'>
  <div className='mx-auto max-w-7xl px-6 text-center lg:px-8'>
    {/* Heading */}
    <h2 className='text-3xl font-bold tracking-tight text-[#061726] sm:text-4xl'>
      Meet&nbsp;Our&nbsp;Team
    </h2>
    <p className='mt-4 text-lg leading-8 text-gray-600'>
      Crypto natives, educators, and builders united by a passion for meaningful innovation.
    </p>

    {/* Grid */}
    <ul
      role='list'
      className='mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16
                 sm:grid-cols-2 md:grid-cols-3 lg:max-w-none lg:grid-cols-4'
    >
      {people.map(({ name, role, imageUrl, twitterUrl, linkedinUrl }) => (
        <li key={name} className='flex flex-col items-center'>
          {/* Avatar */}
          <Image
            src={imageUrl}
            alt={name}
            width={220}
            height={220}
            className='h-56 w-56 rounded-lg object-cover object-top shadow'
          />

          {/* Name & Role */}
          <h3 className='mt-6 text-base font-semibold text-[#061726]'>{name}</h3>
          <p className='text-sm text-gray-500'>{role}</p>

          {/* Social links */}
          <div className='mt-4 flex gap-x-5'>
            {twitterUrl && (
              <a
                href={twitterUrl}
                target='_blank'
                rel='noreferrer'
                aria-label='Twitter / X'
                className='text-gray-400 hover:text-[#E94224] transition'
              >
                {/* Twitter icon (Simple-Icons path) */}
                <svg
                  viewBox='0 0 24 24'
                  className='h-5 w-5 fill-current'
                  aria-hidden='true'
                >
                  <path d='M23.643 4.937c-.835.37-1.732.62-2.675.732a4.657 4.657 0 0 0 2.048-2.57 9.035 9.035 0 0 1-2.887 1.106 4.52 4.52 0 0 0-7.795 4.117 12.807 12.807 0 0 1-9.29-4.71 4.51 4.51 0 0 0 1.397 6.028 4.48 4.48 0 0 1-2.048-.57v.058a4.53 4.53 0 0 0 3.626 4.433 4.522 4.522 0 0 1-2.04.077 4.53 4.53 0 0 0 4.223 3.14 9.07 9.07 0 0 1-5.604 1.93c-.364 0-.723-.02-1.079-.062a12.79 12.79 0 0 0 6.92 2.01c8.302 0 12.842-6.875 12.842-12.842 0-.196-.005-.392-.014-.586A9.186 9.186 0 0 0 24 4.59a9.05 9.05 0 0 1-2.357.647z' />
                </svg>
              </a>
            )}
            {linkedinUrl && (
              <a
                href={linkedinUrl}
                target='_blank'
                rel='noreferrer'
                aria-label='LinkedIn'
                className='text-gray-400 hover:text-[#E94224] transition'
              >
                {/* LinkedIn icon (Simple-Icons path) */}
                <svg
                  viewBox='0 0 24 24'
                  className='h-5 w-5 fill-current'
                  aria-hidden='true'
                >
                  <path d='M22.225 0H1.771C.792 0 0 .774 0 1.732v20.535C0 23.226.792 24 1.771 24h20.451C23.207 24 24 23.226 24 22.267V1.732C24 .774 23.207 0 22.225 0zM7.113 20.452H3.56V9h3.553zm-1.777-13c-1.144 0-2.068-.93-2.068-2.078 0-1.148.924-2.078 2.068-2.078s2.068.93 2.068 2.078c0 1.148-.924 2.078-2.068 2.078zm15.111 13h-3.554v-5.569c0-1.328-.024-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.354V9h3.413v1.561h.049c.476-.9 1.637-1.852 3.368-1.852 3.595 0 4.259 2.368 4.259 5.455v6.288z' />
                </svg>
              </a>
            )}
          </div>
        </li>
      ))}
    </ul>
  </div>
</section>

        {/* ── Newsletter CTA ───────────────────────────────────────── */}
        <section className='mx-auto pt-10 sm:pt-32'>
          <div className='relative isolate overflow-hidden bg-[#061726] py-24 sm:px-24 rounded-none'>
            <h2 className='mx-auto max-w-2xl text-center text-3xl font-bold tracking-tight text-white sm:text-4xl'>
              Insights in Your Inbox
            </h2>
            <p className='mx-auto mt-2 max-w-xl text-center text-lg leading-8 text-gray-300'>
              Subscribe for cutting-edge research, events, and career opportunities—straight from the Lile Labs desk.
            </p>
            <div className='mt-10 flex justify-center'>
              <form className='flex w-full max-w-md gap-x-4'>
                <label htmlFor='email-address' className='sr-only'>Email address</label>
                <input
                  type='email'
                  name='email-address'
                  id='email-address'
                  autoComplete='email'
                  required
                  className='flex-auto rounded-full border-2 border-gray-500 bg-white/5 px-3 py-1.5 text-base text-white placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#E94224]'
                  placeholder='you@example.com'
                />
                <button
                  type='submit'
                  className='flex-none rounded-full bg-[#E94224] px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#00857C] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E94224]'
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ─────────────────────────────────────────────────── */}
      <footer aria-labelledby='footer-heading'>
        <h2 id='footer-heading' className='sr-only'>Footer</h2>
        <div className='mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32 text-[#061726]'>
          <div className='xl:grid xl:grid-cols-3 xl:gap-8'>
            <Image className='h-16 w-auto' src='/assets/LL.png' alt='Lile Labs' width={120} height={64} />

            <div className='mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0'>
  {(
    ['navigate', 'support', 'partner', 'contacts'] as const   // ← literal union
  ).map((sectionKey) => (
    <div key={sectionKey} className='md:col-span-1'>
      <h3 className='text-sm font-semibold leading-6 capitalize'>
        {sectionKey}
      </h3>

      <ul role='list' className='mt-6 space-y-4'>
        {footerNavigation[sectionKey].map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className='text-sm leading-6 hover:text-[#E94224]'
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  ))}
</div>
          </div>

          <div className='mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 lg:flex lg:items-center lg:justify-between'>
            <p className='text-xs leading-5'>&copy; Lile Labs {new Date().getFullYear()}. All rights reserved.</p>
            <div className='mt-8 flex space-x-6 sm:mt-0'>
              {footerNavigation.social.map((item) => (
                <Link key={item.name} href={item.href} className='text-gray-400 hover:text-[#E94224]'>
                  <span className='sr-only'>{item.name}</span>
                  <item.icon className='h-6 w-6' aria-hidden='true' />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
