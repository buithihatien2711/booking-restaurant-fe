import React, { Component } from 'react'
import imgLogo from '../../assets/image/logo.png'
import './Header.scss'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { BiSearch } from "react-icons/bi";

export default class Header extends Component {
    render() {
        return (
            <>
                <div className='header'>
                    <div className='container for-business-container'>
                        <div className="row">
                            <div className='for-business'>
                                <a href="#">Dành cho doanh nghiệp</a>
                            </div>
                        </div>
                    </div>
                    <div className='container'>
                        <div className='row'>
                            <div className='col-md-2 logo'>
                                <img src={imgLogo} className='img-fluid img-logo' alt='logo của website' />
                            </div>
                            <div className='col-md-7 search'>
                                {/* <div className="search-bar">
                                <div  className='search-icon'>
                                    <FontAwesomeIcon icon={faMagnifyingGlass}/>
                                </div>
                                <input className="search-input  form-control" type="text" placeholder="Tìm kiếm nhà hàng phù hợp"/>
                            </div> */}
                                <div class="input-group search-bar">
                                    <span class="input-group-text icon" id="basic-addon1"><BiSearch /></span>
                                    <input type="search-input text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
                                </div>
                            </div>
                            <div className='col-md-3 account'>
                                {/* <FontAwesomeIcon icon={faUser} size="2xl" /> */}
                                <button className='btn-auth' onClick={() => this.handleOnLogin()}>Đăng nhập</button>
                                <button className='btn-auth'>Đăng kí</button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
