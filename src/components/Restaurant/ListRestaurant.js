import React, { Component } from "react";
import { withRouter } from "../../hoc/withRouter";
import { handleGetRestaurantsFilter } from "../../services/restaurantService";
import RestaurantItem from "./RestaurantItem";
import NotFound from "../../containers/NotFound/NotFound";
import RestaurantItemHorizontal from "./RestaurantItemHorizontal";
import "./ListRestaurant.scss";
import Select from "../Forms/Select/Select";
import {
  handleGetCuisinesApi,
  handleGetServicesApi,
  handleGetCitiesApi,
  handleGetDistrictsApi,
  handleGetSuitabilitiesApi,
} from "../../services/restaurantService";
import { GrNext, GrPrevious } from "react-icons/gr";
import Loading from "../Loading/Loading";

export class ListRestaurant extends Component {
  state = {
    restaurants: [],
    totalPage: 0,
    city: "",
    district: "",
    price: "",
    cuisine: "",
    service: "",
    suitability: "",
    sort: "",
    cities: [],
    districts: [],
    cuisines: [],
    services: [],
    suitabilities: [],
    currentPage: 1,
    isLoading: true,
  };
  async componentDidMount() {
    // const location = useLocation();
    const searchParams = new URLSearchParams(this.props.location.search);
    // console.log(searchParams.get('city'))
    try {
      let city = searchParams.get("city") ? searchParams.get("city") : "";
      let district = searchParams.get("district")
        ? searchParams.get("district")
        : "";
      let price = searchParams.get("price") ? searchParams.get("price") : "";
      let cuisine = searchParams.get("cuisine")
        ? searchParams.get("cuisine")
        : "";
      let service = searchParams.get("service")
        ? searchParams.get("service")
        : "";
      let suitability = searchParams.get("suitability")
        ? searchParams.get("suitability")
        : "";
      let sort = searchParams.get("sort") ? searchParams.get("sort") : "";

      this.setState({
        city: city,
        district: district,
        price: price,
        cuisine: cuisine,
        service: service,
        suitability: suitability,
        sort: sort,
      });

      let res = await handleGetRestaurantsFilter(
        city,
        district,
        price,
        cuisine,
        service,
        suitability,
        sort,
        1
      );

      this.setState({
        isLoading: false
      })

      console.log(res.data.data.data);

      this.setState({
        restaurants:
          res && res.data && res.data.data && res.data.data.data
            ? res.data.data.data
            : [],
        totalPage:
          res && res.data && res.data.data && res.data.data.totalPage
            ? res.data.data.totalPage
            : 0,
      });
    } catch (error) {
      console.log(error);
    }

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

    try {
      var res = await handleGetSuitabilitiesApi();
      // console.log("cities: ", res);
      this.setState({
        suitabilities: res && res.data && res.data.data ? res.data.data : [],
      });
    } catch (error) {
      console.log(error);
    }
  }

  handleSelectFilterChange = async (selectedValue, type) => {
    if (type === 'city') {
      this.setState({
        city: selectedValue,
      })
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
    }
    if (type === 'district') {
      this.setState({
        city: selectedValue,
      })
    }
    if (type === 'cuisine') {
      this.setState({
        cuisine: selectedValue
      })
    }
    if (type === 'service') {
      this.setState({
        service : selectedValue
      })
    }
    if (type === 'price') {
      this.setState({
        price : selectedValue
      })
    }
    if (type === 'suitability') {
      this.setState({
        suitability: selectedValue
      })
    }

    this.setState({
      isLoading: true
    })
    try {
      let res = await handleGetRestaurantsFilter(
        type === 'city' ? (selectedValue === 'default' ? '' : selectedValue) : this.state.city,
        type === 'district' ? (selectedValue === 'default' ? '' : selectedValue) : this.state.district,
        type === 'price' ? (selectedValue === 'default' ? '' : selectedValue) : this.state.price,
        type === 'cuisine' ? (selectedValue === 'default' ? '' : selectedValue) : this.state.cuisine,
        type === 'service' ? (selectedValue === 'default' ? '' : selectedValue) : this.state.service,
        type === 'suitability' ? (selectedValue === 'default' ? '' : selectedValue) : this.state.suitability,
        type === 'sort' ? (selectedValue === 'default' ? '' : selectedValue) : this.state.sort,
        this.state.currentPage
      );

      this.setState({
        restaurants:
          res && res.data && res.data.data && res.data.data.data
            ? res.data.data.data
            : [],
            totalPage:
          res && res.data && res.data.data && res.data.data.totalPage
              ? res.data.data.totalPage
              : 0,
        isLoading: false
      });
      console.log(res);
    } catch (error) {
      console.log(error)
    }
  }

