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
import { handleGetRestaurantDetailApi } from '../../services/restaurantService'
import { withRouter } from '../../hoc/withRouter';
import { path } from '../../utils/constant';

export class RestaurantDetail extends Component {
  state = {
    restaurant: {},
    businessHours: [],
  }

  async componentDidMount() {
    let id = 'e5ade534-0a32-40f1-9187-00cab120bb23'   // Get from url
    try {
      let res = await handleGetRestaurantDetailApi(id)
      // console.log(res.data.data)
      this.setState({
        restaurant: res && res.data && res.data.data ? res.data.data : null
      })

      // console.log(this.state.restaurant)
      // console.log(res)
      // const businessHours = this.state.restaurant.businessHourssort((a, b) => a.date - b.date)

      // this.setState({
      //   businessHours: businessHours
      // })

    } catch (error) {
      // this.props.navigate(path.NOTFOUND)
      console.log(error)
    }
  }

  render() {
    // { console.log(this.state.restaurant.restaurantImages) }
    const restaurant = this.state.restaurant
    // {console.log(restaurant)}
    if (!restaurant) {
      // Render loading state or return null
      return <div>Loading...</div>;
    }
    else {
      const restaurantImages = this.state.restaurant.restaurantImages
      return (
        <div className='restaurant-detail'>
          <div className="container">
            <div className="row">
              <div className="col-md-9 content">
                <div className='intro'>
                  <div className="restaurant-image row">
                    <div className="col-md-10 main-image">
                      <img src="http://product.hstatic.net/1000275435/product/pato_optimized__1__54cb698423a84f68bed2b3fec78c1413_large.jpg" alt="" />
                    </div>
                    <div className="col-md-2 other-image">
                      <div className="other-image-item">
                        <img src="http://product.hstatic.net/1000275435/product/heo_dam_nuong_tang-min_d00ed3323bf7425784ff28fdcc2672f3_large.jpg" alt="" />
                      </div>
                      <div className="other-image-item">
                        <img src="http://product.hstatic.net/1000275435/product/140649921_107061864718695_5990799498429482866_n_b09d55226d6f4fecb505e20110fcaba3_large.jpg" alt="" />
                      </div>
                      <div className="other-image-item">
                        <img src="http://product.hstatic.net/1000275435/product/pato_optimized__1__54cb698423a84f68bed2b3fec78c1413_large.jpg" alt="" />
                      </div>
                      <div className="other-image-item">
                        <div className="text-centered">Xem thêm</div>
                        <div className='photo-overlay'></div>
                        <img src="http://product.hstatic.net/1000275435/product/111256382_2975506359243019_6241437114968695561_o_d985b96d0d72408aa0cbd9490fa1e246_large.jpg" alt="" />
                      </div>
                    </div>
                  </div>

                  {/* <div  className="restaurant-image row">
                    {restaurantImages && restaurantImages.length > 0 ? (
                      <div className="image-container">
                        {restaurantImages.map((image) => (
                          <img src={image.url} alt="" key={image.id} />
                        ))}
                      </div>
                    ) : (
                      <div>No images available</div>
                    )}
                  </div> */}


                  <div className="intro-text">
                    <h3>{this.state.restaurant.name}</h3>
                    <div className="location">
                      <span className='icon-location'>
                        <FontAwesomeIcon icon={faLocationDot} />
                      </span>
                      , P.Trúc Bạch, Hà Nội
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
                    <strong>* Không gian: </strong> Sức chứa tối đa {this.state.restaurant.capacity} khách&nbsp;
                  </p>
                  <p>
                    <strong>* Món ăn đặc sắc:</strong> {this.state.restaurant.specialDishes}
                  </p>
                  <p>
                    <strong>* Giới thiệu chung:&nbsp;</strong>
                  </p>
                  <p>
                    {this.state.restaurant.introduction}
                  </p>
                  <p><strong>* Lưu ý:</strong></p>
                  <p>{this.state.restaurant.note}</p>
                </div>
                <div className="menu">
                  <SlideShow />
                </div>
                <div className="map">
                  <Map />
                </div>
              </div>
              <div className="col-md-3 extra-info">
                <div className="reservation">
                  <h4>{this.state.restaurant.name}</h4>
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
                          <span style={{ marginRight: "5px" }}> <AiOutlineCar /></span>
                          Chỗ đỗ xe
                        </div>
                        <div className="adding-info-item">
                          <span style={{ marginRight: "5px" }}><MdOutlineMeetingRoom /></span>
                          Phòng riêng
                        </div>
                        <div className="adding-info-item">
                          <span style={{ marginRight: "5px" }}><BsReceipt /></span>
                          Có xuất hóa đơn
                        </div>
                        <div className="adding-info-item">
                          <span style={{ marginRight: "5px" }}><TbMicrophone2 /></span>
                          Karaoke
                        </div>
                        <div className="adding-info-item">
                          <span style={{ marginRight: "5px" }}><AiOutlineFundProjectionScreen /></span>
                          Màn chiếu
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="adding-info-item">
                          <span style={{ marginRight: "5px" }}><AiOutlineWifi /></span>
                          Wifi
                        </div>
                        <div className="adding-info-item">
                          <span style={{ marginRight: "5px" }}><AiOutlineCreditCard /></span>
                          Thanh toán thẻ
                        </div>
                        <div className="adding-info-item">
                          <span style={{ marginRight: "5px" }}><HiOutlineCake /></span>
                          Trang trí sự kiện
                        </div>
                        <div className="adding-info-item">
                          <span style={{ marginRight: "5px" }}><MdOutlineTableBar /></span>
                          Bàn ngoài trời
                        </div>
                        <div className="adding-info-item">
                          <span style={{ marginRight: "5px" }}><GiKidSlide /></span>
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
}

export default withRouter(RestaurantDetail)