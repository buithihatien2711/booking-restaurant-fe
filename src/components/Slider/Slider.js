import React, { Component } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import RestaurantItem from '../Restaurant/RestaurantItem';
import { withRouter } from '../../hoc/withRouter';

class Slider extends Component {
  // state = {
  //   restaurants : []
  // }

  // componentDidUpdate() {
  //   this.setState({
  //     restaurants : this.props && this.props.restaurants ? this.props.restaurants : null
  //   })
  // }

  render() {
    const responsive = {
      superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
      },
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 4
      },
      tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
      },
      mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
      }
    };

    return (
      <>
        {/* {console.log(this.props.restaurants)} */}
        {/* {console.log('state: ', this.state.restaurants)}
        {console.log('props', this.props.restaurants)} */}
        <div className='slider container'>
          <Carousel responsive={responsive} >
            {
              this.props.restaurants.map((restaurant, index) => (
                <RestaurantItem restaurant = {restaurant} key={restaurant.id}/>
              ))
            }
          </Carousel>
        </div>
      </>
    )
  }
}

export default Slider