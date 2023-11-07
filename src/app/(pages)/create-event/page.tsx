'use client'

import { ChangeEvent, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useForm } from 'react-hook-form'
import { FaSpinner } from 'react-icons/fa'
import { zodResolver } from '@hookform/resolvers/zod'
import { toast } from 'react-toastify'

import { categories } from '@/utils/categories'
import { Input } from '@/app/components/form/input'
import {
  createEventValidation,
  CreateEventValidationData,
} from '@/validations/create-event-validation'
import { Button } from '@/app/components/form/button'
import { fetchWrapper } from '@/utils/fetch-wrapper'
import {
  AddressLocationProps,
  AutoComplete,
} from '@/app/components/form/autocomplete'
import { ImagesPreview } from '@/app/components/images-preview'

const CreateEvent = () => {
  const [flyers, setFlyers] = useState<File[]>([])
  const [banner, setBanner] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const navigation = useRouter()
  const {
    formState: { errors },
    handleSubmit,
    register,
    setError,
    setValue,
  } = useForm<CreateEventValidationData>({
    resolver: zodResolver(createEventValidation),
  })

  const handleCreateEvent = async (data: CreateEventValidationData) => {
    try {
      setIsLoading(true)
      const formData = new FormData()
      const dateFormatted = new Date(`${data.date}T${data.hour}`)

      formData.append('title', data.title)
      formData.append('description', data.description)
      formData.append('city', data.city)
      formData.append('location', data.location)
      formData.append('date', dateFormatted.toISOString())
      formData.append('price', data.price as any)
      formData.append('sector', data.sector)
      formData.append('categories', data.categories.toString())
      formData.append('coupons', data.cupom as any)
      formData.append('banner', data.banner as any)
      flyers.forEach((flyer) => {
        formData.append('flyers', flyer)
      })
      await fetchWrapper('/events', {
        method: 'POST',
        body: formData,
      })
      setIsLoading(false)
      toast.success('Evento criado com sucesso')
      navigation.push('/')
    } catch (error) {
      toast.error('Erro ao tentar criar o evento, tente mais tarde!')
      setIsLoading(false)
    }
  }

  const handleAddressSelected = (address: AddressLocationProps) => {
    const { city, geoLocation } = address
    setValue('city', city)
    setValue('location', `${geoLocation.lat},${geoLocation.lng}`)
  }

  const handleBannerPreview = (event: ChangeEvent<HTMLInputElement>) => {
    const image = event.target.files?.[0] || null
    if (image) {
      const imageURL = URL.createObjectURL(image)
      setBanner(imageURL)
    }
  }

  const handleFlyersPreview = async (event: ChangeEvent<HTMLInputElement>) => {
    const images = event.target.files

    if (images && images?.length > 3) {
      setError('flyers', {
        message: 'Selecione no máximo 3 imagens',
      })
      return
    }
    if (images) {
      // convert `FileList` to `File[]`
      const _images = Array.from(images)
      setFlyers(_images)
    }
  }

  const handleCloseBannerPreview = () => {
    setBanner('')
  }

  const handleCloseFlyersPreview = () => {
    setFlyers([])
  }

  return (
    <section className="container px-8">
      <form
        className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2"
        onSubmit={handleSubmit(handleCreateEvent)}
      >
        <div className="mb-4 border-r-2 border-blue-300">
          <h1 className="text-2xl font-medium text-primary">
            Adicionar eventos
          </h1>
          <p className="text-base font-light text-gray-700">
            Crie seu próprio evento da maneira que você preferir!
          </p>

          <div className="mt-8 w-[90%]">
            <div className="mb-4 flex flex-col gap-1">
              <label
                htmlFor="title"
                className="text-normal text-sm text-primary"
              >
                Título
              </label>
              <Input
                type="text"
                placeholder="Insira o nome do evento"
                id="title"
                {...register('title', {
                  required: 'O titulo é obrigátorio',
                })}
                error={!!errors.title}
                errorMessage={errors.title?.message}
              />
            </div>
            <div className="mb-4 flex flex-col gap-1">
              <label
                htmlFor="address"
                className="text-normal text-sm text-primary"
              >
                Endereço
              </label>

              <AutoComplete
                type="text"
                placeholder="Insira o endereço do evento"
                onAddressSelected={handleAddressSelected}
              />
            </div>
            <div className="mb-4 grid grid-cols-2 gap-3">
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="date"
                  className="text-normal text-sm text-primary"
                >
                  Data
                </label>
                <Input
                  type="date"
                  placeholder="Insira a data do evento"
                  id="date"
                  {...register('date')}
                  error={!!errors.date}
                  errorMessage={errors.date?.message}
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="time"
                  className="text-normal text-sm text-primary"
                >
                  Horário
                </label>
                <Input
                  type="time"
                  placeholder="Insira a hora do evento"
                  id="time"
                  {...register('hour')}
                  error={!!errors.hour}
                  errorMessage={errors.hour?.message}
                />
              </div>
            </div>
            <div className="mb-4">
              <span className="mb-4 block text-base text-primary">
                Categoria do Evento
              </span>
              <div className="flex flex-col gap-2">
                <div className="grid grid-cols-5 gap-2">
                  {categories.map((category) => {
                    return (
                      <div
                        key={String(category.id)}
                        className="flex flex-row items-center gap-1"
                      >
                        <input
                          type="checkbox"
                          value={category.route}
                          id={category.route}
                          {...register('categories', {
                            required: errors.categories?.message,
                          })}
                        />
                        <label
                          htmlFor={category.route}
                          className="text-normal text-sm text-primary"
                        >
                          {category.name}
                        </label>
                      </div>
                    )
                  })}
                </div>
                {!!errors.categories && (
                  <span className="block text-sm text-red-500">
                    {errors.categories?.message}
                  </span>
                )}
              </div>
            </div>

            <div className="mb-4">
              <span className="mb-1 block text-base text-primary">Valor</span>
              <p className="text-xs font-light text-gray-500">
                Caso seu evento seja gratuito, o campo deverá ficar vazio. Caso
                haja mais de um setor basta adicionar a seção. Se houver cupom
                promocional, basta colocar no campo &quot;cupom&quot;
              </p>
            </div>
            <div className="mb-4 grid grid-cols-4 gap-3">
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="price"
                  className="text-normal text-sm text-primary"
                >
                  Preço
                </label>
                <Input
                  type="text"
                  placeholder="Insira o valor do evento"
                  id="price"
                  {...register('price')}
                  error={!!errors.price}
                  errorMessage={errors.price?.message}
                />
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="sector"
                  className="text-normal text-sm text-primary"
                >
                  Setor
                </label>
                <Input
                  type="text"
                  placeholder="Setor"
                  id="sector"
                  {...register('sector')}
                  error={!!errors.sector}
                  errorMessage={errors.sector?.message}
                />
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="cupom"
                  className="text-normal text-sm text-primary"
                >
                  Cupom
                </label>
                <Input
                  type="text"
                  placeholder="Ex: SUPER10, SUPER20"
                  id="cupom"
                  {...register('cupom')}
                  error={!!errors.cupom}
                  errorMessage={errors.cupom?.message}
                />
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-1">
              <label
                htmlFor="description"
                className="text-normal text-sm text-primary"
              >
                Descrição
              </label>
              <textarea
                placeholder="Insira aqui a descrição do seu evento"
                className="h-[150px] w-full rounded-lg border border-gray-300 bg-white p-2 text-sm font-normal text-gray-800 placeholder-black placeholder-opacity-20 outline-none transition-all focus:ring-1 focus:ring-green-500"
                id="description"
                {...register('description', {
                  required: errors.description?.message,
                })}
              ></textarea>
            </div>
          </div>
        </div>

        <div className="mb-4 w-[90%] pl-4 pr-4">
          <h1 className="text-2xl font-medium text-primary">Àrea Criativa</h1>
          <p className="mb-4 text-base font-light text-gray-700">
            Adicione as imagens referentes ao seu evento
          </p>
          <div className="mb-4 mt-8">
            {banner && (
              <>
                <label
                  htmlFor="banner"
                  className="text-base font-medium text-primary"
                >
                  Banner
                </label>
                <p className="text-gray-700">
                  Insira uma imagem no formato 336x280
                </p>
                <div className="relative mt-2 h-28 w-full rounded-3xl bg-zinc-300 shadow">
                  <Image
                    src={banner}
                    alt="Image Banner"
                    height={112}
                    width={336}
                    className="h-full w-full rounded-3xl bg-cover bg-center"
                  />
                  <Button
                    type="button"
                    variant="primary"
                    onClick={handleCloseBannerPreview}
                    className="absolute right-4 top-4 flex h-6 w-6 items-center justify-center rounded-full"
                  >
                    <span className="text-sm font-semibold text-white">x</span>
                  </Button>
                </div>
              </>
            )}

            {!banner && (
              <>
                <label
                  htmlFor="banner"
                  className="text-base font-medium text-primary"
                >
                  Banner
                </label>
                <p className="text-gray-700">
                  Insira uma imagem no formato 336x280
                </p>
                <div className="h-28 w-full rounded-3xl bg-zinc-300 shadow">
                  <Input
                    type="file"
                    accept="image/*"
                    className="h-28 w-full cursor-pointer rounded-3xl opacity-0"
                    {...register('banner', {
                      onChange: (e) => handleBannerPreview(e),
                    })}
                    error={!!errors.banner}
                    errorMessage={errors.banner?.message}
                  />
                </div>
                {!!errors.banner && (
                  <span className="mt-4 text-sm text-red-500">
                    {errors.banner?.message}
                  </span>
                )}
              </>
            )}

            <div className="my-4 flex flex-col ">
              <label
                htmlFor="banner"
                className="text-base font-medium text-primary"
              >
                Flyers
              </label>
              <p className="text-gray-700">Insira até 3 flyers</p>
            </div>

            {flyers.length === 0 && (
              <div className="h-28 w-full rounded-3xl bg-zinc-300 shadow">
                <Input
                  className="h-28 w-full cursor-pointer rounded-3xl opacity-0"
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={(event) => handleFlyersPreview(event)}
                />
              </div>
            )}

            {flyers && flyers.length > 0 && (
              <div className="relative">
                <div className="grid w-full grid-cols-3 gap-3">
                  <ImagesPreview key={String(flyers)} images={flyers} />
                </div>
                <Button
                  type="button"
                  variant="primary"
                  onClick={handleCloseFlyersPreview}
                  className="absolute right-4 top-3 flex h-6 w-6 items-center justify-center rounded-full"
                >
                  <span className="text-sm font-semibold text-white">x</span>
                </Button>
              </div>
            )}
            <div className="mt-8 flex items-center justify-center">
              <Button
                type="submit"
                variant="primary"
                className="flex w-[70%] items-center justify-center"
              >
                {isLoading && (
                  <FaSpinner size={22} color="#FFF" className="animate-spin" />
                )}
                {!isLoading && (
                  <span className="text-lg font-bold text-white">
                    Criar Evento
                  </span>
                )}
              </Button>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default CreateEvent
