import React from 'react'

const RegistrationForm = ({ submitFormHandler }) => {
  return (
    <form onSubmit={submitFormHandler} id='register-form'>
      <div className='ui one column centered grid'>
        <div className='ui four column centered row'>
          <div className='ui input'>
            <input
              className='ui input'
              name='email'
              type='email'
              id='email'
              placeholder='enter email'
            ></input>
          </div>
          <div className='ui input'>
            <input
              className='ui input'
              name='password'
              type='password'
              id='password'
              placeholder='enter password'
            ></input>
          </div>
          <div className='ui input'>
            <input
              className='ui input'
              name='password_confirmation'
              type='password'
              id='password_confirmation'
              placeholder='confirm password'
            ></input>
          </div>
          <div className='ui four column centered row'>
            <button className='ui primary button' id='submit'>
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  )
}

export default RegistrationForm
