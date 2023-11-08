'use client'

import { MapContainer, Marker, TileLayer } from 'react-leaflet'

import 'leaflet-defaulticon-compatibility'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import 'leaflet/dist/leaflet.css'

type MapDetailsProps = {
  lat: number
  lng: number
}

export const MapDetails = ({ lat, lng }: MapDetailsProps) => {
  return (
    <MapContainer
      center={{
        lat,
        lng,
      }}
      zoom={11}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker
        key={String(Math.random())}
        position={{
          lat,
          lng,
        }}
      />
    </MapContainer>
  )
}
