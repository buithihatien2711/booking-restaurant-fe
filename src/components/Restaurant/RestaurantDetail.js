import React, { Component } from "react";
import SlideShow from "../SlideShow/SlideShow";
import "./RestaurantDetail.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faL, faLocationDot } from "@fortawesome/free-solid-svg-icons";
import Map from "../Map/Map";
import { TbMicrophone2 } from "react-icons/tb";
import {
  AiOutlineCar,
  AiOutlineFundProjectionScreen,
  AiOutlineWifi,
  AiOutlineCreditCard,
} from "react-icons/ai";
import { BsReceipt } from "react-icons/bs";
import { HiOutlineCake } from "react-icons/hi";
import { MdOutlineTableBar, MdOutlineMeetingRoom } from "react-icons/md";
import { GiKidSlide } from "react-icons/gi";
import { handleGetRestaurantDetailApi } from "../../services/restaurantService";
import { withRouter } from "../../hoc/withRouter";
import { path } from "../../utils/constant";
import { GrLocation } from "react-icons/gr";
import Reservation from "../Reservation/Reservation";
import Login from "../../containers/Auth/UserLogin/Login";

class RestaurantDetail extends Component {
  state = {
    restaurant: {},
    businessHours: [],
    setIsReservationVisible: false,
    setIsLoginVisible: false,
    isLogin: false,
    
  };
  
  async componentDidMount() {
    window.scrollTo(0, 0);
    // let id = "e5ade534-0a32-40f1-9187-00cab120bb23"; // Get from url
    // let id = '093111eb-f7df-45b5-b726-15ab5f4bf139'
    // console.log('restaurant detail: ', this.props)
    if (this.props.params && this.props.params.id) {
      // console.log('restaurant detail: ', this.props)
      let id = this.props.params.id
      try {
        let res = await handleGetRestaurantDetailApi(id);
        // console.log(res.data.data)
        this.setState({
          restaurant: res && res.data && res.data.data ? res.data.data : null,
        });
      } catch (error) {
        this.props.navigate(path.NOTFOUND)
        // console.log(error);
      }
    }
    if(localStorage.getItem("userToken")){
      this.setState({
        isLogin: true
      })
    }
  }

  onOpenReserve = () => {
    // alert('onclick reserve');
    if(this.state.isLogin){
      this.setState({
        setIsReservationVisible: true,
      });
    }
    else {
      this.setState({
        setIsLoginVisible: true,
      })
    }

  };

  onCloseReserve = () => {
    this.setState({
      setIsReservationVisible: false,
    });
  };

  onCloseLoginForm = () => {
    this.setState({
      setIsLoginVisible: false
    })
  }

