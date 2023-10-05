'use client'

import { Input } from '@/app/components/form/input'
import { categories } from '@/utils/categories'
import Image from 'next/image'
import { useState } from 'react'

const CreateEvent = () => {
  const [preview, setPreview] = useState(false)

  return (
    <section className="container px-8">
      <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
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
              <Input placeholder="Insira o nome do evento" id="title" />
            </div>
            <div className="mb-4 flex flex-col gap-1">
              <label
                htmlFor="address"
                className="text-normal text-sm text-primary"
              >
                Endereço
              </label>
              <Input placeholder="Insira o endereço do evento" id="address" />
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
                />
              </div>
            </div>
            <div className="mb-4">
              <span className="mb-4 block text-base text-primary">
                Categoria do Evento
              </span>
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
                <Input placeholder="Insira o valor do evento" id="price" />
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="price"
                  className="text-normal text-sm text-primary"
                >
                  Setor
                </label>
                <Input placeholder="Setor" id="price" />
              </div>
              <div className="mb-4 flex flex-col gap-1">
                <label
                  htmlFor="cupon"
                  className="text-normal text-sm text-primary"
                >
                  Cupom
                </label>
                <Input placeholder="Cupom" id="cupon" />
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
            {preview && (
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
                <div className="mt-2 h-28 w-full rounded-3xl bg-zinc-300 shadow">
                  <Image
                    src="/logo.png"
                    alt="Image Banner"
                    height={112}
                    width={336}
                    className="h-full w-full bg-cover bg-center"
                  />
                </div>
              </>
            )}

            {!preview && (
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
                  />
                </div>
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
            <div className="grid grid-cols-3 gap-3">
              <div className="h-28 w-full rounded-3xl bg-zinc-300 shadow">
                <Input
                  type="file"
                  accept="image/*"
                  className="h-28 w-full cursor-pointer rounded-3xl opacity-0"
                />
              </div>
              <div className="h-28 w-full rounded-3xl bg-zinc-300 shadow">
                <Input
                  type="file"
                  accept="image/*"
                  className="h-28 w-full cursor-pointer rounded-3xl opacity-0"
                />
              </div>

              <div className="h-28 w-full rounded-3xl bg-zinc-300 shadow">
                <Input
                  type="file"
                  accept="image/*"
                  className="h-28 w-full cursor-pointer rounded-3xl opacity-0"
                />
              </div>
            </div>

            <div className="my-4">
              <label
                htmlFor="banner"
                className="text-base font-medium text-primary"
              >
                Mapa do Evento
              </label>
              <p className="text-gray-700">
                Insira o mapa do evento indicando os setores
              </p>
              <div className="mt-2 h-48 w-full rounded-3xl bg-zinc-300 shadow">
                <Input
                  type="file"
                  accept="image/*"
                  className="h-48 w-full cursor-pointer rounded-3xl opacity-0"
                />
              </div>
            </div>
          </div>
        </div>
      </form>
    </section>
  )
}

export default CreateEvent
