import styled from 'styled-components'
import { mainstyles } from '../utils'

const BannerButton = styled.button`
  display: block;
  padding: 0.5rem 1rem;
  border: solid 1px ${mainstyles.colors.mainWhite};
  color: ${mainstyles.colors.mainWhite};
  background: transparent;
  text-transform: uppercase;
  font-size: 1.1rem;
  letter-spacing: 0.1rem;
  transition: 2s;
  font-weight: 700;
  ${mainstyles.border({ color: `${mainstyles.colors.mainWhite}` })};

  &:hover {
    transform: translateY(-5px);
    cursor: pointer;
  }
`

const SectionButton = styled(BannerButton)`
  color: ${mainstyles.colors.mainBlack};
  border: solid 1px ${mainstyles.colors.mainBlack};
  &:hover {
    background: ${mainstyles.colors.mainRed};
    color: ${mainstyles.colors.mainWhite};
  }
`

export { BannerButton, SectionButton }
