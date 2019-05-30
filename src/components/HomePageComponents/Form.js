import React from 'react'
import styled from 'styled-components'
import { styles, Title, SectionButton } from '../../utils'
import tw from 'tailwind.macro'

export default function Form() {
  return (
    <FormSection>
      <Row>
        <FormWrapper>
          <Title title="Sign Up Today" />
          <Group>
            <Input
              type="text"
              className="input"
              placeholder="Full Name"
              id="name"
            />
          </Group>
          <Group>
            <Input
              type="text"
              className="input"
              placeholder="Business"
              id="name"
            />

            <SectionButton style={{ margin: '2rem auto' }}>
              Sign Up{' '}
            </SectionButton>
          </Group>
        </FormWrapper>
      </Row>
    </FormSection>
  )
}

const FormSection = styled.section`
  height: 40vh;
  display: flex;
  align-items: center;
  align-content: center;
  justify-content: center;
  width: auto;
  background-image: linear-gradient(to right bottom, #481e20 0%, #cb322b 100%);
`

const Row = styled.div`
  display: flex;
  align-items: center;
  align-content: space-between;
  justify-content: center;
  width: 100%;
`

const FormWrapper = styled.form`
  margin: auto auto;
  width: 90%;

  background-color: ${styles.colors.mainGrey3};
  border-radius: 3px;
  box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.7);

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 992px) {
    width: 70%;
  }
`

const Group = styled.div`
  margin-bottom: 2rem;
`

const Input = styled.input`
  ${tw`mx-auto`};

  padding: 1rem 1rem;
  border-radius: 2px;
  background-color: #fef;
  border: none;
  border-bottom: 3px solid transparent;
  width: 90%;
  display: block;
  transition: all 0.3s;

  &:focus {
    outline: none;
    box-shadow: 0 1rem 2rem rgba(#fff, 0.1);
    border-bottom: 3px solid #ff0000;
  }
`

const Label = styled.label`
  font-size: 1.2rem;
  font-weight: 700;
  margin-left: 2rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;
`
