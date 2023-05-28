import React, { Component } from 'react'
import './RestaurantItem.scss'

export class RestaurantItem extends Component {
  render() {
    return (
        <div className="product-item ">
            <div class="product-img">
                <a href="/">
                    <img id="" class=" "
                        src="//product.hstatic.net/1000275435/product/292382808_2083461028520153_4792480421995342344_n_optimized_0ba57f47e8554bf9bc0aacd39ff55529_large.jpg"
                        alt="Hải sản Biển Đông - Trần Thái Tông" />
                </a>
            </div>
            <div class="product-item-info">
                <div class="product-title">
                    <a href="/">Hải sản Biển
                        Đông - Trần Thái Tông</a>
                </div>
                <div class="tag-location">
                    Số 2 ngõ 84 Trần Thái Tông, P.Dịch Vọng Hậu, Q.Cầu Giấy,
                    Hà Nội
                </div>
                <div class="product-type-price">
                    <div class="product-type">
                        <span>
                            <a href="/"> Hải sản</a>
                        </span>
                    </div>
                    <div className='product-service'>
                        <span>
                            <a href="/"> Gọi món</a>
                        </span>
                    </div>
                    <div class="product-price">
                        <span class="product-price-content">$$$</span>
                        <span>$$</span>
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

