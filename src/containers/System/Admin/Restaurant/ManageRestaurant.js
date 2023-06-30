import React, { Component } from 'react'
import './ManageRestaurant.scss'
import Select from "../../../../components/Forms/Select/Select";
import { AiOutlineEye } from "react-icons/ai";
import { GrNext, GrPrevious } from "react-icons/gr";
import { Link } from "react-router-dom";
import { handleGetRestaurantsAdmin } from '../../../../services/restaurantService';
import { withRouter } from '../../../../hoc/withRouter';

export class ManageRestaurant extends Component {
    state = {
        restaurants : [],
        currentPage : 1,
        totalPage: 0,
        status: '',
    }

    async componentDidMount() {
        try {
            let res = await handleGetRestaurantsAdmin(1, '');
            // console.log(res)
            this.setState({
                restaurants : res && res.data && res.data.data && res.data.data.data ? res.data.data.data : [],
                totalPage: res && res.data && res.data.data && res.data.data.totalPage ? res.data.data.totalPage : 0,
            })
        } catch (error) {
            
        }
    }

    handleNextPage = async () => {
        // console.log('next')
        try {
            let res = await handleGetRestaurantsAdmin(this.state.currentPage + 1, this.state.status);
            console.log(res)
            this.setState({
                restaurants : res && res.data && res.data.data && res.data.data.data ? res.data.data.data : [],
                currentPage : this.state.currentPage + 1
            })
            console.log(res)
        } catch (error) {
            
        }
    }

    handlePreviousPage = async() => {
        // console.log('previous')
        try {
            let res = await handleGetRestaurantsAdmin(this.state.currentPage - 1, this.state.status);
            console.log(res)
            this.setState({
                restaurants : res && res.data && res.data.data && res.data.data.data ? res.data.data.data : [],
                currentPage : this.state.currentPage - 1
            })
            console.log(res)
        } catch (error) {
            
        }
    }

    handleOnSelectStatus = async (selectedValue) => {
        if(selectedValue === 'default') {
            selectedValue = ''
        }
        this.setState({
            status: selectedValue
        })
        try {
            let res = await handleGetRestaurantsAdmin(this.state.currentPage, selectedValue);
            console.log(res)
            this.setState({
                restaurants : res && res.data && res.data.data && res.data.data.data ? res.data.data.data : [],
            })
        } catch (error) {
            
        }
    }

    render() {
    let statuses = [
        { id: 0, name: "Chờ xác nhận" },
        { id: 1, name: "Xác nhận" },
        { id: 2, name: "Bị từ chối" },
        { id: 3, name: "Bị khóa" },
    ];
    const priceRange = [
        {id: 1, name: 'Dưới 200.000vnd'},
        {id: 2, name: '200.000vnd - 300.000vnd'},
        {id: 3, name: '300.000vnd - 400.000vnd'},
        {id: 4, name: '400.000vnd - 500.000'},
        {id: 5, name: 'Trên 500.000vnd'}
    ]
    return (
        <div className="manage-restaurant">
            <div className="filter row">
              {/* <div className="col-md-3">
                <input type="date" className="date-input" />
              </div> */}
              {/* <div className="col-md-3"></div> */}
              <div className="col-md-3">
                <Select data={statuses} defaultValue = 'Chọn trạng thái' onChange={this.handleOnSelectStatus}/>
              </div>
              <div className="col-md-3"></div>
            </div>
            <div className="content">
                <table className="table-content">
                    <colgroup>
                    <col style={{ width: "70px" }} />
                    <col />
                    <col style={{ width: "100px" }} />
                    <col style={{ width: "200px" }} />
                    <col style={{ width: "70px" }} />
                    <col style={{ width: "100px" }} />
                    <col style={{ width: "100px" }} />
                    <col style={{ width: "150px" }} />
                    <col style={{ width: "150px" }} />
                    <col style={{ width: "80px" }} />
                    </colgroup>
                    <thead>
                    <tr>
                        <th>STT</th>
                        <th>Tên</th>
                        <th>Số điện thoại</th>
                        <th>Mức giá</th>
                        <th>Sức chứa</th>
                        <th>Món đặc sắc</th>
                        <th>Địa chỉ</th>
                        <th>Tạo ngày</th>
                        <th>Trạng thái</th>
                        <th>Chi tiết</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.restaurants && (
                        <>
                        {this.state.restaurants.map((restaurant, index) => {
                            const [date, hour] = restaurant.createAt.split("T");
                            const shortenedHour = hour.substring(0, 5);
                            return (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td>{restaurant.name}</td>
                                <td>{restaurant.phone}</td>
                                <td>
                                    {priceRange.find(item => item.id === restaurant.priceRange)?.name || 'Price range not found'}
                                    {/* <Select
                                        data={priceRange}
                                        selectedIndex={
                                            restaurant && restaurant.priceRange
                                            ? restaurant.priceRange
                                            : null
                                        }
                                        onChange={this.handleChangeStatus}
                                        containElement={restaurant}
                                    /> */}
                                </td>
                                <td>{restaurant.capacity}</td>
                                <td>{restaurant.specialDishes}</td>
                                <td>{restaurant.city}</td>
                                <td>{shortenedHour + ' ' + date}</td>
                                <td>
                                {statuses.find(item => item.id === restaurant.restaurantStatus)?.name || 'Price range not found'}
                                {/* <Select
                                    data={statuses}
                                    selectedIndex={
                                        restaurant && restaurant.restaurantStatus
                                        ? restaurant.reservationStatus
                                        : null
                                    }
                                    onChange={this.handleChangeStatus}
                                    containElement={restaurant}
                                /> */}
                                </td>
                                <td style={{ textAlign: "center" }}>
                                <Link
                                    to={`/admin/restaurants/${restaurant.id}`}
                                >
                                    <AiOutlineEye className="icon" />
                                </Link>
                                </td>
                            </tr>
                            );
                        })}
                        </>
                    )}
                    </tbody>
                </table>
                <div className="pagination">
                    {this.state.currentPage !== 1 && (
                        <div className="next-page" onClick={() => this.handlePreviousPage()}>
                            <GrPrevious className='icon'/>
                        </div>
                    )}
                    <div className="current-page">
                        {this.state.currentPage}
                    </div>
                    {this.state.currentPage < this.state.totalPage && (
                        <div className="previous-page" onClick={() => this.handleNextPage()}>
                            <GrNext className='icon'/>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
  }
}

export default withRouter(ManageRestaurant)