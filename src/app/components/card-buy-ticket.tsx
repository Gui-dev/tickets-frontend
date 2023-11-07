'use client'
import { Input } from './form/input'
import { Button } from './form/button'
import { useMemo, useState } from 'react'
import { PriceWrapper } from './price-wrapper'
import { formatCurrencyNumber } from '@/utils/format-currency-number'

type CardBuyTicketProps = {
  price: number
}

export const CardBuyTicket = ({ price }: CardBuyTicketProps) => {
  const [quantity, setQuantity] = useState(1)
  const subtotal = useMemo(() => {
    const subtotal = price * quantity
    return formatCurrencyNumber(subtotal)
  }, [quantity, price])

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
            <PriceWrapper quantity={quantity} setQuantity={setQuantity} />
          </div>
        </div>

        <div className="my-4 grid w-full grid-cols-2 gap-3">
          <Input placeholder="Cupom de desconto" title="Cupom" />
          <Input
            placeholder="R$0,00"
            title="Subtotal"
            value={subtotal}
            onChange={() => subtotal}
          />
        </div>

        <div className="flex flex-col gap-4 pb-8">
          <Input type="text" placeholder="Insira seu nome" title="nome" />
          <Input type="email" placeholder="Insira seu e-mail" title="e-mail" />
          <Button variant="primary">Finalizar Compra</Button>
        </div>
      </div>
    </div>
  )
}
