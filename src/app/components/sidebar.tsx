import Link from 'next/link'
import { AiOutlineHome } from 'react-icons/ai'
import { LiaMapMarkerSolid } from 'react-icons/lia'
import { MdOutlineAddBox, MdOutlinePrivacyTip } from 'react-icons/md'
import { FiFilter } from 'react-icons/fi'
import { BsQuestionCircle } from 'react-icons/bs'

export const Sidebar = () => {
  return (
    <aside className="fixed bottom-0 right-0 top-16 z-10 h-screen w-[90px] overflow-y-auto bg-gray-200 p-2 text-center text-xs text-primary shadow-sm">
      <div className="h-full overflow-y-auto px-3 py-4">
        <Link
          href="/"
          className="mb-9 flex cursor-pointer flex-col items-center justify-center"
        >
          <AiOutlineHome size={30} />
          <span>Home</span>
        </Link>
        <Link
          href="/"
          className="mb-9 flex cursor-pointer flex-col items-center justify-center"
        >
          <LiaMapMarkerSolid size={30} />
          <span>Mapa</span>
        </Link>

        <Link
          href="/"
          className="mb-9 flex cursor-pointer flex-col items-center justify-center"
        >
          <MdOutlineAddBox size={30} />
          <span>Adicionar Evento</span>
        </Link>
        <Link
          href="/"
          className="mb-9 flex cursor-pointer flex-col items-center justify-center"
        >
          <FiFilter size={30} />
          <span>Filtrar Evento</span>
        </Link>
        <Link
          href="/"
          className="mb-9 flex cursor-pointer flex-col items-center justify-center"
        >
          <BsQuestionCircle size={30} />
          <span>SAC</span>
        </Link>
        <Link
          href="/"
          className="mb-9 flex cursor-pointer flex-col items-center justify-center"
        >
          <MdOutlinePrivacyTip size={30} />
          <span>Privacidade</span>
        </Link>
      </div>
    </aside>
  )
}
