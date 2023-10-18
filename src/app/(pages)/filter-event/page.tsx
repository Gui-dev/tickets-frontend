'use client'

import { useSearchParams } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

import { CardFilter } from '@/app/components/card-filter'
import { IEvent } from '@/interfaces/event'
import { fetchWrapper } from '@/utils/fetch-wrapper'

const FilterEvent = () => {
  const [events, setEvents] = useState<IEvent[]>([])
  const [error, setError] = useState(false)
  const searchParams = useSearchParams()

  const searchEvents = useCallback(async () => {
    const params = searchParams.get('q')
    const data = { name: params }
    const response = await fetchWrapper(`/events/filter/name`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf8',
      },
      body: JSON.stringify(data),
    })
    if (response.error) {
      setError(true)
      return
    }
    setEvents(response)
  }, [searchParams])

  useEffect(() => {
    if (searchParams.get('q')) {
      searchEvents()
    }
  }, [searchParams, searchEvents])

  return (
    <section className="container h-screen px-8">
      <div className="mb-4">
        {events.length > 0 && (
          <h1 className="my-8 text-lg font-bold text-primary">
            Eventos encontrados
          </h1>
        )}
        <div className="grid w-[90%] grid-cols-3 gap-6">
          {events.length > 0 &&
            events.map((event, index) => {
              return <CardFilter key={event.id} event={event} />
            })}
        </div>

        {error && (
          <div className="flex h-screen flex-col items-center justify-center">
            <h2 className="mb-2 text-lg font-normal text-primary">
              Opssss, nenhum evento foi encontrdo
            </h2>
            <p className="text-lg font-normal text-gray-600">
              Pesquise por outros termos
            </p>
          </div>
        )}
      </div>
    </section>
  )
}

export default FilterEvent
