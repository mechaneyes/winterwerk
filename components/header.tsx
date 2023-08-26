import Link from 'next/link'

export default function Header() {
  return (
    <h2 className="header__h2 text-2xl md:text-4xl font-bold mb-20 mt-8">
      <Link href="/" className="hover:underline">
        WinterWerk
      </Link>
    </h2>
  )
}
