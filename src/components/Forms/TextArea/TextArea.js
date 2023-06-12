import React, { Component } from 'react'
import './TextArea.scss'
export class TextArea extends Component {
  render() {
    return (
      <textarea className='text-area-input' placeholder={this.props.placeholder}></textarea>
    )
  }
}

export default TextArea