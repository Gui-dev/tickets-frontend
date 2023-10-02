import Image from 'next/image'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <nav className="flex h-16 w-full flex-row items-center gap-24 bg-primary px-8">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" height={64} width={345} />
      </Link>
      <div className="flex w-[50vw] items-center">
        <input
          type="text"
          placeholder="Insira o nome ou endereço do seu evento por aqui! :)"
          className="w-full rounded-md px-3 py-2 text-sm font-normal"
        />
      </div>
    </nav>
  )
}
