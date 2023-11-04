import {
  ComponentPropsWithoutRef,
  LegacyRef,
  forwardRef,
  useState,
  ChangeEvent,
} from 'react'
import { twMerge } from 'tailwind-merge'

export type AddressLocationProps = {
  address: string
  city: string
  geoLocation: {
    lat: number
    lng: number
  }
}

interface InputProps extends ComponentPropsWithoutRef<'input'> {
  error?: boolean
  errorMessage?: string
  onAddressSelected: (address: AddressLocationProps) => void
}

const AutoCompleteBase = (
  { className, error, errorMessage, onAddressSelected, ...props }: InputProps,
  ref: LegacyRef<HTMLInputElement> | undefined,
) => {
  const inputClassName = twMerge(
    'rounded-lg border border-gray-300 bg-white p-2 text-sm font-normal text-gray-800 placeholder-black placeholder-opacity-20 outline-none transition-all',
    error ? 'border-red-500' : 'focus:ring-1 focus:ring-green-500',
    className,
  )
  const [addressLocation, setAdressLocation] = useState<AddressLocationProps[]>(
    [],
  )
  const [addressSelected, setAddressSelected] = useState('')

  const handleAddressLocation = async (
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    try {
      const query = event.target.value
      setAddressSelected(query)
      if (query.length > 2) {
        const response = await fetch(`/api/maps?q=${query}`, {
          method: 'GET',
        })
        const data = await response.json()
        const addressResult = await data.results.map((result: any) => {
          const addresses = {
            address: result.formatted,
            city: result.components.city,
            geoLocation: {
              lat: result.geometry.lat,
              lng: result.geometry.lng,
            },
          }
          return addresses
        })
        setAdressLocation([...addressResult])
      }
    } catch (error) {
      console.log(error)
    }
  }

  const handleAddressSelected = (address: AddressLocationProps) => {
    setAddressSelected(address.address)
    onAddressSelected(address)
    setAdressLocation([])
  }

  return (
    <div className="flex w-full flex-col">
      <input
        ref={ref}
        className={inputClassName}
        value={addressSelected}
        onChange={(event) => handleAddressLocation(event)}
        {...props}
      />
      {error && errorMessage && (
        <span className="mt-1 text-xs text-red-400">{errorMessage}</span>
      )}
      {addressLocation.length > 0 && (
        <ul className="w-full rounded-sm bg-gray-50 shadow-md">
          {addressLocation.map((address, index) => {
            return (
              <li
                key={String(index)}
                className="cursor-pointer rounded-sm px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                onClick={() => handleAddressSelected(address)}
              >
                {address.address}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

export const AutoComplete = forwardRef(AutoCompleteBase)
