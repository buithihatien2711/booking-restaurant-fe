import React, { Component } from 'react'
import './Select.scss'

class Select extends Component {
    handleOnChange = (event) => {
        const selectedValue = event.target.value
        // console.log('event', event.target.value)
        const {onChange} = this.props
        if (onChange) {
            onChange(selectedValue);
        }
        // this.props.onChange(selectedValue)
    }

    render() {
        const data = this.props.data
        const defaultValue = {
            id: 'default',
            name: this.props.defaultValue
        }
        const options = [defaultValue, ...data]
        return (
            <select className='select-input' onChange={(event) => this.handleOnChange(event)}>
                {
                    options.map((item) => (
                        <option value={item.id} key={item.id}>{item.name}</option>
                    ))
                }
            </select>
        )
    }
}

export default Select