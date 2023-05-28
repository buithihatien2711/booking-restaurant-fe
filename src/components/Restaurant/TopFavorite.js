import React, { Component } from 'react'
import imgCuisine1 from '../../assets/image/home_location_img1.webp'
import imgCuisine2 from '../../assets/image/home_location_img2.webp'
import imgCuisine3 from '../../assets/image/home_location_img3.webp'
import imgCuisine4 from '../../assets/image/home_location_img4.webp'
import imgCuisine5 from '../../assets/image/home_location_img5.webp'
import imgCuisine6 from '../../assets/image/home_location_img6.webp'
import Slider from '../Slider/Slider'

export class TopFavorite extends Component {
  render() {
    const images = [
        '../../assets/image/home_service_img1.webp',
        '../../assets/image/home_service_img2.webp',
        '../../assets/image/home_service_img3.webp',
        '../../assets/image/home_service_img4.webp',
        '../../assets/image/home_service_img5.webp'
    ]
    return (
      <div>
        <Slider images = {images}/>
      </div>
    )
  }
}

export default TopFavorite