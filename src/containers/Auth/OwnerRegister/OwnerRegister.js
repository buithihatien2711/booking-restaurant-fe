import React, { Component } from 'react'
import './OwnerRegister.scss'
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { handleRegisterApi } from "../../../services/userService"
import Select from '../../../components/Forms/Select/Select';

export class OwnerRegister extends Component {
  state = {
    isShowPassword: false,
    name: '',
    phone: '',
    email: '',
    password: '',
    confirmPassword: '',
    message: '',
  }

  handleShowHidePassword = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
  };

  handleOnChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleOnClickRegister = async () => {
    this.setState({
      message: '',
    })
    if(!(this.state.name && this.state.phone && this.state.email && this.state.password && this.state.confirmPassword)) {
      this.setState({
        message: 'Vui lòng nhập đầy đủ thông tin'
      })
    }

    if(this.state.password !== this.state.confirmPassword) {
      this.setState({
        message: 'Mật khẩu không khớp. Vui lòng thử lại'
      })
    }

    try {
      let user = {
        fullname: this.state.name,
        phone: this.state.phone,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
        email: this.state.email,
        role: 3
      }

      let res = await handleRegisterApi(user)

      // console.log('>>> res: ',res.data.data)
      localStorage.setItem("ownerToken", res.data.data);

    } catch (error) {
      this.setState({
        message: error
      })
    }

  }

  render() {
    return (
      <div className='owner-register'>
        <div className="register-form">
          <div className="title row">
            <div className="col-md-12">
              Đăng kí
            </div>
          </div>
          <div className="full-name row">
            <div className="col-md-3">
              Tên
            </div>
            <div className="col-md-9">
              <input type="text" name='name' onChange={(event) => this.handleOnChangeInput(event)} />
            </div>
          </div>
          <div className="phone row">
            <div className="col-md-3">
              Số điện thoại
            </div>
            <div className="col-md-9">
              <input type="text" name='phone' onChange={(event) => this.handleOnChangeInput(event)} />
            </div>
          </div>
          <div className="email row">
            <div className="col-md-3">
              Email
            </div>
            <div className="col-md-9">
              <input type="text" name='email' onChange={(event) => this.handleOnChangeInput(event)} />
            </div>
          </div>
          <div className="password row">
            <div className="col-md-3">
              Mật khẩu
            </div>
            <div className="col-md-9">
              <div className="custom-input-password">
                <input
                  type={this.state.isShowPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Nhập mật khẩu"
                  value={this.state.password}
                  name="password"
                  onChange={(event) => this.handleOnChangeInput(event)}
                />
                <span onClick={() => this.handleShowHidePassword()}>
                  <FontAwesomeIcon
                    icon={this.state.isShowPassword ? faEye : faEyeSlash}
                    className="icon-eye"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="confirm-password row">
            <div className="col-md-3">
              Nhập lại mật khẩu
            </div>
            <div className="col-md-9">
              <div className="custom-input-password">
                <input
                  type={this.state.isShowPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Nhập mật khẩu"
                  value={this.state.confirmPassword}
                  name="confirmPassword"
                  onChange={(event) => this.handleOnChangeInput(event)}
                />
                <span onClick={() => this.handleShowHidePassword()}>
                  <FontAwesomeIcon
                    icon={this.state.isShowPassword ? faEye : faEyeSlash}
                    className="icon-eye"
                  />
                </span>
              </div>
            </div>
          </div>
          <div className="message">
            {this.state.message}
          </div>
          <div className="register-btn-container">
            <button className='btn-register' onClick={() => this.handleOnClickRegister()}>
              Đăng kí
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default OwnerRegister