'use client'

import { CardFilter } from '@/app/components/card-filter'
import { Button } from '@/app/components/form/button'
import { Input } from '@/app/components/form/input'
import { categories } from '@/utils/categories'

const FilterEvent = () => {
  return (
    <section className="container px-8">
      <form className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="mb-4 border-r-2 border-blue-300">
          <h1 className="text-2xl font-medium text-primary">Filtrar Eventos</h1>
          <p className="text-base font-light text-gray-700">
            Busque o evento que é a sua cara, de maneira mais detalhada!
          </p>

          <div className="mt-8 w-[90%]">
            <div className="mb-4 flex flex-col gap-1">
              <label
                htmlFor="name"
                className="text-normal text-sm text-primary"
              >
                Nome
              </label>
              <Input placeholder="Insira o nome do seu evento" id="name" />
            </div>
            <div className="mb-4 flex flex-col gap-1">
              <label
                htmlFor="address"
                className="text-normal text-sm text-primary"
              >
                Localização
              </label>
              <Input
                placeholder="Insira o endereço do seu evento"
                id="address"
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
                />
              </div>
              <div className="flex flex-col gap-1">
                <label
                  htmlFor="categories"
                  className="text-normal text-sm text-primary"
                >
                  Categoria do Evento
                </label>
                <select
                  name="categories"
                  id="categories"
                  className="cursor-pointer rounded-lg border border-gray-300 bg-white p-2 text-sm font-normal text-gray-800 placeholder-black placeholder-opacity-20 outline-none transition-all"
                >
                  <option className="text-normal text-sm text-primary">
                    Selecione uma categoria...
                  </option>
                  {categories.map((category) => {
                    return (
                      <option
                        key={String(category.id)}
                        value={category.route}
                        className="text-normal text-sm text-primary"
                      >
                        {category.name}
                      </option>
                    )
                  })}
                </select>
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-1">
              <label
                htmlFor="distance"
                className="text-normal text-sm text-primary"
              >
                Distância
              </label>
              <div className="flex items-center gap-2">
                <span>0</span>
                <Input
                  type="range"
                  placeholder="Insira o nome do seu evento"
                  id="distance"
                  min={0}
                  max={3}
                />
                <span>3km</span>
              </div>
            </div>

            <div className="mb-4 flex flex-col gap-1">
              <label
                htmlFor="value"
                className="text-normal text-sm text-primary"
              >
                Valor
              </label>
              <div className="flex items-center gap-2">
                <span>R$0</span>
                <Input
                  type="range"
                  placeholder="Insira o nome do seu evento"
                  id="value"
                  min={0}
                  max={1000}
                />
                <span>R$1000</span>
              </div>
            </div>
          </div>
          <div className="flex w-full items-center justify-center gap-4">
            <Button variant="outlined" title="Buscar" className="w-[30%]">
              Limpar
            </Button>
            <Button variant="primary" title="Buscar" className="w-[30%]">
              Buscar
            </Button>
          </div>
        </div>

        <div className="mb-4 w-[90%] pl-4 pr-4">
          <h1 className="text-2xl font-medium text-primary">Àrea Criativa</h1>
          <p className="mb-4 text-base font-light text-gray-700">
            Adicione as imagens referentes ao seu evento
          </p>

          <CardFilter />
        </div>
      </form>
    </section>
  )
}

export default FilterEvent
