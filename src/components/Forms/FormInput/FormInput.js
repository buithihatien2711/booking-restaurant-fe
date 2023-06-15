// import React, { Component } from "react";
// import "./FormInput.scss";

// class FormInput extends Component {
//   state = {
//     value: '',
//   };

//   componentDidMount(){
//     console.log('props: ', this.props.defaultValue)
//     this.setState({
//       value : this.props.defaultValue
//     })
//   }

//   handleOnChangeInput = (event) => {
//     let valueCopy = this.state.value
//     valueCopy = event.target.value
//     this.setState({
//         value: valueCopy
//     })
//     console.log(this.state.value)
//   }

//   render() {
//     // console.log('props render: ', this.props.defaultValue)
//     return (
//       <input
//         type="text"
//         className="text-input"
//         placeholder={this.props.placeholder}
//         value={this.state.value}
//         onChange={(event) => this.handleOnChangeInput(event)}
//       />
//     );
//   }
// }

// export default FormInput;
