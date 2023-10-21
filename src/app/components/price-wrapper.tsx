import { Dispatch, SetStateAction } from 'react'
import { AiOutlinePlus, AiOutlineMinus } from 'react-icons/ai'

type PriceWrapperProps = {
  quantity: number
  setQuantity: Dispatch<SetStateAction<number>>
}

export const PriceWrapper = ({ quantity, setQuantity }: PriceWrapperProps) => {
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
    <>
      <button className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary transition-colors hover:bg-green-700">
        <AiOutlineMinus
          size={24}
          color="#FFF"
          onClick={handleDecrementQuantity}
        />
      </button>
      <div className="flex h-8 w-8 items-center justify-center rounded-sm border border-gray-300">
        <span className="text-base font-medium text-gray-800">{quantity}</span>
      </div>
      <button className="flex h-8 w-8 items-center justify-center rounded-sm bg-primary transition-colors hover:bg-green-700">
        <AiOutlinePlus
          size={24}
          color="#FFF"
          onClick={handleIncrementQuantity}
        />
      </button>
    </>
  )
}
