'use client'

import { useCallback, useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import { fetchWrapper } from '@/utils/fetch-wrapper'
import { IEvent } from '@/interfaces/event'
import { CardFilter } from './card-filter'

import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'

type PositionProps = {
  lat: number
  lng: number
}

export const Map = () => {
  const [events, setEvents] = useState<IEvent[]>([])
  const [position, setPostion] = useState<PositionProps>({} as PositionProps)
  const [loading, setLoading] = useState(true)

  const getEvents = useCallback(async (lat: number, lng: number) => {
    const events: IEvent[] = await fetchWrapper(
      `/events?latitude=${lat}&longitude=${lng}`,
      {
        method: 'GET',
      },
    )
    setEvents(events)
  }, [])

  console.log('EVENTS: ', events)

  useEffect(() => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const lat = position.coords.latitude
            const lng = position.coords.longitude
            setPostion({
              lat,
              lng,
            })
            getEvents(lat, lng)
            setLoading(false)
          },
          (error) => {
            console.log('Error', error)
            setLoading(false)
          },
        )
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
    }
  }, [getEvents])

  if (loading) {
    return (
      <div className="flex h-screen flex-col items-center justify-center">
        <h1>Carregando...</h1>
        <p>Aceite a permissão de localização para prosseguir!</p>
      </div>
    )
  }

  return (
    <>
      <MapContainer
        center={{
          lat: position.lat,
          lng: position.lng,
        }}
        zoom={11}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {events.map((event) => {
          return (
            <Marker
              key={String(Math.random())}
              position={{
                lat: Number(event.location[0]),
                lng: Number(event.location[1]),
              }}
            >
              <Popup className="p-8">
                <div className="h-80 w-80">
                  <CardFilter event={event} />
                </div>
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </>
  )
}
