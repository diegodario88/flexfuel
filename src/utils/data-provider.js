import data from './gasolina.json'

function getRandomIntInclusive(min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const bestPrice = () => data.produtos[getRandomIntInclusive(0, 10)]

export default bestPrice
