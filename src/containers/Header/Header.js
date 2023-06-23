import React, { Component } from "react";
import imgLogo from "../../assets/image/logo-image.png";
import "./Header.scss";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { BiSearch } from "react-icons/bi";
import { VscAccount } from "react-icons/vsc";
import { BiUserCircle } from "react-icons/bi";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { withRouter } from "../../hoc/withRouter";
import { path } from "../../utils/constant";
import Dropdown from "react-bootstrap/Dropdown";
import Login from "../Auth/UserLogin/Login";
import { Link } from "react-router-dom";
import jwt_decode from "jwt-decode";

class Header extends Component {
  state = {
    isLogin: false,
    showLoginForm: false,
    fullname: '',
  };

  componentDidMount() {
    let token = localStorage.userToken
    if (token) {
      this.setState({
        isLogin: true,
      });

      var decoded = jwt_decode(token);
      if(decoded.Fullname){
        this.setState({
          fullname: decoded.Fullname
        })
      }
    }
    // console.log('localStorage: ', localStorage.userToken)
  }

  handleOnClickLogin = () => {
    // this.props.navigate(path.LOGIN)
    this.setState({
      showLoginForm: true
    })
  };

  onClickSignOut = (event) => {
    localStorage.removeItem("userToken");
    this.setState({
      isLogin: false,
    });
    event.preventDefault();
  };

  onCloseLoginForm = () => {
    this.setState({
      showLoginForm: false
    })
  }

  render() {
    return (
      <>
        {this.state.showLoginForm && (
          <div className="login-form">
            <Login  onClose={() => this.onCloseLoginForm()} />
          </div>
        )}
        <div className="header">
          <div className="container for-business-container">
            <div className="row">
              <div className="for-business">
                <a href={path.OWNERLOGIN}>Dành cho doanh nghiệp</a>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-md-2 logo">
                <Link to={path.HOME}>
                  <img
                    src={imgLogo}
                    className="img-fluid img-logo"
                    alt="logo của website"
                  />
                </Link>
              </div>
              <div className="col-md-7 search">
                {/* <div className="search-bar">
                                <div  className='search-icon'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                </div>
                                <input className="search-input  form-control" type="text" placeholder="Tìm kiếm nhà hàng phù hợp"/>
                            </div> */}
                {/* <div className="input-group">
                                    <span className="input-group-text" id="basic-addon1"><BiSearch /></span>
                                    <input type="text" className="form-control" placeholder="Tìm kiếm nhà hàng phù hợp" aria-label="Username" aria-describedby="basic-addon1" />
                                </div> */}
                <InputGroup className="search-bar row">
                  <Form.Control
                    placeholder="Tìm kiếm nhà hàng phù hợp"
                    className="col-11 search-input"
                  />
                  <InputGroup.Text
                    id="basic-addon2"
                    className="col-1 search-icon"
                  >
                    <BiSearch />
                  </InputGroup.Text>
                </InputGroup>
              </div>
              <div className="col-md-3 account">
                {!this.state.isLogin ? (
                  <>
                    <button
                      className="btn-auth"
                      onClick={() => this.handleOnClickLogin()}
                    >
                      Đăng nhập
                    </button>
                    <button className="btn-auth">Đăng kí</button>
                  </>
                ) : (
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="success"
                      id="dropdown-basic"
                      className="account-auth"
                    >
                      <div className="full-name">
                        {this.state.fullname}
                      </div>
                      {/* <VscAccount /> */}
                      <div className="avatar">
                        <img src="https://as2.ftcdn.net/v2/jpg/03/31/69/91/1000_F_331699188_lRpvqxO5QRtwOM05gR50ImaaJgBx68vi.jpg" alt="" />
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
                )}
                {/* <FontAwesomeIcon icon={faUser} size="2xl" /> */}
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Header);

// <div className='account-icon'>
// <VscAccount />
// {/* <BiUserCircle/> */}
// </div>
