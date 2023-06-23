import React, { Component } from 'react'
import './RestaurantRegister.scss'
import Select from '../../../components/Forms/Select/Select'
import UploadImage from '../../../components/UploadImage/UploadImage'
import { handleGetCuisinesApi, handleGetServicesApi, handleGetCitiesApi, handleGeDistrictsApi, handleGetSuitabilitiesApi } from "../../../services/restaurantService";

export class RestaurantRegister extends Component {
    state = {
        name: '',
        phone: '',
        capacity: 0,
        specialDish: '',
        introduction: '',
        // restaurantImage: '',
        cuisines: [],
        cuisineSelected: [],
        services: [],
        serviceSelected: [],
        cities: [],
        citySelected: '',
        districts: [],
        districtSelected: '',
        wards: [],
        wardSelected: '',
        address: '',
        suitabilities: [],
        suitabilitySelected: [],
        restaurantImage: [],
        menuImage: [],

        // Extra service
        // Business hour
    }

    // handleImageUpload = (images) => {
    //     // Handle the list of images in the parent component
    //     // console.log(images); // Do whatever you need with the images
    //     this.props.UploadImage
    // };

    async componentDidMount() {
        try {
            var res = await handleGetCuisinesApi()
            console.log('cuisine: ', res)
            this.setState({
                cuisines: res && res.data && res.data.data ? res.data.data : []
            })
        } catch (error) {
            console.log(error)
        }

        try {
            var res = await handleGetServicesApi()
            console.log('service: ', res)
            this.setState({
                services: res && res.data && res.data.data ? res.data.data : []
            })
        } catch (error) {
            console.log(error)
        }

        try {
            var res = await handleGetCitiesApi()
            console.log('cities: ', res)
            this.setState({
                cities: res && res.data && res.data.data ? res.data.data : []
            })
        } catch (error) {
            console.log(error)
        }

        try {
            var res = await handleGetSuitabilitiesApi()
            console.log('suitabilities: ', res)
            this.setState({
                suitabilities: res && res.data && res.data.data ? res.data.data : []
            })
        } catch (error) {
            console.log(error)
        }
    }

    handleImageUpload = (images, imageType) => {
        if (imageType === 'restaurant') {
            this.setState({ restaurantImage: images });
        } else if (imageType === 'menu') {
            this.setState({ menuImage: images });
        }
        // Additional processing or logic based on image type
    };

