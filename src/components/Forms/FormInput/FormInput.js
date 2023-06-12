import React, { Component } from 'react'
import './FormInput.scss'

export class FormInput extends Component {
  render() {
    return (
        <input type="text" className='text-input' placeholder={this.props.placeholder}/>
    )
  }
}

export default FormInput