import React, { Component } from 'react'
import ShowMenu from './components/ShowMenu'
import LoginForm from './components/LoginForm'
import RegistrationForm from './components/RegistrationForm'
import { authenticate } from './modules/auth'
import { register } from './modules/register'

class App extends Component {
  state = {
    renderLoginForm: false,
    renderRegisterForm: false,
    authenticated: false,
    registered: false,
    message: ''
  }

  onLogin = async e => {
    e.preventDefault()
    const response = await authenticate(
      e.target.email.value,
      e.target.password.value
    )
    if (response.authenticated) {
      this.setState({ message: response.message, authenticated: true })
    } else {
      this.setState({ message: response.message, renderLoginForm: false })
    }
  }

  onRegister = async e => {
    e.preventDefault()
    const response = await register(
      e.target.email.value,
      e.target.password.value,
      e.target.password_confirmation.value
    )
    if (response.registered) {
      this.setState({ registered: true, renderRegisterForm: false })
      this.setState({
        message: response.message.data.status
      })
      console.log(response)
    } else {
      this.setState({
        message: response.message
      })
      console.log(response)
    }
  }

  render () {
    let renderMessage
    let renderButtons
    let renderBackButton
    let renderLogin
    let renderRegister
    const { renderLoginForm, renderRegisterForm, authenticated } = this.state

    switch (true) {
      case renderLoginForm && !authenticated:
        renderLogin = <LoginForm submitFormHandler={this.onLogin} />
        break
      case renderRegisterForm && !authenticated:
        renderRegister = (
          <RegistrationForm submitFormHandler={this.onRegister} />
        )
        break
      case !renderLoginForm && !renderRegisterForm && !authenticated:
        renderButtons = (
          <>
            <div>
              <button
                className='ui primary button'
                id='login'
                onClick={() =>
                  this.setState({ renderLoginForm: true, message: '' })
                }
              >
                Login
              </button>
              <button
                className='ui primary button'
                id='register'
                onClick={() =>
                  this.setState({ renderRegisterForm: true, message: '' })
                }
              >
                Register
              </button>
            </div>
          </>
        )
        break
    }

    if (this.state.message) {
      renderMessage = <p id='message'>{this.state.message}</p>
    }

    if ((renderLoginForm || renderRegisterForm) && !authenticated) {
      renderBackButton = (
        <>
          <a
            className='ui primary button'
            id='backButton'
            onClick={() =>
              this.setState({
                renderRegisterForm: false,
                renderLoginForm: false,
                registered: false,
                message: ''
              })
            }
          >
            Back
          </a>
        </>
      )
    }

    return (
      <>
          <section className='buttons'>
            {renderButtons}{renderBackButton}
          </section>
          <div className='ui container'>
            <h1>Janko's Burgers and Pizzas</h1>
            <p className='messages'>{renderMessage}</p>
            <p className='forms'>{renderLogin}</p>
            <p className='forms'>{renderRegister}</p>
          </div>
          <div className='ui container'>
            <div>
              <ShowMenu />
            </div>
          </div>
      </>
    )
  }
}
export default App
