import React, { Component } from 'react'
import styled from 'styled-components'
import { mainstyles, Title, SectionButton } from '../../utils'
import tw from 'tailwind.macro'
import addToMailchimp from 'gatsby-plugin-mailchimp'

export default class Form extends Component {
  constructor() {
    super()
    this.state = {
      email: ``,
    }
  }
  // Update state each time user edits their email address
  _handleEmailChange = e => {
    this.setState({ email: e.target.value })
  }
  // Post to MC server & handle its response
  _postEmailToMailchimp = (email, attributes) => {
    addToMailchimp(email, attributes)
      .then(result => {
        // Mailchimp always returns a 200 response
        // So we check the result for MC errors & failures
        if (result.result !== `success`) {
          this.setState({
            status: `error`,
            msg: result.msg,
          })
        } else {
          // Email address succesfully subcribed to Mailchimp
          this.setState({
            status: `success`,
            msg: result.msg,
          })
        }
      })
      .catch(err => {
        // Network failures, timeouts, etc
        this.setState({
          status: `error`,
          msg: err,
        })
      })
  }
  _handleFormSubmit = e => {
    e.preventDefault()
    e.stopPropagation()
    if (!this.state.email) {
      this.setState({
        status: `error`,
        msg: 'Please enter valid email!',
      })
    } else {
      this.setState({
        status: `sending`,
        msg: null,
      })
      // setState callback (subscribe email to MC)
      this._postEmailToMailchimp(this.state.email, {
        pathname: document.location.pathname,
      })
    }
  }

  render() {
    return (
      <Success>
        {this.state.status === `success` ? (
          <Message>
            <h1>Thank you! Please Check Your Inbox</h1>
          </Message>
        ) : (
          <FormSection>
            <Row>
              <FormWrapper id="email-capture" method="post" noValidate>
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
                    placeholder="you@email.com"
                    onChange={this._handleEmailChange}
                    required
                  />
                  <ButtonWrapper>
                    <button
                      className="btnprimary"
                      type="submit"
                      onClick={this._handleFormSubmit}
                    >
                      Submit
                    </button>
                  </ButtonWrapper>
                  {this.state.status === `error` && (
                    <div dangerouslySetInnerHTML={{ __html: this.state.msg }} />
                  )}
                </Group>
              </FormWrapper>
            </Row>
          </FormSection>
        )}
      </Success>
    )
  }
}

const Success = styled.div``

const Message = styled.div`
  display: flex;
  justify-content: center;
  background-color: #242223;
  font-size: 1.2rem;
  font-family: 'Dosis';
  padding: 5rem 0;

  h1 {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: 700;
    display: inline-block;
    color: #cb322b;
    letter-spacing: 2px;
  }
`

const FormSection = styled.section`
  height: 60vh;
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
  background-color: #edf2f7;
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

  font-size: 0.8rem;
  font-family: 'Roboto';
  padding: 1rem 1rem;
  border-radius: 2px;
  background-color: #f7fafc;
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
  font-size: 2rem;
  font-weight: 700;
  margin-left: 2rem;
  margin-top: 0.7rem;
  display: block;
  transition: all 0.3s;
`

const ButtonWrapper = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: center;

  .btnprimary {
    font-size: 1.1rem;

    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 4px;
    color: #cb322b;
    border: 2px solid #cb322b;
    padding: 0.9rem 1.6rem;
    display: inline-block;
    transition: all 0.3s linear;
    cursor: pointer;
    background-color: #edf2f7;
  }

  .btnprimary:hover {
    transform: translateY(-5px);
    font-weight: 800;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.4), 0 2px 4px 0 rgba(0, 0, 0, 0.2);
    background-color: #cb322b;
    color: #fff;
  }
`