    handleOnChangeInput = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        });
    };

    handleCheckboxChange = (event, type) => {
        if(type === 'cuisine') {
            const { value, checked } = event.target;
            const { cuisineSelected } = this.state;
            console.log(event.target.value)
            
            // Update selectedCuisines based on checkbox changes
            if (checked) {
                this.setState({ cuisineSelected: [...cuisineSelected, value] });
            } else {
                const updatedCuisines = cuisineSelected.filter(cuisineId => cuisineId !== value);
                this.setState({ cuisineSelected: updatedCuisines });
            }
        }

        if(type === 'service') {
            const { value, checked } = event.target;
            const { serviceSelected } = this.state;
            console.log(event.target.value)
            
            // Update selectedCuisines based on checkbox changes
            if (checked) {
                this.setState({ serviceSelected: [...serviceSelected, value] });
            } else {
                const updatedServices = serviceSelected.filter(id => id !== value);
                this.setState({ serviceSelected: updatedServices });
            }
        }

        if(type === 'suitability') {
            const { value, checked } = event.target;
            const { suitabilitySelected } = this.state;
            console.log(event.target.value)
            
            // Update selectedCuisines based on checkbox changes
            if (checked) {
                this.setState({ suitabilitySelected: [...suitabilitySelected, value] });
            } else {
                const updatedSuitability = suitabilitySelected.filter(id => id !== value);
                this.setState({ suitabilitySelected: updatedSuitability });
            }
        }
    };

    render() {
        console.log(this.state.cuisineSelected)
        const priceRange = [
            { id: 1, name: 'Dưới 200.000vnd' },
            { id: 2, name: 'Từ 200.000vnd đến 300.000vnd' },
            { id: 3, name: 'Từ 300.000vnd đến 400.000vnd' },
            { id: 4, name: 'Từ 400.000vnd đến 500.000' },
            { id: 5, name: 'Trên 500.000vnd' }
        ]
        const cuisines = this.state.cuisines
        const services = this.state.services
        // const cities = []
        // const districts = []
        const cities = this.state.cities
        const districts = this.state.districts
        const wards = this.state.wards
        const suitabilities = this.state.suitabilities

        return (
            <div className='restaurant-register'>
                <div className="restaurant-register-form">
                    <div className="title row">
                        <div className="col-md-12">
                            Đăng kí nhà hàng
                        </div>
                    </div>
                    <div className="content">
                        <div className="name row">
                            <div className="col-md-3">
                                Tên nhà hàng
                            </div>
                            <div className="col-md-9">
                                <input type="text" name='name' value={this.state.name}
                                    onChange={(event) => this.handleOnChangeInput(event)} />
                            </div>
                        </div>

                        <div className="phone row">
                            <div className="col-md-3">
                                Số điện thoại nhà hàng
                            </div>
                            <div className="col-md-9">
                                <input type="text" name='phone' value={this.state.phone}
                                    onChange={(event) => this.handleOnChangeInput(event)} />
                            </div>
                        </div>

                        <div className="price-range row">
                            <div className="col-md-3">
                                Mức giá
                            </div>
                            <div className="col-md-9">
                                <Select data={priceRange} />
                            </div>
                        </div>

                        <div className="capacity row">
                            <div className="col-md-3">
                                Sức chứa
                            </div>
                            <div className="col-md-9">
                                <input type="number" name='capacity' value={this.state.capacity}
                                    onChange={(event) => this.handleOnChangeInput(event)} />
                            </div>
                        </div>
                        <div className="special-dish row">
                            <div className="col-md-3">
                                Món đặc sắc
                            </div>
                            <div className="col-md-9">
                                <textarea name='specialDish' value={this.state.specialDish}
                                    onChange={(event) => this.handleOnChangeInput(event)} ></textarea>
                            </div>
                        </div>

                        <div className="introduction row">
                            <div className="col-md-3">
                                Giới thiệu nhà hàng
                            </div>
                            <div className="col-md-9">
                                <textarea name='introduction' value={this.state.introduction}
                                    onChange={(event) => this.handleOnChangeInput(event)} ></textarea>
                            </div>
                        </div>

                        <div className="note row">
                            <div className="col-md-3">
                                Chú ý
                            </div>
                            <div className="col-md-9">
                                <textarea name='note' value={this.state.value}
                                    onChange={(event) => this.handleOnChangeInput(event)} ></textarea>
                            </div>
                        </div>

                        <div className="restaurant-image row">
                            <div className="col-md-3">
                                Ảnh nhà hàng
                            </div>
                            <div className="col-md-9">
                                {/* <input type="text" /> */}
                                <UploadImage name='restaurantImage'
                                    // onChange={this.handleImageUpload}/>
                                    onChange={(images) => this.handleImageUpload(images, 'restaurant')} />
                            </div>
                        </div>

                        <div className="cuisine row">
                            <div className="col-md-3">
                                Loại hình ẩm thực
                            </div>
                            <div className="col-md-9 select-container">
                                {/* <Select defaultValue='Loại hình ẩm thực' data={cuisines} /> */}
                                {this.state.cuisines.map(cuisine => (
                                    <div key={cuisine.id} className='select-item'>
                                        <div className='checkbox-input'>
                                            <input
                                                type="checkbox"
                                                value={cuisine.id}
                                                checked={this.state.cuisineSelected.includes(cuisine.id.toString())}
                                                onChange={(event) => this.handleCheckboxChange(event, 'cuisine')}
                                            />
                                        </div>
                                        <div className='name'>{cuisine.name}</div>
                                        {/* <label htmlFor={cuisine.id}></label> */}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="service row">
                            <div className="col-md-3">
                                Loại hình dịch vụ
                            </div>
                            <div className="col-md-9 select-container">
                                {/* <Select defaultValue='Loại hình ẩm thực' data={cuisines} /> */}
                                {this.state.services.map(service => (
                                    <div key={service.id} className='select-item'>
                                        <div className='checkbox-input'>
                                            <input
                                                type="checkbox"
                                                value={service.id}
                                                checked={this.state.serviceSelected.includes(service.id.toString())}
                                                onChange={(event) => this.handleCheckboxChange(event, 'service')}
                                            />
                                        </div>
                                        <div className='name'>{service.name}</div>
                                        {/* <label htmlFor={cuisine.id}></label> */}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="suitability row">
                            <div className="col-md-3">
                                Phù hợp với
                            </div>
                            <div className="col-md-9 select-container">
                                {/* <Select defaultValue='Loại hình ẩm thực' data={cuisines} /> */}
                                {this.state.suitabilities.map(suitability => (
                                    <div key={suitability.id} className='select-item'>
                                        <div className='checkbox-input'>
                                            <input
                                                type="checkbox"
                                                value={suitability.id}
                                                checked={this.state.suitabilitySelected.includes(suitability.id.toString())}
                                                onChange={(event) => this.handleCheckboxChange(event, 'suitability')}
                                            />
                                        </div>
                                        <div className='name'>{suitability.name}</div>
                                        {/* <label htmlFor={cuisine.id}></label> */}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="city row">
                            <div className="col-md-3">
                                Thành phố
                            </div>
                            <div className="col-md-9">
                                <Select defaultValue='Chọn thành phố' data={cities} />
                            </div>
                        </div>

                        <div className="district row">
                            <div className="col-md-3">
                                Chọn quận
                            </div>
                            <div className="col-md-9">
                                <Select defaultValue='Chọn quận' data={districts} />
                            </div>
                        </div>

                        <div className="ward row">
                            <div className="col-md-3">
                                Chọn phường
                            </div>
                            <div className="col-md-9">
                                <Select defaultValue='Chọn phường' data={wards} />
                            </div>
                        </div>

                        <div className="address row">
                            <div className="col-md-3">
                                Địa chỉ
                            </div>
                            <div className="col-md-9">
                                <input type="text" name='address' value={this.state.address}
                                    onChange={(event) => this.handleOnChangeInput(event)} />
                            </div>
                        </div>

                        <div className="extra-service row">
                            <div className="col-md-3">
                                Dịch vụ thêm
                            </div>
                            <div className="col-md-9">
                                <input type="text" name='name' onChange={(event) => this.handleOnChangeInput(event)} />
                            </div>
                        </div>

                        <div className="business-hour row">
                            <div className="col-md-3">
                                Giờ hoạt động
                            </div>
                            <div className="col-md-9">
                                <input type="text" />
                            </div>
                        </div>

                        <div className="menu-image row">
                            <div className="col-md-3">
                                Ảnh menu
                            </div>
                            <div className="col-md-9">
                                <UploadImage name='menuImage'
                                    // onChange={this.handleImageUpload}
                                    onChange={(images) => this.handleImageUpload(images, 'menu')}
                                />
                            </div>
                        </div>
                        <div className="register-btn-container">
                            <button className='btn-register'>
                                Đăng kí
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default RestaurantRegister