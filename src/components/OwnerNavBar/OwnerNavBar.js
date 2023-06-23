import React, { Component } from "react";
import "./OwnerNavBar.scss";
import { MdClose } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";

export class OwnerNavBar extends Component {
    state = {
        isOpen: true,
        selectedItem: null,

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
        this.setState({ selectedItem: item });
    }

    render() {
        return (
            <>
                {this.state.isOpen ?
                    (<div className="navbar-container">
                        <div className="close" onClick={() => this.OnClose()}>
                            <MdClose />
                        </div>
                        <ul className="menu">
                            <li className={`menu-item ${this.state.selectedItem === 'home' ? 'active' : ''}`} onClick={() => this.OnClickItemMenu('home')}>
                                Home
                            </li>
                            <li className={`menu-item ${this.state.selectedItem === 'reservation' ? 'active' : ''}`} onClick={() => this.OnClickItemMenu('reservation')}>
                                Quản lí đặt chỗ
                            </li>
                            <li className={`menu-item ${this.state.selectedItem === 'report' ? 'active' : ''}`} onClick={() => this.OnClickItemMenu('report')}>
                                Báo cáo
                            </li>
                        </ul>
                    </div>)
                    :
                    (<div className="btn-menu" onClick={() => this.OnOpen()}>
                        <AiOutlineMenu />
                    </div>)}
            </>

        );
    }
}

export default OwnerNavBar;
