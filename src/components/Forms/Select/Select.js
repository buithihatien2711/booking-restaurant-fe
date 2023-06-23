import React, { Component } from "react";
import "./Select.scss";

class Select extends Component {
  // handleOnChange = (event) => {
  //     const selectedValue = event.target.value
  //     // console.log('event', event.target.value)
  //     const {onChange} = this.props
  //     if (onChange) {
  //         onChange(selectedValue);
  //     }
  //     // this.props.onChange(selectedValue)
  // }

  handleOnChange = (event) => {
    const selectedValue = event.target.value;
    const { onChange, containElement } = this.props;
    if (onChange) {
      onChange(selectedValue, containElement);
    }
  };

  render() {
    const data = this.props.data;
    var options = data;

    if (this.props.defaultValue) {
      const defaultValue = {
        id: "default",
        name: this.props.defaultValue,
      };
      options = [defaultValue, ...data];
    }

    const selectedIndex = this.props.selectedIndex;
    return (
      <select
        className="select-input"
        onChange={(event) => this.handleOnChange(event)}
      >
        {options.map((item) => (
          <option
            value={item.id}
            key={item.id}
            selected={item.id === selectedIndex}
          >
            {item.name}
          </option>
        ))}
      </select>
    );
  }
}

export default Select;
