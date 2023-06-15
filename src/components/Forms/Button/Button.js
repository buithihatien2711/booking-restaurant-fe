import React, { Component } from 'react'
import './Button.scss'

class Button extends Component {
  render() {
    return (
      <button class='button-custom'>
        {this.props.text}
      </button>
    )
  }
}

export default Button