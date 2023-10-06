import { ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

interface ButtonProps extends ComponentPropsWithoutRef<'button'> {
  variant: 'primary' | 'outlined' | 'danger'
}

export const Button = ({
  className,
  variant = 'primary',
  ...props
}: ButtonProps) => {
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-green-800 hover:border-green-700',
    outlined:
      'bg-transparent border-2 border-primary text-primary hover:bg-green-800 hover:text-white hover:border-green-700',
    danger:
      'bg-transparent border-2 border-red-500 text-red-500 hover:bg-red-600 hover:text-white',
  }

  const _className = twMerge(
    variantClasses[variant],
    'appearance-none rounded-lg p-2 text-sm font-medium shadow transition-all',
    className,
  )

  return (
    <button className={_className} {...props}>
      {props.children}
    </button>
  )
}
