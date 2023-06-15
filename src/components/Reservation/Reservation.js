import React, { Component } from 'react'
import './Reservation.scss'
import FormInput from '../Forms/FormInput/FormInput'
import DateInput from '../Forms/DateInput/DateInput'
import Select from '../Forms/Select/Select'
import TextArea from '../Forms/TextArea/TextArea'
import { MdClose } from "react-icons/md";
import jwt_decode from "jwt-decode";

class Reservation extends Component {

  state = {
    fullname: '',
    phone: '',
    note: '',
    adults: '',
    children: '',
    hour: '',
    date: '',
    message: '',
  }
  componentDidMount() {
    let token = localStorage.userToken
    let decoded = jwt_decode(token);
    if (decoded.Fullname) {
      this.setState({
        fullname: decoded.Fullname
      })
    }
    if (decoded.Phone) {
      this.setState({
        phone: decoded.Phone
      })
    }
  }

  OnInputChange = (event) => {
    // let valueCopy = this.state.value
    let valueCopy = event.target.value
    this.setState({
      [event.target.name]: valueCopy
    })
    // console.log('state', this.state.note)
  }

  OnClickReserve = () => {
    this.setState({
      message: ''
    })

    if(!(this.state.fullname && this.state.phone && this.state.date && this.state.hour && this.state.adults && this.state.children &&
        !(this.state.adults === 'default') && !(this.state.children === 'default') && !(this.state.hours === 'default'))){
      this.setState({
        message: 'Vui lòng điền đầy đủ thông tin'
      })
    }
  }

  handleSelectChange = (selectedValue, type) => {
    this.setState({
      [type]: selectedValue
    });
  };

  render() {
    let adults = []
    for(let i = 1; i< 200; i++) {
      let adult = {id: i, name: i}
      adults.push(adult)
    }
    let children = [{id: 0, name: 0}, ...adults]

    let hours = []
    for(let i = 0; i < 48; i++){
      let hour = {id: `${Math.floor(i/2)}:${(i%2) === 0 ? '00': '30'}`, name: `${Math.floor(i/2)} : ${(i%2) === 0 ? '00': '30'}`}
      hours.push(hour)
    }


    // console.log('hours: ', this.state.hours)
    return (
      <div className="reservation">
        <div className='reservation-container'>
          <div className="close" onClick={this.props.onClose}>
            <MdClose />
          </div>
          <div className='title'>
            Thông tin đặt bàn
          </div>
          <div className='message'>
            {this.state.message}
          </div>
          <div className="name-input">
            {/* {console.log('state: ', this.state.fullname)} */}
            {/* <FormInput placeholder={'Tên'} defaultValue = {this.state.fullname}/> */}
            <input type="text" placeholder='Tên' name='fullname' value={this.state.fullname} onChange={(event) => this.OnInputChange(event)} />
          </div>
          <div className="phone-input">
            {/* <FormInput placeholder={'Số điện thoại'} /> */}
            <input type="text" placeholder='Số điện thoại' name='phone' value={this.state.phone} onChange={(event) => this.OnInputChange(event)} />
          </div>
          <div className='time row'>
            <div className="col-6 date-input">
              <input type="date" className='date-input' name='date' value={this.state.date} onChange={(event) => this.OnInputChange(event)}/>
            </div>
            <div className="col-6 hour-select">
              <Select data={hours} defaultValue={'Chọn giờ'} onChange={(selectedValue) => this.handleSelectChange(selectedValue, 'hour')}/>
            </div>
          </div>
          <div className="number-people row">
            <div className="adults-number-select col-6">
              <Select data={adults} defaultValue={'Chọn số người lớn'} onChange={(selectedValue) => this.handleSelectChange(selectedValue, 'adults')}/>
            </div>
            <div className="children-number-select col-6">
              <Select data={children} defaultValue={'Chọn số trẻ em'} onChange={(selectedValue) => this.handleSelectChange(selectedValue, 'children')}/>
            </div>
          </div>
          <div className="note">
            {console.log('state: ', this.state.note)}
            <textarea placeholder='Ghi chú thêm' name='note' value={this.state.note} onChange={(event) => this.OnInputChange(event)}></textarea>
          </div>
          <div className='reserve'>
            <button className='btn-reserve' onClick={() => this.OnClickReserve()}>
              Đặt ngay
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Reservation