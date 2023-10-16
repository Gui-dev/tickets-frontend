import Link from 'next/link'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { Button } from './form/button'
import { IEvent } from '@/interfaces/event'

type CardFilterProps = {
  event: IEvent
}

export const CardFilter = ({ event }: CardFilterProps) => {
  const day = format(new Date(event.date), 'd/L/yyyy', {
    locale: ptBR,
  })
  const hour = format(new Date(event.date), 'kk', {
    locale: ptBR,
  })
  return (
    <div className="mb-6 rounded-md transition-all hover:translate-y-1">
      <div className="relative h-[150px] w-full rounded-3xl rounded-b-none bg-black bg-opacity-25 md:w-[1024px] lg:w-full">
        <article className="absolute top-0 p-4 text-white">
          <h1 className="text-base font-bold">{event.title}</h1>
          <div className="mt-1 flex flex-col justify-between">
            <div className="flex flex-row gap-2">
              <div className="flex items-center justify-center gap-1">
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
              <div className="flex items-center justify-center gap-1">
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
            <div className="mt-10 flex flex-row gap-1">
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
          </div>
        </article>
      </div>

      <div className="relative w-full rounded-3xl rounded-t-none bg-slate-200 bg-opacity-25 p-4 md:w-[1024px] lg:w-full">
        <p className="text-sm text-gray-600">{event.description}...</p>
        <Link
          href={`/events/details/${event.id}`}
          className="mt-4 flex items-center justify-center"
        >
          <Button variant="primary">Ver detalhes do evento</Button>
        </Link>
      </div>
    </div>
  )
}