  render() {
    const restaurant = this.state.restaurant;
    // {console.log(restaurant)}
    if (!restaurant) {
      // Render loading state or return null
      return <div>Loading...</div>;
    } else {
      // console.log(restaurant);
      const restaurantImages = this.state.restaurant.restaurantImages;
      const daysOfWeek = [
        "Thứ hai",
        "Thứ ba",
        "Thứ tư",
        "Thứ năm",
        "Thứ sáu",
        "Thứ bảy",
        "Chủ nhật",
      ];
      const extraServiceDefaults = [
        { id: 1, name: "Chỗ để xe" },
        { id: 2, name: "Phòng riêng" },
        { id: 3, name: "Có xuất hóa đơn" },
        { id: 4, name: "Karaoke" },
        { id: 5, name: "Màn chiếu" },
        { id: 6, name: "Wifi" },
        { id: 7, name: "Thanh toán thẻ" },
        { id: 8, name: "Trang trí sự kiện" },
        { id: 9, name: "Bàn ngoài trời" },
        { id: 10, name: "Khu vui chơi trẻ em" },
      ];
      const iconComponents = {
        1: <AiOutlineCar />,
        2: <MdOutlineMeetingRoom />,
        3: <BsReceipt />,
        4: <TbMicrophone2 />,
        5: <AiOutlineFundProjectionScreen />,
        6: <AiOutlineWifi />,
        7: <AiOutlineCreditCard />,
        8: <HiOutlineCake />,
        9: <MdOutlineTableBar />,
        10: <GiKidSlide />,
      };
      return (
        <>
          {this.state.setIsReservationVisible && (
            <div className="reserve-form">
              <Reservation onClose={() => this.onCloseReserve()} restaurantId = {this.state.restaurant.id}/>
            </div>
          )}

          {this.state.setIsLoginVisible && (
            <div className="login-form">
              <Login  onClose={() => this.onCloseLoginForm()} />
            </div>
          )}

          <div className="restaurant-detail">
            {/* {this.state.setIsReservationVisible && (
            <div className="reserve-form">
              <Reservation onClose={() => this.onCloseReserve(false)} />
            </div>
          )} */}

            <div className="container">
              <div className="row">
                <div className="col-md-9 content">
                  <div className="intro">
                    <div className="restaurant-image row">
                      {restaurantImages && restaurantImages.length > 0 ? (
                        <React.Fragment>
                          <div className="col-10 main-image">
                            <img src={restaurantImages[0].url} alt="" />
                          </div>
                          <div className="col-2 other-image">
                            {restaurantImages.slice(1, 4).map((image) => (
                              <div className="other-image-item" key={image.id}>
                                <img src={image.url} alt="" />
                              </div>
                            ))}
                            {restaurantImages.length > 4 && (
                              <div className="other-image-item">
                                <div className="text-centered">Xem thêm</div>
                                <div className="photo-overlay"></div>
                                <img src={restaurantImages[4].url} alt="" />
                              </div>
                            )}
                          </div>
                        </React.Fragment>
                      ) : (
                        <div>No images available</div>
                      )}
                    </div>

                    <div className="intro-text">
                      <h3>{this.state.restaurant.name}</h3>
                      <div className="location">
                        <span className="icon-location">
                          {/* <FontAwesomeIcon icon={faLocationDot} /> */}
                          <GrLocation />
                        </span>
                        {restaurant.location &&
                        restaurant.location.address &&
                        restaurant.ward &&
                        restaurant.ward.name &&
                        restaurant.district &&
                        restaurant.district.name &&
                        restaurant.city &&
                        restaurant.city.name ? (
                          <>
                            {restaurant.location.address},{" "}
                            {restaurant.ward.name},{" "}
                            {restaurant.district.name},{" "}
                            {restaurant.city.name}
                          </>
                        ) : (
                          <></>
                        )}
                        <div className="line"></div>
                      </div>
                      <div className="tag">
                        {restaurant && restaurant.services ? (
                          <>
                            {restaurant.services.map((service, index) => (
                              <div className="tag-item" key={service.id}>
                                <a href={`/collection/cuisine/${service.id}`}>
                                  {service.name}
                                </a>
                              </div>
                            ))}
                          </>
                        ) : (
                          <></>
                        )}
                        {restaurant && restaurant.cuisines ? (
                          <>
                            {restaurant.cuisines.map((cuisine, index) => (
                              <div className="tag-item" key={cuisine.id}>
                                <a href={`/collection/cuisine/${cuisine.id}`}>
                                  {cuisine.name}
                                </a>
                              </div>
                            ))}
                          </>
                        ) : (
                          <></>
                        )}

                        {/* <div className='tag-item'>
                          <a href="/">
                            Lẩu
                          </a>

                        </div> */}
                      </div>
                    </div>
                  </div>
                  <div className="description">
                    <p>
                      <strong>* Không gian: </strong> Sức chứa tối đa{" "}
                      {restaurant.capacity} khách&nbsp;
                    </p>
                    <p>
                      <strong>* Món ăn đặc sắc:</strong>{" "}
                      {restaurant.specialDishes}
                    </p>
                    <p>
                      <strong>* Giới thiệu chung:&nbsp;</strong>
                    </p>
                    <p>{restaurant.introduction}</p>
                    <p>
                      <strong>* Lưu ý:</strong>
                    </p>
                    <p>{restaurant.note}</p>
                  </div>
                  <div className="menu">
                    {/* {console.log('>>> restaurant detail: ', restaurant.menuImages)} */}
                    <SlideShow images={restaurant.menuImages} />
                  </div>
                  <div className="map">
                    <Map />
                  </div>
                </div>
                <div className="col-md-3 extra-info">
                  <div className="reservation">
                    <h4>{restaurant.name}</h4>
                    <div className="reservation">
                      <button
                        className="btn-reserve"
                        onClick={() => this.onOpenReserve()}
                      >
                        {" "}
                        Đặt ngay
                      </button>
                    </div>
                  </div>
                  <div className="adding-info-business-hour">
                    <div className="business-hour">
                      <h6>GIỜ HOẠT ĐỘNG</h6>
                      <ul>
                        {restaurant.businessHours &&
                        restaurant.businessHours.length > 0 ? (
                          restaurant.businessHours
                            .sort((a, b) => a.date - b.date) // Sort the businessHours array by date
                            .map((businessHour) => (
                              <li key={businessHour.id}>
                                <span className="date-of-week">
                                  {daysOfWeek[businessHour.date]}:{" "}
                                </span>{" "}
                                {businessHour.openTime.substring(0, 5)} -{" "}
                                {businessHour.closeTime.substring(0, 5)}
                              </li>
                            ))
                        ) : (
                          <div>no available business hour</div>
                        )}
                      </ul>
                    </div>
                    <div className="adding-info">
                      <h6>THÔNG TIN THÊM</h6>
                      <div className="row">
                        <div className="col-md-12">
                          {/* <div className="active">
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
                        </div> */}
                          {restaurant && restaurant.extraServices ? (
                            <>
                              {extraServiceDefaults.map(
                                (extraServiceDefault, index) => (
                                  <div
                                    className={
                                      restaurant.extraServices.some(
                                        (item) =>
                                          item.id === extraServiceDefault.id
                                      )
                                        ? "active"
                                        : "adding-info-item"
                                    }
                                    key={extraServiceDefault.id}
                                  >
                                    {/* {console.log(restaurant.extraServices.some(item => extraServiceDefault.some(obj => obj.id === item.id)))} */}
                                    <span style={{ marginRight: "5px" }}>
                                      {iconComponents[extraServiceDefault.id]}
                                    </span>
                                    {extraServiceDefault.name}
                                  </div>
                                )
                              )}
                            </>
                          ) : (
                            <></>
                          )}
                        </div>
                        {/* <div className="col-md-6">
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
                      </div> */}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    }
  }
}

export default withRouter(RestaurantDetail);
