export const formatNumberCurrency = (price: number) => {
  const currencyCOP = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(price)
  return currencyCOP.slice(0, -3)
}