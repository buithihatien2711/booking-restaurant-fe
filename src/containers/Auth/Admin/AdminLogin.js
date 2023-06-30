import React, { Component } from "react";
import "./AdminLogin.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { Link } from 'react-router-dom';
import { handleLoginApi } from "../../../services/userService";
import { path } from '../../../utils/constant';
import { withRouter } from '../../../hoc/withRouter';

export class AdminLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
        phone: "",
        password: "",
        isShowPassword: false,
        errMessage: "",
        errValid: "",
        };
    }

    handleOnChangeInput = (event) => {
        this.setState({
        [event.target.name]: event.target.value,
        });
    };

    handleOnClickLogin = async () => {
        this.setState({
        errMessage: "",
        errValid: "",
        });

        if (this.state.phone === "") {
        this.setState({
            errValid: "phone không được bỏ trống",
        });
        }
        if (this.state.password === "") {
        this.setState({
            errValid: "Mật khẩu không được bỏ trống",
        });
        }
        if (this.state.phone === "" && this.state.password === "") {
        this.setState({
            errValid: "phone và mật khẩu không được bỏ trống",
        });
        }

        try {
        const role = 1
        let res = await handleLoginApi(this.state.phone, this.state.password, role);
        localStorage.setItem("adminToken", res.data.data);
        this.props.navigate(path.ADMINHOME);
        window.location.reload()
        } catch (error) {
        this.setState({
            errMessage:
            error &&
            error.response &&
            error.response.data &&
            error.response.data.errorMessage
                ? error.response.data.errorMessage
                : "",
        });
        }
    };

    handleShowHidePassword = () => {
        this.setState({
        isShowPassword: !this.state.isShowPassword,
        });
    };
    render() {
        return (
        <div className="admin-login">
            <div className="admin-login-form">
            <div className="login-content row">
                <div className="col-12 text-login">Đăng nhập</div>
                <div className="col-12" style={{ color: "red" }}>
                {this.state.errValid}
                </div>
                <div className="col-12 form-group login-input">
                <label>Số điện thoại</label>
                <input
                    type="text"
                    className="form-control"
                    placeholder="Nhập số điện thoại"
                    value={this.state.phone}
                    name="phone"
                    onChange={(event) => this.handleOnChangeInput(event)}
                />
                </div>
                <div className="col-12 form-group login-input">
                <label>Mật khẩu</label>
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
                <div className="col-12" style={{ color: "red" }}>
                {this.state.errMessage}
                </div>
                <div className="col-12">
                <button
                    className="btn-login"
                    onClick={() => this.handleOnClickLogin()}
                >
                    Đăng nhập
                </button>
                </div>
                <div className="col-12 forget-password">
                {/* <span className="forgot-password">Quên mật khẩu?</span> */}
                <Link to="/">Quên mật khẩu</Link>
                </div>
            </div>
            </div>
        </div>
        );
    }
}

export default withRouter(AdminLogin);
