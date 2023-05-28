import React, { Component } from 'react'
import SuitableRestaurant from './SuitableRestaurant'
import AdvanceSearch from '../../components/AdvanceSearch/AdvanceSearch'
import Cuisine from './Cuisine'
import TopFavorite from '../../components/Restaurant/TopFavorite'

class HomePage extends Component {
  render() {
    return (
      <>
        <AdvanceSearch/>
        <SuitableRestaurant/>
        <Cuisine/>
        <TopFavorite/>
      </>
    )
  }
}

export default HomePage
