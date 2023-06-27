import React, { Component } from "react";
import "./RestaurantRegister.scss";
import Select from "../../../components/Forms/Select/Select";
import UploadImage from "../../../components/UploadImage/UploadImage";
import {
  handleGetCuisinesApi,
  handleGetServicesApi,
  handleGetCitiesApi,
  handleGetDistrictsApi,
  handleGetSuitabilitiesApi,
  handleGetExtraServicesApi,
  handleGetWardsApi,
  handleUploadImage,
  handleAddRestaurant,
} from "../../../services/restaurantService";
import { BsDashLg } from "react-icons/bs";
import Loading from "../../../components/Loading/Loading";
import { toast } from "react-toastify";
import jwt_decode from "jwt-decode";
import { withRouter } from "../../../hoc/withRouter";
import { path } from "../../../utils/constant";
import OwnerRegister from "./OwnerRegister";

export class RestaurantRegister extends Component {
  state = {
    name: "",
    phone: "",
    priceRange: "",
    capacity: 0,
    specialDish: "",
    introduction: "",
    cuisines: [],
    cuisineSelected: [],
    services: [],
    serviceSelected: [],
    cities: [],
    city: "",
    districts: [],
    district: "",
    wards: [],
    ward: "",
    address: "",
    suitabilities: [],
    suitabilitySelected: [],
    extraServices: [],
    extraServiceSelected: [],
    restaurantImage: [],
    menuImage: [],
    // menuImageURLs: [],
    // restaurantImageURLs: [],
    businessHours: [],
    selectedObjects: [],
    msgName: "",
    msgPhone: "",
    msgPrice: "",
    msgCapacity: "",
    msgSpecialDishes: "",
    msgIntroduction: "",
    msgNote: "",
    msgRestaurantImg: "",
    msgCuisine: "",
    msgService: "",
    msgSuitability: "",
    msgCity: "",
    msgDistrict: "",
    msgWard: "",
    msgAddress: "",
    msgExtraService: "",
    msgBusinessHour: "",
    msgMenuImg: "",
    isLoading: false,
    idUser: "",
  };

  // handleImageUpload = (images) => {
  //     // Handle the list of images in the parent component
  //     // console.log(images); // Do whatever you need with the images
  //     this.props.UploadImage
  // };

