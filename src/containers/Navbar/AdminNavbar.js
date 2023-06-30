import React, { Component } from 'react'
import './AdminNavbar.scss'
import { MdClose } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { withRouter } from '../../hoc/withRouter';
import { path } from '../../utils/constant';
import { Link } from 'react-router-dom';

export class AdminNavbar extends Component {
    state = {
        isOpen: true,
        selectedItem: null,
        isFirstLoad: true,
    }

    OnClose = () => {
        this.setState({
            isOpen: false
        })
    }

    OnOpen = () => {
        this.setState({
            isOpen: true
        })
    }

    OnClickItemMenu = (item) => {
        this.setState({
            selectedItem: item,
            isFirstLoad: false
        });
        if (item === 'restaurant') {
            // <Link to ''
        }
    }
    render() {
        return (
            <>
                {this.state.isOpen ?
                    (<div className="admin-navbar-container">
                        <div className="close" onClick={() => this.OnClose()}>
                            <MdClose />
                        </div>
                        <div className="menu">
                            <Link to="/admin">
                                <div className={`menu-item ${this.state.selectedItem === 'home' || this.state.isFirstLoad ? 'active' : ''}`} onClick={() => this.OnClickItemMenu('home')}>
                                    Home
                                </div>
                            </Link>
                            <Link to="/admin/restaurant">
                                <div className={`menu-item ${this.state.selectedItem === 'restaurant' ? 'active' : ''}`} onClick={() => this.OnClickItemMenu('restaurant')}>
                                    Quản lí đặt chỗ
                                </div>
                            </Link>
                            <Link to="/admin">
                                <div className={`menu-item ${this.state.selectedItem === 'report' ? 'active' : ''}`} onClick={() => this.OnClickItemMenu('report')}>
                                    Báo cáo
                                </div>
                            </Link>
                        </div>
                    </div>)
                    :
                    (<div className="btn-menu" onClick={() => this.OnOpen()}>
                        <AiOutlineMenu />
                    </div>)}
            </>
        )
    }
}

export default withRouter(AdminNavbar)