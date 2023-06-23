import React, { Component } from "react";
import "./OwnerHeader.scss";
import imgLogo from "../../assets/image/logo.png";
import { Link } from "react-router-dom";
import { path } from "../../utils/constant";
import jwt_decode from "jwt-decode";
import Dropdown from "react-bootstrap/Dropdown";
import { withRouter } from "../../hoc/withRouter";

class HeaderOwner extends Component {
  state = {
    isLogin: false,
    showLoginForm: false,
    fullname: "",
  };

  componentDidMount() {
    let token = localStorage.ownerToken;
    if (token) {
      this.setState({
        isLogin: true,
      });

      var decoded = jwt_decode(token);
      if (decoded.Fullname) {
        this.setState({
          fullname: decoded.Fullname,
        });
      }
    }
    // console.log('localStorage: ', localStorage.ownerToken)
  }

  onClickSignOut = (event) => {
    localStorage.removeItem("ownerToken");
    this.setState({
      isLogin: false,
    });
    // event.preventDefault();
    // this.props.navigate(path.OWNERLOGIN);
    window.location.reload();
  };

  render() {
    return (
      <>
        <div className="owner-header">
          <div className="container">
            <div className="row">
              <div className="col-md-2">
                <div className="logo">
                  <Link to={path.HOMEOWNER}>
                    <img
                      src={imgLogo}
                      className="img-fluid img-logo"
                      alt="logo của website"
                    />
                  </Link>
                </div>
              </div>
              <div className="col-md-6"></div>
              <div className="col-md-4 account">
                {/* <div className="auth">
                  <button className="btn-login">Login</button>
                  <button className="btn-register">Get started</button>
                </div> */}
                <Dropdown>
                  <Dropdown.Toggle
                    variant="success"
                    id="dropdown-basic"
                    className="account-auth"
                  >
                    <div className="full-name">{this.state.fullname}</div>
                    {/* <VscAccount /> */}
                    <div className="avatar">
                      <img
                        src="https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg"
                        alt=""
                      />
                    </div>
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="/">Quản lí tài khoản</Dropdown.Item>
                    <Dropdown.Item
                      href="/"
                      onClick={(event) => this.onClickSignOut(event)}
                    >
                      Đăng xuất
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(HeaderOwner);
