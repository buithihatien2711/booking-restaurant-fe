import React, { Component } from "react";
import AdminLogin from "../containers/Auth/Admin/AdminLogin";
import AdminHeader from "../containers/Header/AdminHeader";
import AdminNavbar from "../containers/Navbar/AdminNavbar";
import { Outlet } from "react-router";
import "./HomeAdmin.scss";

export class HomeAdmin extends Component {
    state = {
        isLogin: false,
    };

    componentDidMount() {
        let token = localStorage.adminToken;
        if (token) {
        this.setState({
            isLogin: true,
        });
        }
        // console.log('localStorage: ', localStorage.adminToken)
    }

    render() {
        return (
        <>
            {!this.state.isLogin ? (
            <AdminLogin />
            ) : (
            <div className="home-admin-container">
                <AdminHeader />
                <div className="content-container">
                    <div className="nav-bar-container">
                        <AdminNavbar />
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

export default HomeAdmin;
