'use client'

import { FormEvent, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { AiOutlineSearch } from 'react-icons/ai'
import { useRouter } from 'next/navigation'

export const Navbar = () => {
  const [search, setSearch] = useState('')
  const navigation = useRouter()

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault()
    const searchParse = encodeURIComponent(search)
    navigation.push(`/filter-event?q=${searchParse}`)
  }
  return (
    <nav className="flex h-16 w-full flex-row items-center gap-24 bg-primary px-8">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" height={64} width={345} />
      </Link>
      <form
        className="flex w-[50vw] flex-row items-center gap-3 rounded-md bg-white px-3 py-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Digite o nome do evento para pesquisar :)"
          className="w-[90%] rounded-md px-3 py-2 text-sm font-normal"
          value={search}
          onChange={(event) => setSearch(event.target.value)}
        />
        <button type="submit">
          <AiOutlineSearch size={24} color="green" />
        </button>
      </form>
    </nav>
  )
}
