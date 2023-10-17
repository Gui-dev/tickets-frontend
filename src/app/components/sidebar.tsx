import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'
import { LiaMapMarkerSolid } from 'react-icons/lia'
import { MdOutlineAddBox } from 'react-icons/md'

export const Sidebar = () => {
  return (
    <aside className="fixed bottom-0 right-0 top-36 z-10 h-[45%] w-[90px] overflow-y-auto bg-gray-200 p-2 text-center text-xs text-primary shadow-sm">
      <div className="h-full overflow-y-auto px-3 py-4">
        <Link
          href="/"
          className="mb-9 flex cursor-pointer flex-col items-center justify-center transition-all hover:translate-y-1"
        >
          <AiOutlineHome size={30} />
          <span>Home</span>
        </Link>
        <Link
          href="/maps"
          className="mb-9 flex cursor-pointer flex-col items-center justify-center transition-all hover:translate-y-1"
        >
          <LiaMapMarkerSolid size={30} />
          <span>Mapa</span>
        </Link>

        <Link
          href="/create-event"
          className="mb-9 flex cursor-pointer flex-col items-center justify-center transition-all hover:translate-y-1"
        >
          <MdOutlineAddBox size={30} />
          <span>Adicionar Evento</span>
        </Link>
      </div>
    </aside>
  )
}
