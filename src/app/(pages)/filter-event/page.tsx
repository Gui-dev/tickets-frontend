'use client'

import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

import { CardFilter } from '@/app/components/card-filter'
import { IEvent } from '@/interfaces/event'
import { fetchWrapper } from '@/utils/fetch-wrapper'

const FilterEvent = () => {
  const [events, setEvents] = useState<IEvent[]>([])
  const searchParams = useSearchParams()

  const searchEvents = useCallback(() => {
    const params = searchParams.get('q')
    const data = { name: params }
    fetchWrapper(`/events/filter/name`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf8',
      },
      body: JSON.stringify(data),
    })
      .then((response) => {
        setEvents(response)
      })
      .catch((error) => console.log('ERROR: ', error))
  }, [searchParams])

  useEffect(() => {
    if (searchParams.get('q')) {
      searchEvents()
    }
  }, [searchParams, searchEvents])

  console.log(events)

  return (
    <section className="container h-screen px-8">
      <div className="mb-4">
        <h1 className="my-8 text-2xl font-medium text-primary">
          Eventos encontrados
        </h1>
        <div className="grid w-[90%] grid-cols-3 gap-6">
          {events &&
            events.map((event, index) => {
              return <CardFilter key={event.id} event={event} />
            })}
        </div>
      </div>
    </section>
  )
}

export default FilterEvent
