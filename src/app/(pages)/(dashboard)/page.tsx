import { categories } from '@/utils/categories'
import Image from 'next/image'
import Link from 'next/link'

import { BannerPrimary } from '@/app/components/banner-primary'
import { BannerSmall } from '@/app/components/banner-small'
import { fetchWrapper } from '@/utils/fetch-wrapper'

export default async function Dashboard() {
  const events = await fetchWrapper('/events', {
    method: 'GET',
  })

  const secondaryEvents = events.slice(1)

  return (
    <section className="container my-8  md:pr-20 lg:pr-20">
      <BannerPrimary event={events[0]} />

      <div className="p-8">
        <h2 className="text-2xl font-bold text-primary">Eventos em destaque</h2>
        <p className="text-base font-light text-gray-600">
          Se divirta com os principais eventos de São Paulo e do Brasil
        </p>
      </div>

      <div className="grid grid-cols-3 gap-2">
        {secondaryEvents.map((event: any) => {
          return <BannerSmall key={event.id} event={event} />
        })}
      </div>

      <div className="p-8">
        <h2 className="text-2xl font-bold text-primary">
          Navegue por tipo de evento
        </h2>
        <p className="text-base font-light text-gray-600">
          Vá ao evento que é a sua cara :D
        </p>
      </div>

      <div className="grid grid-cols-3 gap-1 px-8 pb-16 md:grid-cols-7 md:gap-2 lg:gap-2">
        {categories.map((category) => {
          return (
            <Link
              key={String(category.id)}
              href={`/events/category/${category.route}`}
              className="flex flex-col items-center justify-center"
            >
              <Image
                src={category.icon}
                alt={category.name}
                height={144}
                width={144}
                className="rounded-full transition-all hover:translate-y-1"
              />
              <p>{category.name}</p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}
