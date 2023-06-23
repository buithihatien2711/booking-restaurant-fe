import React, { Component } from 'react'
import './OwnerLogin.scss'
import OwnerLoginForm from './OwnerLoginForm'

export class OwnerLogin extends Component {
  render() {
    return (
      <div className='owner-login'>
        {/* <div className="login-form-container"> */}
          <OwnerLoginForm />
        {/* </div> */}
      </div>
    )
  }
}

export default OwnerLogin