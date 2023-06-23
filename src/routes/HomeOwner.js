import React, { Component } from "react";
import HeaderOwner from "../containers/Header/OwnerHeader";
import { Outlet } from "react-router";
import OwnerFooter from "../containers/Footer/OwnerFooter";
import OwnerNavBar from "../components/OwnerNavBar/OwnerNavBar";
import "./HomeOwner.scss";
import jwt_decode from "jwt-decode";
import OwnerLogin from "../containers/Auth/OwnerLogin/OwnerLogin";

class HomeOwner extends Component {
  state = {
    isLogin: false,
  };

  componentDidMount() {
    let token = localStorage.ownerToken;
    if (token) {
      this.setState({
        isLogin: true,
      });
    }
    // console.log('localStorage: ', localStorage.ownerToken)
  }

  render() {
    return (
      <>
        {!this.state.isLogin ? (
          <OwnerLogin />
        ) : (
          <div className="home-owner-container">
            <HeaderOwner />
            <div className="content-container">
              <div className="nav-bar-container">
                <OwnerNavBar />
              </div>
              <div className="content">
                <Outlet />
              </div>
            </div>
          </div>
        )}
      </>
    );
  }
}

export default HomeOwner;
