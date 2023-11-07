export const formatCurrencyNumber = (value: number) => {
  return new Intl.NumberFormat('pt-br', {
    style: 'currency',
    currency: 'BRL',
  }).format(value)
}
