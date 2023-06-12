import React, { Component } from 'react'
import './DateInput.scss'

export class DateInput extends Component {
  render() {
    return (
        <input type="date" className='date-input'/>
    )
  }
}

export default DateInput