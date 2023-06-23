import React, { Component } from 'react'
import './Reservation.scss'
import FormInput from '../Forms/FormInput/FormInput'
import DateInput from '../Forms/DateInput/DateInput'
import Select from '../Forms/Select/Select'
import TextArea from '../Forms/TextArea/TextArea'
import { MdClose } from "react-icons/md";
import jwt_decode from "jwt-decode";
import { handleCreateReservation } from "../../services/reservationService";
import { toast } from 'react-toastify';

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
    userId: '',
    restaurantId: '',
  }
  componentDidMount() {
    let token = localStorage.userToken
    if(token) {
      let decoded = jwt_decode(token);
      // console.log('decoded: ', decoded)
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

      if (decoded.sub) {
        this.setState({
          userId: decoded.sub
        })
      }
    }

    if(this.props.restaurantId){
      this.setState({
        restaurantId: this.props.restaurantId
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

  OnClickReserve = async () => {
    this.setState({
      message: ''
    })

    if (!(this.state.fullname && this.state.phone && this.state.date && this.state.hour && this.state.adults && this.state.children &&
      !(this.state.adults === 'default') && !(this.state.children === 'default') && !(this.state.hours === 'default'))) {
      this.setState({
        message: 'Vui lòng điền đầy đủ thông tin'
      })
    }
    else {
      // Combine the time and date values
      const dateTimeString = `${this.state.date}T${this.state.hour}:00`;
      console.log(dateTimeString)
      const dateTime = new Date(dateTimeString);

      // Check if the dateTime is valid
      if (isNaN(dateTime)) {
        console.error('Invalid date and time format');
      } else {
        // Send the dateTime to the server or perform any desired operations
        console.log('DateTime:', dateTime);
      }

      // this.setState({
      //   message: ''
      // })
      try {
        let reservation = {
          time : dateTime,
          numAdults: this.state.adults,
          numChildren: this.state.children,
          note: this.state.note,
          nameCustomer: this.state.fullname,
          phoneCustomer: this.state.phone
        }

        let res = await handleCreateReservation(reservation, this.state.userId, this.state.restaurantId);
        console.log(res)
        if(res.data.success)
        {
          // this.setState({
          //   message: 'Đặt chỗ thành công, chủ nhà hàng sẽ liên hệ bạn và xác nhận'
          // })
          toast.success('Đặt chỗ thành công, chủ nhà hàng sẽ liên hệ bạn và xác nhận')
          this.setState({
            
          })
        }
      } catch (error) {
        // this.setState({
        //   message: 'Đặt chỗ thất bại'
        // })
        toast.error('Đặt chỗ thất bại')
      }
    }
  }

  handleSelectChange = (selectedValue, type) => {
    this.setState({
      [type]: selectedValue
    });
  };

  render() {
    let adults = []
    for (let i = 1; i < 200; i++) {
      let adult = { id: i, name: i }
      adults.push(adult)
    }
    let children = [{ id: 0, name: 0 }, ...adults]

    let hours = []
    for (let i = 0; i < 48; i++) {
      let hour = `${(Math.floor(i / 2))}`.padStart(2, '0')
      let minute = (i % 2) === 0 ? '00' : '30'
      let time = { id: `${hour}:${minute}`, name: `${hour} : ${minute}` }
      hours.push(time)
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
              <input type="date" className='date-input' name='date' value={this.state.date} onChange={(event) => this.OnInputChange(event)} />
            </div>
            <div className="col-6 hour-select">
              <Select data={hours} defaultValue={'Chọn giờ'} onChange={(selectedValue) => this.handleSelectChange(selectedValue, 'hour')} />
            </div>
          </div>
          <div className="number-people row">
            <div className="adults-number-select col-6">
              <Select data={adults} defaultValue={'Chọn số người lớn'} onChange={(selectedValue) => this.handleSelectChange(selectedValue, 'adults')} />
            </div>
            <div className="children-number-select col-6">
              <Select data={children} defaultValue={'Chọn số trẻ em'} onChange={(selectedValue) => this.handleSelectChange(selectedValue, 'children')} />
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