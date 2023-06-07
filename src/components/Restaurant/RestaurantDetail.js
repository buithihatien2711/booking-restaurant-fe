import React, { Component } from 'react'
import SlideShow from '../SlideShow/SlideShow'
import './RestaurantDetail.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import Map from '../Map/Map';
import { TbMicrophone2 } from 'react-icons/tb';
import { AiOutlineCar, AiOutlineFundProjectionScreen, AiOutlineWifi, AiOutlineCreditCard } from "react-icons/ai";
import { BsReceipt } from "react-icons/bs";
import { HiOutlineCake } from "react-icons/hi";
import { MdOutlineTableBar, MdOutlineMeetingRoom } from "react-icons/md";
import { GiKidSlide } from "react-icons/gi";

export class RestaurantDetail extends Component {
  // state = {
  // }
  render() {
    return (
      <div className='restaurant-detail'>
        <div className="container">
          <div className="row">
            <div className="col-md-9 content">
              <div className='intro'>
                <div className="restaurant-image row">
                  <div className="col-md-10 main-image">
                    {/* <div className="main-image"> */}
                    <img src="http://product.hstatic.net/1000275435/product/pato_optimized__1__54cb698423a84f68bed2b3fec78c1413_large.jpg" alt="" />
                    {/* </div> */}
                  </div>
                  <div className="col-md-2 other-image">
                    {/* <div className="other-image"> */}
                    <img src="http://product.hstatic.net/1000275435/product/heo_dam_nuong_tang-min_d00ed3323bf7425784ff28fdcc2672f3_large.jpg" alt="" />
                    <img src="http://product.hstatic.net/1000275435/product/140649921_107061864718695_5990799498429482866_n_b09d55226d6f4fecb505e20110fcaba3_large.jpg" alt="" />
                    <img src="http://product.hstatic.net/1000275435/product/pato_optimized__1__54cb698423a84f68bed2b3fec78c1413_large.jpg" alt="" />
                    <img src="http://product.hstatic.net/1000275435/product/111256382_2975506359243019_6241437114968695561_o_d985b96d0d72408aa0cbd9490fa1e246_large.jpg" alt="" />
                    {/* </div> */}
                  </div>
                </div>
                <div className="intro-text">
                  <h3>Lẩu sen đào - Phó đức chính</h3>
                  <div className="location">
                    <span className='icon-location'>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    Số 36 Phó Đức Chính, P.Trúc Bạch, Hà Nội
                    <div className='line'></div>
                  </div>
                  <div className='tag'>
                    <ul>
                      <li>
                        <a href="/" className='tag-item'>
                          Món Việt
                        </a>
                      </li>
                      <li>
                        <a href="/" className='tag-item'>
                          Lẩu
                        </a>

                      </li>
                      <li>
                        <a href="/" className='tag-item'>
                          Gọi món
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="description">
                <p>
                  <strong>* Không gian: </strong> Sức chứa tối đa 150 khách&nbsp;
                </p>
                <p>
                  <strong>* Món ăn đặc sắc:</strong> Bánh tráng trảng bàng, Lẩu cá kèo, Đặc sản miền Tây, Lẩu mắm cá linh, Cá sặc…
                </p>
                <p>
                  <strong>* Giới thiệu chung:&nbsp;</strong>
                </p>
                <p>
                  <strong>Nhà hàng Phương Nam - Tầng 1, Aeon Mall Hà Đông, Dương Nội, Hà Đông, Hà Nội - Nơi tình yêu ẩm thực Việt được thăng hoa.
                  </strong>
                </p>
                <p>
                  Là “em út” thuộc chuỗi Nhà hàng chuyên các món ẩm thực miền Nam,
                  <strong>Phương Nam cơ sở Aeon Mall Hà Đông mang theo tình yêu với miền đông sông nước đến với thực khách Hà Thành.</strong>
                  Nhà hàng đã rút ngắn khoảng cách địa lý giữa hai đầu Tổ Quốc bằng những hương vị ẩm thực khó quên.</p>
                <p>Sở hữu <strong>menu lên đến hơn 50 món ăn truyền thống của người dân miền Nam</strong>,
                  thực khách khi đến với Phương Nam Aeon Mall Hà Đông chắc chắn sẽ phải choáng ngợp với hương vị của những món ăn tại đây.
                  Dưới bàn tay tài hoa của những người đầu bếp, các <strong>món ăn không chỉ đậm đà về hương vị mà còn vô cùng đẹp mắt, tinh tế</strong>.
                  Đặc biệt với <strong>khâu lựa chọn nguyên liệu kỹ lưỡng cùng công thức chế biến độc quyền,</strong>
                  tạo ra một dấu ấn riêng nhưng vẫn giữ trọn vẹn hương vị truyền thống.</p>
                <p>Không gian nhà hàng<strong> tái hiện lại vùng Đồng bằng Sông Cửu Long với những màu sắc dân dã, bình yên. </strong>
                  Bước chân vào nhà hàng, bạn sẽ như được trút bỏ hết những xô bồ bên ngoài, hoàn toàn thả mình vào
                  <strong>không gian của vùng quê miền sông nước với những chiếc nơm bắt cá, với đồng lúa vàng,
                    với cây tre và con người nồng hậu.&nbsp;</strong></p><p>Mức giá tại Phương Nam Aeon Mall Hà Đông là
                  <strong>từ 200.000 VND đến 300.000 VND/1 người,</strong> rất phù hợp cho một “cuộc khám phá ẩm thực” đúng nghĩa.</p>
                <p>Còn chần chừ gì nữa mà chưa gọi <a href="http://pato.com.vn"><strong><span style={{ color: "#e74c3c" }}>PATO</span></strong></a>
                  và đặt bàn ngay nào <a href="tel:19002280"><strong><span style={{ color: "#e74c3c" }}>1900.2280&nbsp;</span></strong></a>
                </p><p><strong>* Lưu ý:</strong></p><ul><li><p>Quý khách nên đặt chỗ trước từ 30 phút để được hỗ trợ tốt nhất.</p></li>
                  <li><p>Bàn đặt của Quý khách được giữ tối đa 15 phút.</p></li><li><p>Giá menu chưa bao gồm VAT. Nhà hàng luôn thu VAT.&nbsp;</p></li>
                  <li><p>Nhà hàng quy định không mang đồ ăn từ ngoài vào.&nbsp;</p></li><li>
                    <p>Thu phí khi mang đồ uống từ ngoài vào như sau: Rượu mạnh: 250.000 VND/1 chai,
                      Rượu vang/Vodka: 100.000 VND/1 chai, Rượu quê: 50.000 VND/1 lít.&nbsp;</p></li>
                  <li><p>Nhà hàng cung cấp chỗ đỗ xe miễn phí. Quý khách vui lòng trao đổi với nhân viên tại Nhà hàng để được hỗ trợ.</p></li></ul>
              </div>
              <div className="menu">
                <SlideShow />
              </div>
              <div className="map">
                <Map/>
              </div>
            </div>
            <div className="col-md-3 extra-info">
              <div className="reservation">
                <h4>Phương Nam - Aeon Mall Hà Đông</h4>
                <div className="reservation">
                  <button className='btn-reserve'> Đặt ngay</button>
                </div>
              </div>
              <div className="adding-info-business-hour">
                <div className="business-hour">
                  <h6>GIỜ HOẠT ĐỘNG</h6>
                  <ul>
                    <li><span>Thứ hai</span> 10:00 - 21:30</li>
                    <li><span>Thứ ba</span> 10:00 - 21:30</li>
                    <li><span>Thứ tư</span> 10:00 - 21:30</li>
                    <li><span>Thứ năm</span> 10:00 - 21:30</li>
                    <li><span>Thứ sáu</span> 10:00 - 21:30</li>
                    <li><span>Thứ bảy</span> 10:00 - 21:30</li>
                    <li><span>Chủ nhật</span> 10:00 - 21:30</li>
                  </ul>
                </div>
                <div className="adding-info">
                  <h6>THÔNG TIN THÊM</h6>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="active">
                        <span style={{marginRight: "5px"}}> <AiOutlineCar/></span>
                        Chỗ đỗ xe
                      </div>
                      <div className="adding-info-item">
                        <span style={{marginRight: "5px"}}><MdOutlineMeetingRoom/></span>
                        Phòng riêng
                      </div>
                      <div className="adding-info-item">
                        <span style={{marginRight: "5px"}}><BsReceipt/></span>
                        Có xuất hóa đơn
                      </div>
                      <div className="adding-info-item">
                        <span style={{marginRight: "5px"}}><TbMicrophone2/></span>
                        Karaoke
                      </div>
                      <div className="adding-info-item">
                        <span style={{marginRight: "5px"}}><AiOutlineFundProjectionScreen/></span>
                        Màn chiếu
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="adding-info-item">
                        <span style={{marginRight: "5px"}}><AiOutlineWifi/></span>
                        Wifi
                      </div>
                      <div className="adding-info-item">
                        <span style={{marginRight: "5px"}}><AiOutlineCreditCard/></span>
                        Thanh toán thẻ
                      </div>
                      <div className="adding-info-item">
                        <span style={{marginRight: "5px"}}><HiOutlineCake/></span>
                        Trang trí sự kiện
                      </div>
                      <div className="adding-info-item">
                        <span style={{marginRight: "5px"}}><MdOutlineTableBar/></span>
                        Bàn ngoài trời
                      </div>
                      <div className="adding-info-item">
                        <span style={{marginRight: "5px"}}><GiKidSlide/></span>
                        Khu vui chơi trẻ em
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default RestaurantDetail