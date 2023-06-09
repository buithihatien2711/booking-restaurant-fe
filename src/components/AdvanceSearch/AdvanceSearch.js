import React, { Component } from "react";
import "./AdvanceSearch.scss";
import Select from "../Forms/Select/Select";
import {
  handleGetCuisinesApi,
  handleGetServicesApi,
  handleGetCitiesApi,
  handleGetDistrictsApi,
} from "../../services/restaurantService";
import { withRouter } from "../../hoc/withRouter"

class AdvanceSearch extends Component {
  state = {
    cuisines: [],
    services: [],
    cities: [],
    districts: [],
    // citySelected: 0
    citySelected: "",
    districtSelected: "",
    cuisineSelected: "",
    priceSelected: "",
    serviceSelected: "",
  };

  async componentDidMount() {
    // console.log('>>> cuisine: ', res)
    try {
      var res = await handleGetCuisinesApi();
      console.log("cuisine: ", res);
      this.setState({
        cuisines: res && res.data && res.data.data ? res.data.data : [],
      });
    } catch (error) {
      console.log(error);
    }

    try {
      var res = await handleGetServicesApi();
      console.log("service: ", res);
      this.setState({
        services: res && res.data && res.data.data ? res.data.data : [],
      });
    } catch (error) {
      console.log(error);
    }

    try {
      var res = await handleGetCitiesApi();
      console.log("cities: ", res);
      this.setState({
        cities: res && res.data && res.data.data ? res.data.data : [],
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleSelectChange = async (selectedValue) => {
    // Do something with the selected value
    console.log("handleSelectChange: ", selectedValue);
    this.setState({
      citySelected: selectedValue,
    });
    try {
      let id = selectedValue;
      var res = await handleGetDistrictsApi(id);
      console.log(res.data);
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

  handleSelectDistrictChange = (selectedValue) => {
    this.setState({
      districtSelected: selectedValue,
    });
  };

  handleSelectPriceChange = (selectedValue) => {
    this.setState({
      priceSelected: selectedValue,
    });
  };

  handleSelectCuisineChange = (selectedValue) => {
    this.setState({
      cuisineSelected: selectedValue,
    });
  };

  handleSelectServiceChange = (selectedValue) => {
    this.setState({
      serviceSelected: selectedValue,
    });
  };

  handleAdvanceSearch = () => {
    const {
      citySelected,
      districtSelected,
      cuisineSelected,
      priceSelected,
      serviceSelected,
    } = this.state;

    // Build the query string with the selected values
    const queryString = new URLSearchParams({
      city: citySelected,
      district: districtSelected,
      priceRange: priceSelected,
      cuisine: cuisineSelected,
      service: serviceSelected,
    }).toString();

    // Redirect to the new page with the query string
    // this.props.history.push(`/restaurants/search?${queryString}`);
    this.props.navigate(`/restaurants/search?${queryString}`)
    // history.push(`/search?${search}`);
    // this.props.navigate(`/restaurants/${this.state.cuisineSelected}/${this.state.districtSelected}/${this.state.priceSelected}/${this.state.cuisineSelected}/${this.state.serviceSelected}`)
  };

  render() {
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
    return (
      <>
        <div className="search">
          <div className="container title-container">
            <div className="title">Tìm kiếm nâng cao</div>
            <div className="description">
              Tìm kiếm nhà hàng phù hợp với nhu cầu của bạn
            </div>
            <div className="line"></div>
          </div>
          <div className="container">
            {/* <div className="content"> */}
            <div className="row content">
              <div className="option-advance-1 col-md-2">
                {/* <select name="" id="">
                  <option value="city">Tỉnh/Thành</option>
                </select> */}
                <Select
                  data={cities}
                  defaultValue={"Tỉnh thành"}
                  onChange={this.handleSelectChange}
                />
              </div>
              <div className="option-advance-2 col-md-2">
                <Select
                  data={districts}
                  defaultValue={"Quận huyện"}
                  onChange={this.handleSelectDistrictChange}
                />
              </div>
              <div className="option-advance-3 col-md-2">
                <Select
                  data={priceRange}
                  defaultValue={"Khoảng giá"}
                  onChange={this.handleSelectPriceChange}
                />
              </div>
              <div className="option-advance-4 col-md-2">
                <Select
                  data={cuisines}
                  defaultValue={"Loại hình ẩm thực"}
                  onChange={this.handleSelectCuisineChange}
                />
              </div>
              <div className="option-advance-5 col-md-2">
                <Select
                  data={services}
                  defaultValue={"Loại hình phục vụ"}
                  onChange={this.handleSelectServiceChange}
                />
              </div>
              <div className="search-btn col-md-2">
                <button
                  className="advance-search-btn"
                  onClick={() => this.handleAdvanceSearch()}
                >
                  Tìm kiếm nhanh
                </button>
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </>
    );
  }
}

export default withRouter(AdvanceSearch);
