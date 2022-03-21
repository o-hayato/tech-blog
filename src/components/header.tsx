import Link from 'next/link'

import { BLOG_TITLE } from '../lib/constants'

const Header = () => {
  return (
    <h2 className="text-2xl md:text-4xl font-bold tracking-tight md:tracking-tighter leading-tight pb-20 pt-8">
      <Link href="/">
        <a className="hover:underline">{BLOG_TITLE}</a>
      </Link>
    </h2>
  )
}

export default Header