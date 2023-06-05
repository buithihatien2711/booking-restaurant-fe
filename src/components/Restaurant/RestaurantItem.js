import React, { Component } from 'react'
import './RestaurantItem.scss'

export class RestaurantItem extends Component {
    // state = {
    //     restaurant : {}
    // }

    // componentDidMount() {
    //     this.setState({
    //       restaurant : this.props && this.props.restaurant ? this.props.restaurant : null
    //     })
    //   }

    render() {
        let restaurant = this.props.restaurant
        
        return (
            <div className="product-item ">
                <div className="product-img">
                    <a href="/">
                        <img id="" className=" "
                            src={restaurant.image}
                            alt="Hải sản Biển Đông - Trần Thái Tông" />
                    </a>
                </div>
                <div className="product-item-info">
                    <div className="product-title">
                        <a href="/">{restaurant.name}</a>
                    </div>
                    <div className="tag-location">
                        {/* {console.log(restaurant)} */}
                        {restaurant.location.address}, P.{restaurant.location.ward.name}, Q.{restaurant.location.ward.district.name}, {restaurant.location.ward.district.city.name}
                    </div>
                    <div className="product-type-price">
                        <div className="product-type">
                            <span>
                                <a href="/">{restaurant.cuisines[0].name}</a>
                            </span>
                        </div>
                        <div className='product-service'>
                            <span>
                                <a href="/">{restaurant.services[0].name}</a>
                            </span>
                        </div>
                        <div className="product-price">
                            <span className="product-price-content">{Array(restaurant.priceRange + 1).fill('$').join('')}</span>
                            <span>{Array(5 - restaurant.priceRange - 1).fill('$').join('')}</span>
                        </div>
                    </div>
                    {/* <div class="textUudai text-left">
                        Giảm 50%
                    </div> */}
                </div>
            </div>
        )
    }
}

export default RestaurantItem


// export className RestaurantItem extends Component {
//   render() {
//     return (
//       <>
//         <div className='restaurant-item'>
//             <div className='restaurant-image'>
//                 <img src={imgDish} alt="" />
//             </div>
//             <div className='restaurant-name'>
//                 Bếp Prime - Hàng Điếu
//             </div>
//             <div className='restaurant-location'>
//                 Số 12 Hàng Điếu, P.Cửa Bắc, Q.Hoàn Kiếm, Hà Nội
//             </div>
//             <div className='restaurant-description'>
//                 <a href="/">Món Việt</a>
//                 <a href="/">Gọi món</a>
//                 $$$$$
//             </div>
//             <div className='see-more'>
//                 <a href="/">Xem thêm</a>
//             </div>  
//         </div>
//       </>
//     )
//   }
// }

// export default RestaurantItem

