import styled from 'styled-components'
import { styles } from '../utils'

const BannerButton = styled.button`
  display: block;
  padding: 0.5rem 1rem;
  border: solid 1px ${styles.colors.mainWhite};
  color: ${styles.colors.mainWhite};
  background: transparent;
  text-transform: uppercase;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;

  font-weight: 700;
  ${styles.border({ color: `${styles.colors.mainWhite}` })};
  ${styles.transition({})};
  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`

const SectionButton = styled(BannerButton)`
  color: ${styles.colors.mainBlack};
  border: solid 1px ${styles.colors.mainBlack};
  &:hover {
    background: ${styles.colors.mainRed};
    color: ${styles.colors.mainWhite};
  }
`

export { BannerButton, SectionButton }
