import Image from 'next/image'
import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

import { CardBuyTicket } from '@/app/components/card-buy-ticket'
import { IEvent } from '@/interfaces/event'
import { fetchWrapper } from '@/utils/fetch-wrapper'
import { MapDetails } from '@/app/components/map-details'

type EventDetailsProps = {
  params: {
    id: string
  }
}

const EventDetails = async ({ params }: EventDetailsProps) => {
  const event: IEvent = await fetchWrapper(`/events/${params.id}`, {
    method: 'GET',
  })

  const day = format(new Date(event.date), 'd/L/yyyy', {
    locale: ptBR,
  })
  const hour = format(new Date(event.date), 'kk:m', {
    locale: ptBR,
  })

  return (
    <section>
      <div
        className="relative h-[280px] w-[460px] bg-black bg-opacity-25 bg-cover bg-center bg-no-repeat shadow-md md:w-[1024px] lg:w-full"
        style={{
          backgroundImage: `url(${event.banner})`,
        }}
      >
        <article className="absolute bottom-0 p-8 text-white">
          <h1 className="text-5xl font-bold">{event.title}</h1>
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
      <div className="bg-gray-50">
        <div className="grid grid-cols-2 gap-4 bg-gray-50 p-8">
          <div className="flex flex-col">
            <h1 className="text-lg font-bold text-primary">{event.title}</h1>
            <div className="mt-4 flex items-center gap-6">
              <div className="flex items-center gap-2">
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
                <span>Dia {day}</span>
              </div>
              <div className="flex items-center gap-2">
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
                <span>Horário {hour}h</span>
              </div>
            </div>
            <div className="mt-4 flex items-center gap-2">
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

            <div className="mt-4 flex w-[80%]">
              <p className="text-base text-gray-600">{event.description}</p>
            </div>

            <div className="mt-4 grid grid-cols-3 gap-4">
              {event.flyers.map((flyer) => {
                return (
                  <Image
                    key={flyer}
                    src={flyer}
                    alt={event.title}
                    height={200}
                    width={200}
                  />
                )
              })}
            </div>

            <div className="mt-4 flex w-[90%]">
              <MapDetails
                lat={Number(event.location[0])}
                lng={Number(event.location[1])}
              />
            </div>
          </div>

          <div className="fix  h-[350px]">
            <CardBuyTicket price={event.price} />
          </div>
        </div>
      </div>
    </section>
  )
}

export default EventDetails