  handleChangePage = async (type) => {
    // console.log('next')
    this.setState({
      isLoading: true
    })
    try {
      let res = await handleGetRestaurantsFilter(
        this.state.city,
        this.state.district,
        this.state.price,
        this.state.cuisine,
        this.state.service,
        this.state.suitability,
        this.state.sort,
        type === 'next' ? this.state.currentPage + 1 : this.state.currentPage - 1
      );

      this.setState({
        restaurants:
          res && res.data && res.data.data && res.data.data.data
            ? res.data.data.data
            : [],
        currentPage: type === 'next' ? this.state.currentPage + 1 : this.state.currentPage - 1,
        isLoading: false
      });
      console.log(res);
    } catch (error) {
      console.log(error)
    }
  };

  render() {
    const restaurants = this.state.restaurants;
    const sort = [
      { id: 'popular', name: "Nhiều người đặt" },
      { id: 'price-increase', name: "Giá tăng dần" },
      { id: 'price-decrease', name: "Giá giảm dần" },
    ];
    const priceRange = [
      { id: 1, name: "Dưới 200.000vnd" },
      { id: 2, name: "Từ 200.000vnd đến 300.000vnd" },
      { id: 3, name: "Từ 300.000vnd đến 400.000vnd" },
      { id: 4, name: "Từ 400.000vnd đến 500.000" },
      { id: 5, name: "Trên 500.000vnd" },
    ];
    if (restaurants) {
      return (
        <>
          {this.state.isLoading && <Loading/>}
          <div className="list-restaurant">
            <div className="container">
              <div className="title">Tìm kiếm nhà hàng</div>
              <div className="content row">
                <div className="filter col-md-3">
                  <div className="container">
                    <div className="filter-city">
                      <Select
                        defaultValue="Tỉnh/ Thành phố"
                        data={this.state.cities}
                        onChange={(selectedValue) => this.handleSelectFilterChange(selectedValue, 'city')}
                      />
                    </div>
                    <div className="filter-district">
                      <Select
                        defaultValue="Quận/ Huyện"
                        data={this.state.districts}
                        onChange={(selectedValue) => this.handleSelectFilterChange(selectedValue, 'district')}
                      />
                    </div>
                    <div className="cuisine">
                      <Select
                        defaultValue="Loại hình ẩm thực"
                        data={this.state.cuisines}
                        onChange={(selectedValue) => this.handleSelectFilterChange(selectedValue, 'cuisine')}
                      />
                    </div>
                    <div className="service">
                      <Select
                        defaultValue="Loại hình phục vụ"
                        data={this.state.services}
                        onChange={(selectedValue) => this.handleSelectFilterChange(selectedValue, 'service')}
                      />
                    </div>
                    <div className="price-range">
                      <Select
                        defaultValue="Khoảng giá"
                        data={priceRange}
                        onChange={(selectedValue) => this.handleSelectFilterChange(selectedValue, 'price')}
                      />
                    </div>
                    <div className="suitability">
                      <Select
                        defaultValue="Phù hợp với"
                        data={this.state.suitabilities}
                        onChange={(selectedValue) => this.handleSelectFilterChange(selectedValue, 'suitability')}
                      />
                    </div>
                  </div>
                </div>
                <div className="list-restaurant col-md-9">
                  <div className="container">
                    <div className="sort">
                      Sắp xếp
                      <Select
                        data={sort}
                        onChange={(selectedValue) => this.handleSelectFilterChange(selectedValue, 'sort')}
                      />
                    </div>
                    <div className="line"></div>
                    <div className="list-restaurant-content">
                      {restaurants.map((restaurant, index) => (
                        <div>
                          <RestaurantItemHorizontal
                            restaurant={restaurant}
                            key={restaurant.id}
                          />
                        </div>
                      ))}
                    </div>
                    <div className="pagination">
                      {this.state.currentPage !== 1 && (
                        <div
                          className="previous-page"
                          onClick={() => this.handleChangePage('previous')}
                        >
                          <GrPrevious className="icon" />
                        </div>
                      )}
                      <div className="current-page">
                        {this.state.currentPage}
                      </div>
                      {this.state.currentPage < this.state.totalPage && (
                        <div
                          className="next-page"
                          onClick={() => this.handleChangePage('next')}
                        >
                          <GrNext className="icon" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      );
    } else {
      return <NotFound />;
    }
  }
}

export default withRouter(ListRestaurant);
