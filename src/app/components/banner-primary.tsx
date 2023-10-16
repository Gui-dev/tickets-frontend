import { format } from 'date-fns'
import Link from 'next/link'
import { ptBR } from 'date-fns/locale'
import { IEvent } from '@/interfaces/event'

type BannerPrimaryProps = {
  event: IEvent
}

export const BannerPrimary = ({ event }: BannerPrimaryProps) => {
  const day = format(new Date(event.date), 'd/L/yyyy', {
    locale: ptBR,
  })
  const hour = format(new Date(event.date), 'kk', {
    locale: ptBR,
  })

  return (
    <Link
      href={`/event/details/${event.id}`}
      className="block rounded-md px-8 transition-all hover:translate-y-1"
    >
      <div
        className="relative h-[280px] w-[460px] rounded-3xl bg-black bg-opacity-25 bg-cover bg-center bg-no-repeat shadow-md md:w-[1024px] lg:w-full"
        style={{
          backgroundImage: `url(${event.banner})`,
        }}
      >
        <article className="absolute bottom-0 p-8 text-white">
          <h1 className="self-end text-5xl font-bold">{event.title}</h1>
          <div className="mt-2 flex">
            <div className="mr-4 flex items-center justify-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                />
              </svg>
              <p>{day}</p>
            </div>
            <div className="mr-4 flex items-center justify-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                />
              </svg>
              <p>
                {event.address} - {event.city}
              </p>
            </div>
            <div className="mr-4 flex items-center justify-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              <p>{hour}h</p>
            </div>
          </div>
        </article>
      </div>
    </Link>
  )
}
