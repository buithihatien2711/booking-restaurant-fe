import React, { Component } from 'react'
import './Footer.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

class Footer extends Component {
  render() {
    return (
        <>
            <div className='footer'>
                <div className="container">
                    <div className="row py-3">
                        <div className="col-md-3 footer-menu">
                            <h5>THÔNG TIN CÔNG TY</h5>
                            <ul>
                                <li>
                                    <span className='icon-footer'>
                                        <FontAwesomeIcon icon={faLocationDot}/>
                                    </span>
                                    266 Đội Cấn, Quận Ba Đình, Hà Nội
                                </li>
                                <li>
                                    <span className='icon-footer'>
                                        <FontAwesomeIcon icon={faPhone} />
                                    </span>
                                    <a href="tel:1900 6750">1900 6750</a>
                                </li>
                                <li>
                                    <span className='icon-footer'>
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </span>
                                    <a href="mailto:support@ht.vn">support@ht.vn</a>
                                </li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-menu">
                            <h5>CHĂM SÓC KHÁCH HÀNG</h5>
                            <ul>
                                <li><a href="/">Trung tâm trợ giúp</a></li>
                                <li><a href="/">Hướng dẫn mua hàng</a></li>
                                <li><a href="/">Hướng dẫn bán hàng</a></li>
                                <li><a href="/">Thanh toán</a></li>
                                <li><a href="/">Vận chuyển</a></li>
                                <li><a href="/">Trả hàng & Hoàn tiền</a></li>
                                <li><a href="/">Chăm sóc khách hàng</a></li>
                                <li><a href="/">Chính sách bảo hành</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-menu">
                            <h5>VỀ CHÚNG TÔI</h5>
                            <ul>
                                <li><a href="/">Trang chủ</a></li>
                                <li><a href="/">Giới thiệu</a></li>
                                <li><a href="/">Sản phẩm</a></li>
                                <li><a href="/">Tin tức</a></li>
                                <li><a href="/">Liên hệ</a></li>
                            </ul>
                        </div>
                        <div className="col-md-3 footer-menu">
                            <h5>THEO DÕI CHÚNG TÔI TRÊN</h5>
                            <ul>
                                <li>
                                    <a href="/">
                                        {/* <span className='icon-footer'>
                                            <FontAwesomeIcon icon={faInstagram} />
                                        </span> */}
                                        Instagram
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        {/* <i className="fa-brands fa-facebook"></i> */}
                                        Facebook
                                    </a>
                                </li>
                                <li>
                                    <a href="/">
                                        {/* <i className="fa-brands fa-linkedin"></i> */}
                                        LinkedIn
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
  }
}

export default Footer