import React, { Component } from 'react'
import Slider from '../Slider/Slider'
import './TopFavorite.scss'

export class TopFavorite extends Component {
  render() {
    return (
      <div className='top-favorite'>
        <div className="container">
          <div className='header-favorite'>
            <div className="title">
              TOP Nhà hàng được yêu thích tại PATO
            </div>
            <div className="see-more">
              <a href="/">
                Xem thêm
              </a>
            </div>
          </div>
          <div className='line'>
          </div>
        </div>
        <Slider/>
        
      </div>
    )
  }
}

export default TopFavorite