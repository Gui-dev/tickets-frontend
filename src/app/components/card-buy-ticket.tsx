'use client'

import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'
import { Input } from './form/input'
import { Button } from './form/button'
import { useMemo, useState } from 'react'

export const CardBuyTicket = () => {
  const price = 100
  const [quantity, setQuantity] = useState(1)
  const subtotal = useMemo(() => {
    return price * quantity
  }, [quantity])

  const handleDecrementQuantity = () => {
    if (quantity <= 0) {
      setQuantity(0)
      return
    }
    setQuantity((prev) => prev - 1)
  }

  const handleIncrementQuantity = () => {
    setQuantity((prev) => prev + 1)
  }

  return (
    <div className="flex w-[85%] flex-col rounded bg-white shadow-lg">
      <span className="block w-full rounded-3xl rounded-b-none bg-primary p-4 text-center text-base text-white">
        Ingressos
      </span>
      <div className="mt-4 flex flex-col px-4">
        <div className="flex justify-between">
          <div className="">
            <p>Pista</p>
            <p>Entrada e acesso à pista do evento</p>
          </div>

          <div className="flex flex-row items-center justify-center gap-3">
            <button className="flex h-8 w-8 items-center justify-center bg-primary transition-colors hover:bg-green-700">
              <AiOutlineMinus
                size={24}
                color="#FFF"
                onClick={handleDecrementQuantity}
              />
            </button>
            <div>
              <span className="text-base font-medium text-gray-800">
                {quantity}
              </span>
            </div>
            <button className="flex h-8 w-8 items-center justify-center bg-primary transition-colors hover:bg-green-700">
              <AiOutlinePlus
                size={24}
                color="#FFF"
                onClick={handleIncrementQuantity}
              />
            </button>
          </div>
        </div>

        <div className="my-4 grid w-full grid-cols-2 gap-3">
          <Input placeholder="Cupom de desconto" title="Cupom" />
          <Input placeholder="R$0,00" title="Subtotal" value={subtotal} />
        </div>

        <div className="flex flex-col gap-4 pb-8">
          <Input placeholder="Insira seu nome" title="nome" />
          <Input type="email" placeholder="Insira seu e-mail" title="nome" />
          <Button variant="primary">Finalizar Compra</Button>
        </div>
      </div>
    </div>
  )
}
