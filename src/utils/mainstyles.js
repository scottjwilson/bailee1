export const colors = {
  mainWhite: `#fffdff`,
  mainBlack: `#242223`,
  mainRed: `#cb322b`,
  mainRed2: `#481e20`,
  mainGrey: '#999',
  mainGrey2: `#5b4348`,
  mainGrey3: '#dcdfe2',
  mainYellow: `#d2aa5c`,
  mainYellow2: `#F2AF29`,
}

export const gradients = {
  redGrad: `linear-gradient(to right, #481e20 0%, #cb322b 100%)`,
  redGrad2: `linear-gradient(to right bottom, #481e20 0%, #cb322b 100%)`,
  blackGrad: `linear-gradient(to right, #242223 75%, #242223 100%)`,
  greyGrad: `linear-gradient(to right, #eee 50%, #ddd 100%)`,
}

export const textSlanted = `font-family:'Caveat', cursive;`

export const border = ({
  width = '0.15rem',
  type = 'solid',
  color = 'white',
}) => {
  return `border:${width} ${type} ${color}`
}

export const letterSpacing = ({ spacing = '0.1rem' }) => {
  return `letter-spacing:${spacing}`
}

export const transDefault = 'transition:all 0.2s ease-in-out'
export const transFunction = (
  property = 'all',
  time = '0.5s',
  type = 'linear'
) => {
  return `transition:${property} ${time} ${type}`
}
export const transObject = ({
  property = 'all',
  time = '0.5s',
  type = 'ease-in-out',
}) => {
  return `transition: ${property} ${time} ${type}`
}
