import React, { Component } from 'react'
import './Select.scss'
export class Select extends Component {
  render() {
    const data = this.props.data
    const defaultValue = {
        id: 0,
        name: this.props.defaultValue
    }
    const options = [defaultValue, ...data]
    return (
        <select className='select-input'>
            {
                options.map((item) => (
                    <option value={item.id}>{item.name}</option>
                ))
            }
        </select>
    )
  }
}

export default Select