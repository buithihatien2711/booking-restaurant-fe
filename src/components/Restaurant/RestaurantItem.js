import React, { Component } from 'react'
import imgDish from '../../assets/image/dish.png'
import './RestaurantItem.scss'

export class RestaurantItem extends Component {
  render() {
    return (
        <div class="product-item">
            <div class="product-img">
                <a href="/products/hai-san-bien-dong-tran-thai-tong" class="" target="_blank" tabindex="-1">
                    <img id="" class=" "
                        src="//product.hstatic.net/1000275435/product/292382808_2083461028520153_4792480421995342344_n_optimized_0ba57f47e8554bf9bc0aacd39ff55529_large.jpg"
                        alt="Hải sản Biển Đông - Trần Thái Tông" style={{height: '318px'}} />
                </a>
                <div class="product-item-info">
                    <div class="product-title">
                        <a href="/products/hai-san-bien-dong-tran-thai-tong" target="_blank" tabindex="-1">Hải sản Biển
                            Đông - Trần Thái Tông</a>
                    </div>
                    <div class="tag-location">
                        Số 2 ngõ 84 Trần Thái Tông, P.Dịch Vọng Hậu, Q.Cầu Giấy,
                        Hà Nội
                    </div>
                    <div class="product-detail-type">
                        <div class="product-type">
                            <span>
                                <a href="/search?q=filter=((tag:product=loaihinh_Hải sản_chính)&amp;&amp;(tag:product=url_cha_Hà%20Nội))"
                                    tabindex="-1"> Hải sản</a>
                            </span>
                        </div>
                        <div class="product-type-ver2 pr-10">
                            <span>
                                <a href="/search?q=filter=((tag:product=loaihinh_Gọi món_phucvu)&amp;&amp;(tag:product=url_cha_Hà%20Nội))"
                                    tabindex="-1"> Gọi món</a>
                            </span>
                        </div>
                        <div class="product-price">
                            <div class="product-price-content">$$$<span>$$
                            </span></div>
                        </div>
                    </div>
                    <div class="textUudai text-left">
                        Giảm 50%

                    </div>
                </div>
            </div>
            <div class="buy-now-product">
                <div class="product-schedule-transports ">
                    <div class="product-schedule">
                    </div>
                </div>
                <div class="wapbooking">
                    <a class="btn-booking small--hide " target="_blank" href="/products/hai-san-bien-dong-tran-thai-tong"
                        tabindex="-1">Đặt phòng</a>
                    <a class="btn-booking large--hide medium--hide" target="_blank"
                        href="/products/hai-san-bien-dong-tran-thai-tong?view=book" tabindex="-1">Đặt chỗ ngay</a>
                </div>
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