  async componentDidMount() {
    let token = localStorage.ownerToken;
    if (token) {
      var decoded = jwt_decode(token);
      if (decoded.sub) {
        this.setState({
          idUser: decoded.sub,
        });
      }
    }

    try {
      var res = await handleGetCuisinesApi();
      // console.log("cuisine: ", res);
      this.setState({
        cuisines: res && res.data && res.data.data ? res.data.data : [],
      });
    } catch (error) {
      console.log(error);
    }

    try {
      var res = await handleGetServicesApi();
      // console.log("service: ", res);
      this.setState({
        services: res && res.data && res.data.data ? res.data.data : [],
      });
    } catch (error) {
      console.log(error);
    }

    try {
      var res = await handleGetCitiesApi();
      // console.log("cities: ", res);
      this.setState({
        cities: res && res.data && res.data.data ? res.data.data : [],
      });
    } catch (error) {
      console.log(error);
    }

    try {
      var res = await handleGetSuitabilitiesApi();
      // console.log("suitabilities: ", res);
      this.setState({
        suitabilities: res && res.data && res.data.data ? res.data.data : [],
      });
    } catch (error) {
      console.log(error);
    }

    try {
      var res = await handleGetExtraServicesApi();
      //   console.log("suitabilities: ", res);
      this.setState({
        extraServices: res && res.data && res.data.data ? res.data.data : [],
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleImageUpload = (images, imageType) => {
    if (imageType === "restaurant") {
      this.setState({ restaurantImage: images });
    } else if (imageType === "menu") {
      this.setState({ menuImage: images });
    }
    // Additional processing or logic based on image type
  };

  handleOnChangeInput = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSelectPriceChange = (selectedValue) => {
    this.setState({
      priceRange: selectedValue,
    });
  };

  handleSelectCityChange = async (selectedValue) => {
    try {
      let id = selectedValue;
      this.setState({
        city: id,
      });
      var res = await handleGetDistrictsApi(id);
      //   console.log(res.data)
      this.setState({
        districts: res && res.data ? res.data.data : [],
      });
    } catch (error) {
      console.log(error);
      this.setState({
        districts: [],
      });
    }
  };

  handleSelectDistrictChange = async (selectedValue) => {
    try {
      let id = selectedValue;
      this.setState({
        district: id,
      });
      var res = await handleGetWardsApi(id);
      console.log(res.data);
      this.setState({
        wards: res && res.data ? res.data.data : [],
      });
    } catch (error) {
      console.log(error);
      this.setState({
        wards: [],
      });
    }
  };

  handleSelectWardChange = (selectedValue) => {
    this.setState({
      ward: selectedValue,
    });
  };

  handleCheckboxChange = (event, type) => {
    if (type === "cuisine") {
      const { value, checked } = event.target;
      const { cuisineSelected } = this.state;
      console.log(event.target.value);

      // Update selectedCuisines based on checkbox changes
      if (checked) {
        this.setState({ cuisineSelected: [...cuisineSelected, value] });
      } else {
        const updatedCuisines = cuisineSelected.filter(
          (cuisineId) => cuisineId !== value
        );
        this.setState({ cuisineSelected: updatedCuisines });
      }
    }

    if (type === "service") {
      const { value, checked } = event.target;
      const { serviceSelected } = this.state;
      console.log(event.target.value);

      // Update selectedCuisines based on checkbox changes
      if (checked) {
        this.setState({ serviceSelected: [...serviceSelected, value] });
      } else {
        const updatedServices = serviceSelected.filter((id) => id !== value);
        this.setState({ serviceSelected: updatedServices });
      }
    }

    if (type === "suitability") {
      const { value, checked } = event.target;
      const { suitabilitySelected } = this.state;
      console.log(event.target.value);

      // Update selectedCuisines based on checkbox changes
      if (checked) {
        this.setState({ suitabilitySelected: [...suitabilitySelected, value] });
      } else {
        const updatedSuitability = suitabilitySelected.filter(
          (id) => id !== value
        );
        this.setState({ suitabilitySelected: updatedSuitability });
      }
    }

    if (type === "extraService") {
      const { value, checked } = event.target;
      const { extraServiceSelected } = this.state;
      console.log(this.state.extraServices);

      // Update selectedCuisines based on checkbox changes
      if (checked) {
        this.setState({
          extraServiceSelected: [...extraServiceSelected, value],
        });
      } else {
        const updatedExtraService = extraServiceSelected.filter(
          (id) => id !== value
        );
        this.setState({ extraServiceSelected: updatedExtraService });
      }
    }
  };

  handleSelectChange = (value, dateId, type) => {
    // console.log(value)
    const selectedObject = {
      dateId: dateId,
      value: value,
      type: type,
    };

    const index = this.state.selectedObjects.findIndex(
      (obj) => obj.dateId === dateId && obj.type === type
    );

    if (index !== -1) {
      // Update
      const updatedObjects = [...this.state.selectedObjects];
      updatedObjects[index].value = value;
      this.setState({
        selectedObjects: updatedObjects,
      });
    } else {
      // Add
      let selectedObjectCopy = this.state.selectedObjects;
      this.setState({
        selectedObjects: [...selectedObjectCopy, selectedObject],
      });
    }
  };

  // Check if array has start and end time
  validateArray(array) {
    for (let i = 0; i < array.length; i++) {
      const item = array[i];

      if (!item.hasOwnProperty("start") || !item.hasOwnProperty("end")) {
        return false;
      }
      return true;
    }
  }

  validateStartEndTime(arr) {
    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];
      const startTime = item.start.split(":");
      const endTime = item.end.split(":");

      const startHour = parseInt(startTime[0], 10);
      const startMinute = parseInt(startTime[1], 10);

      const endHour = parseInt(endTime[0], 10);
      const endMinute = parseInt(endTime[1], 10);

      // Compare start and end times within a day
      if (
        endHour < startHour ||
        (endHour === startHour && endMinute <= startMinute)
      ) {
        return false;
      }
    }
    return true;
  }

  handleOnRegister = async () => {
    this.setState({
      msgName: "",
      msgPhone: "",
      msgPrice: "",
      msgCapacity: "",
      msgSpecialDishes: "",
      msgIntroduction: "",
      msgNote: "",
      msgRestaurantImg: "",
      msgCuisine: "",
      msgService: "",
      msgSuitability: "",
      msgCity: "",
      msgDistrict: "",
      msgWard: "",
      msgAddress: "",
      msgExtraService: "",
      msgBusinessHour: "",
      msgMenuImg: "",
    });
    if (!this.state.name) {
      this.setState({
        msgName: "Không được để trống tên",
      });
    }
    if (!this.state.phone) {
      this.setState({
        msgPhone: "Không được để trống số điện thoại",
      });
    }
    if (!this.state.priceRange || this.state.city === "default") {
      this.setState({
        msgPrice: "Vui lòng chọn mức giá",
      });
    }
    if (this.state.capacity === 0) {
      this.setState({
        msgCapacity: "Sức chứa phải lớn hơn 0",
      });
    }
    if (!this.state.specialDish) {
      this.setState({
        msgSpecialDishes: "Không được để trống món đặc sắc",
      });
    }
    if (!this.state.introduction) {
      this.setState({
        msgIntroduction: "Không được để trống giới thiệu nhà hàng",
      });
    }
    if (this.state.restaurantImage.length === 0) {
      this.setState({
        msgRestaurantImg: "Phải tải lên ít nhất 1 ảnh nhà hàng",
      });
    }
    if (this.state.cuisineSelected.length === 0) {
      this.setState({
        msgCuisine: "Phải chọn ít nhất 1 loại hình ẩm thực",
      });
    }
    if (this.state.serviceSelected.length === 0) {
      this.setState({
        msgService: "Phải chọn ít nhất 1 loại hình dịch vụ",
      });
    }
    if (this.state.suitabilitySelected.length === 0) {
      this.setState({
        msgSuitability: "Phải chọn ít nhất 1 đối tượng phù hợp",
      });
    }
    if (!this.state.city || this.state.city === "default") {
      this.setState({
        msgCity: "Chưa chọn tỉnh/thành phố",
      });
    }
    if (!this.state.district || this.state.district === "default") {
      this.setState({
        msgDistrict: "Chưa chọn phường/xã",
      });
    }
    if (!this.state.district || this.state.ward === "default") {
      this.setState({
        msgWard: "Chưa chọn quận/huyện",
      });
    }
    if (!this.state.address) {
      this.setState({
        msgAddress: "Không được để trống địa chỉ",
      });
    }
    const transformedData = this.state.selectedObjects.reduce(
      (result, item) => {
        const { dateId, type, value } = item;
        // Find the corresponding object in the result array
        const existingObjIndex = result.findIndex((obj) => obj.date === dateId);

        if (existingObjIndex !== -1) {
          result[existingObjIndex][type] = value;
        } else {
          const newObj = {
            date: dateId,
            [type]: value,
          };
          result.push(newObj);
        }
        return result;
      },
      []
    );
    console.log(transformedData);

    this.setState({
      businessHours: transformedData,
    });

    if (
      transformedData.length !== 7 ||
      transformedData.findIndex((obj) => obj.start === "default") !== -1 ||
      transformedData.findIndex((obj) => obj.end === "default") !== -1 ||
      !this.validateArray(transformedData)
    ) {
      // alert('Nhập đầy đủ thông tin')
      this.setState({
        msgBusinessHour: "Vui lòng chọn đầy đủ giờ hoạt động",
      });
    } else {
      if (!this.validateStartEndTime(transformedData)) {
        // alert('thời gian bắt đầu phải sớm hơn thời gian kết thúc')
        this.setState({
          msgBusinessHour: "Thời gian mở phải sớm hơn thời gian đóng cửa",
        });
      }
    }
    if (this.state.menuImage.length === 0) {
      this.setState({
        msgMenuImg: "Phải tải lên ít nhất 1 ảnh menu nhà hàng",
      });
    }

    this.setState({
      isLoading: true,
    });

    try {
      const menuImages = this.state.menuImage;
      var formDataMenu = new FormData();
      if (menuImages) {
        for (let i = 0; i < menuImages.length; i++) {
          formDataMenu.append("images", menuImages[i]);
        }
      }

      let res = await handleUploadImage(
        this.state.idUser,
        "menuImage",
        formDataMenu
      );
      const menuImageURLs =
        res && res.data && res.data.data ? res.data.data : [];
      // console.log(res)

      const restaurantImages = this.state.restaurantImage;
      var formDataRestaurant = new FormData();
      if (restaurantImages) {
        for (let i = 0; i < restaurantImages.length; i++) {
          formDataRestaurant.append("images", restaurantImages[i]);
        }
      }
      let resRestaurant = await handleUploadImage(
        this.state.idUser,
        "restaurantImage",
        formDataRestaurant
      );
      const restaurantImageURLs =
        resRestaurant && resRestaurant.data && resRestaurant.data.data
          ? resRestaurant.data.data
          : [];
      console.log(resRestaurant);

      const restaurant = {
        name: this.state.name,
        phone: this.state.phone,
        priceRange: Number(this.state.priceRange),
        capacity: this.state.capacity,
        specialDishes: this.state.specialDish,
        introduction: this.state.introduction,
        note: this.state.note,
        restaurantImages: restaurantImageURLs,
        cuisines: this.state.cuisineSelected,
        services: this.state.serviceSelected,
        suitabilities: this.state.suitabilitySelected,
        address: this.state.address,
        ward: this.state.ward,
        extraService: this.state.extraServiceSelected,
        businessHours: this.state.businessHours,
        menuImages: menuImageURLs,
      };
      console.log(this.state.businessHours);
      console.log(restaurant);
      let resAddRestaurant = await handleAddRestaurant(
        this.state.idUser,
        restaurant
      );
      console.log(resAddRestaurant);

      this.setState({
        isLoading: false,
      });
      toast.success(
        "Tạo nhà hàng thành công, chúng tôi sẽ liên hệ bạn và xác nhận"
      );
      this.props.navigate(path.HOMEOWNER);
      window.location.reload()
    } catch (error) {
      // console.log(error);
      this.setState({
        isLoading: false,
      });

      toast.error("Tạo nhà hàng thất bại, vui lòng kiểm tra lại thông tin");
    }
  };

  render() {
    // console.log(this.state.cuisineSelected);
    const priceRange = [
      { id: 1, name: "Dưới 200.000vnd" },
      { id: 2, name: "Từ 200.000vnd đến 300.000vnd" },
      { id: 3, name: "Từ 300.000vnd đến 400.000vnd" },
      { id: 4, name: "Từ 400.000vnd đến 500.000" },
      { id: 5, name: "Trên 500.000vnd" },
    ];
    const cuisines = this.state.cuisines;
    const services = this.state.services;
    // const cities = []
    // const districts = []
    const cities = this.state.cities;
    const districts = this.state.districts;
    const wards = this.state.wards;
    const suitabilities = this.state.suitabilities;
    const extraServices = this.state.extraServices;
    let hours = [];
    for (let i = 0; i < 48; i++) {
      let hour = `${Math.floor(i / 2)}`.padStart(2, "0");
      let minute = i % 2 === 0 ? "00" : "30";
      let time = { id: `${hour}:${minute}`, name: `${hour} : ${minute}` };
      hours.push(time);
    }

    const dateOfWeeks = [
      { id: 0, name: "Thứ hai" },
      { id: 1, name: "Thứ ba" },
      { id: 2, name: "Thứ tư" },
      { id: 3, name: "Thứ năm" },
      { id: 4, name: "Thứ sáu" },
      { id: 5, name: "Thứ bảy" },
      { id: 6, name: "Chủ nhật" },
    ];

    return (
      <>
        {!this.state.idUser ? (
          <OwnerRegister />
        ) : (
          <>
            {this.state.isLoading && <Loading />}
            <div className="restaurant-register">
              <div className="restaurant-register-form">
                <div className="title row">
                  <div className="col-md-12">Đăng kí nhà hàng</div>
                </div>
                <div className="content">
                  <div className="name">
                    <div className="row row-msg">
                      <div className="col-md-3"></div>
                      <div className="col-md-9">
                        <div className="message">{this.state.msgName}</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">Tên nhà hàng</div>
                      <div className="col-md-9">
                        <input
                          type="text"
                          name="name"
                          value={this.state.name}
                          onChange={(event) => this.handleOnChangeInput(event)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="phone">
                    <div className="row row-msg">
                      <div className="col-md-3"></div>
                      <div className="col-md-9">
                        <div className="message">{this.state.msgPhone}</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">Số điện thoại nhà hàng</div>
                      <div className="col-md-9">
                        <input
                          type="text"
                          name="phone"
                          value={this.state.phone}
                          onChange={(event) => this.handleOnChangeInput(event)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="price-range">
                    <div className="row row-msg">
                      <div className="col-md-3"></div>
                      <div className="col-md-9">
                        <div className="message">{this.state.msgPrice}</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">Mức giá</div>
                      <div className="col-md-9">
                        <Select
                          data={priceRange}
                          defaultValue="Chọn mức giá"
                          onChange={this.handleSelectPriceChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="capacity">
                    <div className="row row-msg">
                      <div className="col-md-3"></div>
                      <div className="col-md-9">
                        <div className="message">{this.state.msgCapacity}</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">Sức chứa</div>
                      <div className="col-md-9">
                        <input
                          type="number"
                          name="capacity"
                          value={this.state.capacity}
                          onChange={(event) => this.handleOnChangeInput(event)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="special-dish">
                    <div className="row row-msg">
                      <div className="col-md-3"></div>
                      <div className="col-md-9">
                        <div className="message">
                          {this.state.msgSpecialDishes}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">Món đặc sắc</div>
                      <div className="col-md-9">
                        <textarea
                          name="specialDish"
                          value={this.state.specialDish}
                          onChange={(event) => this.handleOnChangeInput(event)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="introduction">
                    <div className="row row-msg">
                      <div className="col-md-3"></div>
                      <div className="col-md-9">
                        <div className="message">
                          {this.state.msgIntroduction}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">Giới thiệu nhà hàng</div>
                      <div className="col-md-9">
                        <textarea
                          name="introduction"
                          value={this.state.introduction}
                          onChange={(event) => this.handleOnChangeInput(event)}
                        ></textarea>
                      </div>
                    </div>
                  </div>
                  <div className="note row">
                    {/* <div className="message">
                                {this.state.msgNote}
                            </div> */}
                    <div className="col-md-3">Chú ý</div>
                    <div className="col-md-9">
                      <textarea
                        name="note"
                        value={this.state.value}
                        onChange={(event) => this.handleOnChangeInput(event)}
                      ></textarea>
                    </div>
                  </div>
                  <div className="restaurant-image">
                    <div className="row row-msg">
                      <div className="col-md-3"></div>
                      <div className="col-md-9">
                        <div className="message">
                          {this.state.msgRestaurantImg}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">Ảnh nhà hàng</div>
                      <div className="col-md-9">
                        {/* <input type="text" /> */}
                        <UploadImage
                          name="restaurantImage"
                          // onChange={this.handleImageUpload}/>
                          onChange={(images) =>
                            this.handleImageUpload(images, "restaurant")
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="cuisine">
                    <div className="row row-msg">
                      <div className="col-md-3"></div>
                      <div className="col-md-9">
                        <div className="message">{this.state.msgCuisine}</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">Loại hình ẩm thực</div>
                      <div className="col-md-9 checkbox-container">
                        {cuisines.map((cuisine) => (
                          <label>
                            <input
                              className="checkbox-custom"
                              type="checkbox"
                              value={cuisine.id}
                              checked={this.state.cuisineSelected.includes(
                                cuisine.id.toString()
                              )}
                              onChange={(event) =>
                                this.handleCheckboxChange(event, "cuisine")
                              }
                            />
                            <div className="icon-box">
                              <span>{cuisine.name}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="service">
                    <div className="row row-msg">
                      <div className="col-md-3"></div>
                      <div className="col-md-9">
                        <div className="message">{this.state.msgService}</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">Loại hình dịch vụ</div>
                      <div className="col-md-9 checkbox-container">
                        {/* <Select defaultValue='Loại hình ẩm thực' data={cuisines} /> */}
                        {services.map((service) => (
                          <label>
                            <input
                              className="checkbox-custom"
                              type="checkbox"
                              value={service.id}
                              checked={this.state.serviceSelected.includes(
                                service.id.toString()
                              )}
                              onChange={(event) =>
                                this.handleCheckboxChange(event, "service")
                              }
                            />
                            <div className="icon-box">
                              <span>{service.name}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="suitability">
                    <div className="row row-msg">
                      <div className="col-md-3"></div>
                      <div className="col-md-9">
                        <div className="message">
                          {this.state.msgSuitability}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">Phù hợp với</div>
                      <div className="col-md-9 checkbox-container">
                        {/* <Select defaultValue='Loại hình ẩm thực' data={cuisines} /> */}
                        {suitabilities.map((suitability) => (
                          <label>
                            <input
                              className="checkbox-custom"
                              type="checkbox"
                              value={suitability.id}
                              checked={this.state.suitabilitySelected.includes(
                                suitability.id.toString()
                              )}
                              onChange={(event) =>
                                this.handleCheckboxChange(event, "suitability")
                              }
                            />
                            <div className="icon-box">
                              <span>{suitability.name}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="city">
                    <div className="row row-msg">
                      <div className="col-md-3"></div>
                      <div className="col-md-9">
                        <div className="message">{this.state.msgCity}</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">Thành phố</div>
                      <div className="col-md-9">
                        <Select
                          defaultValue="Chọn thành phố"
                          data={cities}
                          onChange={this.handleSelectCityChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="district">
                    <div className="row row-msg">
                      <div className="col-md-3"></div>
                      <div className="col-md-9">
                        <div className="message">{this.state.msgDistrict}</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">Chọn quận</div>
                      <div className="col-md-9">
                        <Select
                          defaultValue="Chọn quận"
                          data={districts}
                          onChange={this.handleSelectDistrictChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="ward">
                    <div className="row row-msg">
                      <div className="col-md-3"></div>
                      <div className="col-md-9">
                        <div className="message">{this.state.msgWard}</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">Chọn phường</div>
                      <div className="col-md-9">
                        <Select
                          defaultValue="Chọn phường"
                          data={wards}
                          onChange={this.handleSelectWardChange}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="address">
                    <div className="row row-msg">
                      <div className="col-md-3"></div>
                      <div className="col-md-9">
                        <div className="message">{this.state.msgAddress}</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">Địa chỉ</div>
                      <div className="col-md-9">
                        <input
                          type="text"
                          name="address"
                          value={this.state.address}
                          onChange={(event) => this.handleOnChangeInput(event)}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="extra-service">
                    <div className="row row-msg">
                      <div className="col-md-3"></div>
                      <div className="col-md-9">
                        <div className="message">
                          {this.state.msgExtraService}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">Dịch vụ thêm</div>
                      <div className="col-md-9 checkbox-container">
                        {/* <Select defaultValue='Loại hình ẩm thực' data={cuisines} /> */}
                        {extraServices.map((extraService) => (
                          <label>
                            <input
                              className="checkbox-custom"
                              type="checkbox"
                              value={extraService.id}
                              checked={this.state.extraServiceSelected.includes(
                                extraService.id.toString()
                              )}
                              onChange={(event) =>
                                this.handleCheckboxChange(event, "extraService")
                              }
                            />
                            <div className="icon-box">
                              <span>{extraService.name}</span>
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="business-hour">
                    <div className="row row-msg">
                      <div className="col-md-3"></div>
                      <div className="col-md-9">
                        <div className="message">
                          {this.state.msgBusinessHour}
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-2">Giờ hoạt động</div>
                      <div className="col-md-10 business-hours-container">
                        {/* <input type="text" /> */}
                        <div className="row" style={{ width: "100%" }}>
                          {dateOfWeeks.map((date) => (
                            <div className="col-md-4">
                              <div className="date">
                                <span className="text">{date.name}</span>
                                <Select
                                  data={hours}
                                  defaultValue="Chọn giờ"
                                  onChange={(value) =>
                                    this.handleSelectChange(
                                      value,
                                      date.id,
                                      "openTime"
                                    )
                                  }
                                />
                                <span
                                  style={{ marginRight: "5px" }}
                                  className="icon-container"
                                >
                                  <BsDashLg className="icon" />
                                </span>
                                <Select
                                  data={hours}
                                  defaultValue="Chọn giờ"
                                  onChange={(value) =>
                                    this.handleSelectChange(
                                      value,
                                      date.id,
                                      "closeTime"
                                    )
                                  }
                                />
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="menu-image">
                    <div className="row row-msg">
                      <div className="col-md-3"></div>
                      <div className="col-md-9">
                        <div className="message">{this.state.msgMenuImg}</div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-3">Ảnh menu</div>
                      <div className="col-md-9">
                        <UploadImage
                          name="menuImage"
                          // onChange={this.handleImageUpload}
                          onChange={(images) =>
                            this.handleImageUpload(images, "menu")
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="register-btn-container">
                    <button
                      className="btn-register"
                      onClick={() => this.handleOnRegister()}
                    >
                      Đăng kí
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default withRouter(RestaurantRegister);
