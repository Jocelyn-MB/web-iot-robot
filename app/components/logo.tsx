import Link from 'next/link'
import Image from 'next/image'

export default function Logo() {
  return (
    <Link href="/" className="block" aria-label="Cruip">
    <Image src="/images/blancoHommeLogo.svg" alt="Logo" width={72} height={72} style={{ borderRadius: '80% 80% 80% 80%' }}/>
    </Link>
  )
}