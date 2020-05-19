import gasolina from './gasolina.json'
import etanol from './etanol.json'
import diesel from './diesel.json'

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const fuels = [
  gasolina,
  etanol,
  diesel
]

const bestPrice = (type) => fuels[type].produtos[0]
export const allPrices = (type) => fuels[type].produtos
export default bestPrice
