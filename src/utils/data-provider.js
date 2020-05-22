import gasolina from './gasolina.json'
import etanol from './etanol.json'
import diesel from './diesel.json'

const fuels = [
  gasolina,
  etanol,
  diesel
]

const bestPrice = (type) => fuels[type].produtos[0]
export const allPrices = (type) => fuels[type].produtos
export default bestPrice
