import React, { Component } from 'react'
import './Cuisine.scss'
import imgCuisine1 from '../../assets/image/home_location_img1.webp'
import imgCuisine2 from '../../assets/image/home_location_img2.webp'
import imgCuisine3 from '../../assets/image/home_location_img3.webp'
import imgCuisine4 from '../../assets/image/home_location_img4.webp'
import imgCuisine5 from '../../assets/image/home_location_img5.webp'
import imgCuisine6 from '../../assets/image/home_location_img6.webp'

class Cuisine extends Component {
    render() {
        return (
            <>
                <div className="cuisine">
                    <div className='container'>
                        <div className="cuisine-title">
                            <div className='title'>
                                Bạn đang tìm gì?
                            </div>
                            <div className='line'>
                            </div>
                        </div>
                        <div className="cuisine-content">
                            <div className="row">
                                <div className="col-md-4 cuisine-item">
                                    <a href="/">
                                        <img src={imgCuisine1} alt="" />
                                    </a>
                                </div>
                                <div className="col-md-4 cuisine-item">
                                    <a href="/">
                                        <img src={imgCuisine2} alt="" />
                                    </a>
                                </div>
                                <div className="col-md-4 cuisine-item">
                                    <a href="/">
                                        <img src={imgCuisine3} alt="" />
                                    </a>
                                </div>
                                <div className="col-md-4 cuisine-item">
                                    <a href="/">
                                        <img src={imgCuisine4} alt="" />
                                    </a>
                                </div>
                                <div className="col-md-4 cuisine-item">
                                    <a href="/">
                                        <img src={imgCuisine5} alt="" />
                                    </a>
                                </div>
                                <div className="col-md-4 cuisine-item">
                                    <a href="/">
                                        <img src={imgCuisine6} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default Cuisine