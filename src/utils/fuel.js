const sum = (acc, { valor }) => acc + (+valor)
const divide = (val1, val2) => (+val1) / (+val2)

export const getAvg = ({ produtos }) => (
  produtos.reduce(sum, 0) / produtos.length
).toFixed(2)

export const checkBestFuel = (etanol, gasoline) => {
  if (divide(etanol, gasoline) < 0.7) return 'Etanol'
  return 'Gasolina'
}
