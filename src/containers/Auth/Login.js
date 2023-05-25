import React, { Component } from 'react'
import './Login.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { handleLoginApi } from '../../services/userService'
import { Navigate } from 'react-router-dom';
import { withRouter } from '../../hoc/withRouter';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            phone: '',
            password: '',
            isShowPassword: false,
            errMessage: ''
        }
    }

    handleOnChangeInput = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleOnClickLogin = async () => {
        this.setState({
            errMessage: ''
        })
        
        try {
            let res = await handleLoginApi(this.state.phone, this.state.password)
            // console.log(data.data.data)
            localStorage.setItem('userToken',res.data.data)
            // this.props.history.push('/')
            // console.log(res.data.data)
            // navigate('/home');
            // this.props.history.push('/')
            // this.props.navigate('/home');
            // const navigate = useNavigate();
            // navigate('/');
            // this.props.navigation.navigate('LoginPage')
            // return <Navigate to='/' />
            this.props.navigate('/')
        } catch (error) {
            this.setState({
                errMessage: (error && error.response && error.response.data && error.response.data.errorMessage) ? error.response.data.errorMessage : ''
            })
            // console.log(error.response.data.errorMessage)
        }
    }

    handleShowHidePassword = () => {
        this.setState({
            isShowPassword: ! this.state.isShowPassword
        })
    }

    render() {
        return (
            <div className='login-background'>
                <div className="login-container row">
                    <div className="login-content">
                        <div className='col-12 text-login'>Đăng nhập</div>
                        <div className='col-12 form-group login-input'>
                            <label>Số điện thoại</label>
                            <input type="text" 
                                    className='form-control' 
                                    placeholder='Nhập số điện thoại' 
                                    value={this.state.phone}
                                    name='phone'
                                    onChange={(event) => this.handleOnChangeInput(event)}
                            />
                        </div>
                        <div className='col-12 form-group login-input'>
                            <label>Mật khẩu</label>
                            <div className='custom-input-password' >
                                <input type={this.state.isShowPassword ? 'text' : 'password'}
                                        className='form-control' 
                                        placeholder='Nhập mật khẩu'
                                        value={this.state.password}
                                        name='password'
                                        onChange={(event) => this.handleOnChangeInput(event)}
                                />
                                <span onClick={() => this.handleShowHidePassword()}>
                                    <FontAwesomeIcon icon={this.state.isShowPassword ? faEye : faEyeSlash } className='icon-eye'/>
                                </span>
                            </div>
                        </div>
                        <div className='col-12' style={{color:'red'}}>
                            {this.state.errMessage}
                        </div>
                        <div className='col-12'>
                            <button className='btn-login' onClick={() => this.handleOnClickLogin()}>Đăng nhập</button>
                        </div>
                        <div className='col-12'>
                            <span className='forgot-password'>Quên mật khẩu?</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default withRouter(Login)