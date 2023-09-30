import Link from 'next/link'

export const Sidebar = () => {
  return (
    <aside className="fixed bottom-0 right-0 top-16 z-10 h-screen w-[90px] overflow-y-auto bg-gray-200 p-2 text-center text-xs text-primary shadow-sm">
      <div className="h-full overflow-y-auto px-3 py-4">
        <Link
          href="/"
          className="mb-9 flex cursor-pointer flex-col items-center justify-center"
        >
          <span>Icon</span>
          <span>Home</span>
        </Link>
        <Link
          href="/"
          className="mb-9 flex cursor-pointer flex-col items-center justify-center"
        >
          <span>Icon</span>
          <span>Home</span>
        </Link>
      </div>
    </aside>
  )
}
