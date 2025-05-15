import Link from 'next/link'

interface IconProps {
  href: string
  label: string
  svgPath: string
}

const SocialIcon = ({ href, label, svgPath }: IconProps) => (
  <Link
    href={href}
    target='_blank'
    className='text-gray-400 hover:text-[#E94224] focus-visible:ring-2 
               focus-visible:ring-offset-2 focus-visible:ring-[#00857C] rounded-full p-2'
  >
    <span className='sr-only'>{label}</span>
    <svg className='h-5 w-5' fill='currentColor' viewBox='0 0 20 20' aria-hidden='true'>
      <path d={svgPath} />
    </svg>
  </Link>
)

export default SocialIcon