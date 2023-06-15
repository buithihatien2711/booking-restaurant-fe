import React, { Component } from 'react'
import Slider from '../Slider/Slider'
import './TopFavorite.scss'
import { handleGetRestaurantApi } from '../../services/restaurantService'

class TopFavorite extends Component {
  state = {
    restaurants : []
  }

  async componentDidMount() {
    let filter = 'top-favorite'
    let page = 1
    try {
      let res = await handleGetRestaurantApi(filter, page)
      console.log(res.data.data)
      this.setState({
        restaurants : res && res.data && res.data.data ? res.data.data : null
      })
    } catch (error) {
      
    }
  }

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
        {/* {console.log(this.state.restaurants)} */}
        <Slider restaurants = {this.state.restaurants}/>
        
      </div>
    )
  }
}

export default TopFavorite