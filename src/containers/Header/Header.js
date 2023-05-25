import React, { Component } from 'react'
import imgLogo from '../../assets/image/logo.png'
import './Header.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import {faUser} from '@fortawesome/free-solid-svg-icons';

export default class Header extends Component {
  render() {
    return (
        <>
            <div className='header'>
                <div className='container'>
                    <div className="row">
                        <div className='for-business'>
                            <a href="#">Dành cho doanh nghiệp</a>
                        </div>
                    </div>
                </div>
                <div className='container'>
                    <div className='row'>
                        <div className='col-md-2 logo'>
                            <img src={ imgLogo } className='img-fluid img-logo' alt='logo của website' />
                        </div>
                        <div className='col-md-7 search'>
                            <div  className='search-icon'>
                                <FontAwesomeIcon icon={faMagnifyingGlass}/>
                            </div>
                            <input className="search-input" type="text" placeholder="Tìm kiếm nhà hàng phù hợp"/>
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
