import React, { Component } from 'react'
import './Reservation.scss'
import FormInput from '../Forms/FormInput/FormInput'
import DateInput from '../Forms/DateInput/DateInput'
import Select from '../Forms/Select/Select'
import TextArea from '../Forms/TextArea/TextArea'
import { MdClose } from "react-icons/md";

export class Reservation extends Component {


  render() {
    const data = [
      { id: 1, name: 'red' },
      { id: 1, name: 'blue' },
      { id: 1, name: 'green' },
      { id: 1, name: 'yellow' },
      { id: 1, name: 'black' },
    ]
    return (
      <div className="reservation">
        <div className='reservation-container'>
          <div className="close" onClick={this.props.onClose}>
            <MdClose />
          </div>
          <div className='title'>
            Thông tin đặt bàn
          </div>
          <div className="name-input">
            <FormInput placeholder={'Tên'} />
          </div>
          <div className="phone-input">
            <FormInput placeholder={'Số điện thoại'} />
          </div>
          <div className='time row'>
            <div className="col-6 date-input">
              <DateInput />
            </div>
            <div className="col-6 hour-select">
              <Select data={data} defaultValue={'Chọn giờ'} />
            </div>
          </div>
          <div className="number-people row">
            <div className="adults-number-select col-6">
              <Select data={data} defaultValue={'Chọn số người lớn'} />
            </div>
            <div className="children-number-select col-6">
              <Select data={data} defaultValue={'Chọn số trẻ em'} />
            </div>
          </div>
          <div className="note">
            <TextArea placeholder='Ghi chú thêm' cols={30} rows={10} />
          </div>
          <div className='reserve'>
            <button className='btn-reserve'>
              Đặt ngay
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Reservation