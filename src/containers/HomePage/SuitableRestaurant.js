import React, { Component } from 'react'
import imgSuiable1 from '../../assets/image/home_service_img1.webp'
import imgSuiable2 from '../../assets/image/home_service_img2.webp'
import imgSuiable3 from '../../assets/image/home_service_img3.webp'
import imgSuiable4 from '../../assets/image/home_service_img4.webp'
import imgSuiable5 from '../../assets/image/home_service_img5.webp'
import './SuitableRestaurant.scss'

export class SuitableRestaurant extends Component {
  render() {
    return (
        <>
            <div className='suitable-restaurants'>
                <div className='container title-container'>
                    <div className='title'>
                        Nhà hàng phù hợp
                    </div>
                    <div className='line'>
                    </div>
                </div>
                <div className='container suitability'>
                    <div className="suitable-item">
                        <a href="/">
                            <img src={imgSuiable1} alt="office" />
                        </a>
                    </div>

                    <div className="suitable-item">
                        <a href="/">
                            <img src={imgSuiable2} alt="family" />
                        </a>
                    </div>

                    <div className="suitable-item">
                        <a href="/">
                            <img src={imgSuiable3} alt="friend" />
                        </a>
                    </div>

                    <div className="suitable-item">
                        <a href="/">
                            <img src={imgSuiable4} alt="dating" />
                        </a>
                    </div>

                    <div className="suitable-item">
                        <a href="/">
                            <img src={imgSuiable5} alt="party event" />
                        </a>
                    </div>
                </div>
            </div>
        </>
    )
  }
}

export default SuitableRestaurant