
const getBrandName = index => name => name.split('-')[index]
export const getFirstBrandName = getBrandName(0)
export const getSecondBrandName = getBrandName(1)
export const removeSpace = name => name.replace(' ', '')

const normalize = (text) => {
  const normalizeText = text
    .normalize('NFD')
    .replace(/([\u0300-\u036f]|[^0-9a-zA-Z\s])/g, '')
  return normalizeText
}

export const makeUrlForGoogleMaps = (name, adress) => {
  const nameNormalize = normalize(name)
  const url = `https://www.google.com/maps/search/?api=1&query=${nameNormalize},${adress}`
  return url
}

export default makeUrlForGoogleMaps
