'use client'

import { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'

import 'leaflet/dist/leaflet.css'

type PositionProps = {
  lat: number
  lng: number
}

export const Map = () => {
  const markers = [
    { lat: -19.899613, lng: -43.9314789 },
    { lat: -12.89965, lng: -43.7364789 },
    { lat: -12.82919, lng: -43.987981 },
    { lat: -19.968614, lng: -43.405302 },
  ]
  const [position, setPostion] = useState<PositionProps>({} as PositionProps)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    try {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            setPostion({
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            })
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
  }, [])

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
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers.map((marker) => {
          return (
            <Marker
              key={String(Math.random())}
              position={{
                lat: marker.lat,
                lng: marker.lng,
              }}
            >
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          )
        })}
      </MapContainer>
    </>
  )
}
