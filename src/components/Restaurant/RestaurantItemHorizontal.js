import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withRouter } from "../../hoc/withRouter";
import './RestaurantItemHorizontal.scss'

export class RestaurantItemHorizontal extends Component {
  render() {
    let restaurant = this.props.restaurant;

    return (
      <div className="product-item-horizontal row">
        <div className="product-img col-md-4">
          <Link to={`/restaurants/${restaurant.id}`}>
            <img
              id=""
              className=" "
              src={restaurant.image}
              alt={restaurant.name}
            />
          </Link>
        </div>
        <div className="product-item-info col-md-8">
          <div className="product-title">
            <Link to={`/restaurants/${restaurant.id}`}>{restaurant.name}</Link>
          </div>
          <div className="tag-location">
            {/* {console.log(restaurant)} */}
            {restaurant.location &&
              restaurant.location.address &&
              restaurant.ward &&
              restaurant.ward.name &&
              restaurant.district &&
              restaurant.district.name &&
              restaurant.city &&
              restaurant.city.name ? (
                <>
                  {restaurant.location.address},{" "}
                  {restaurant.ward.name},{" "}
                  {restaurant.district.name},{" "}
                  {restaurant.city.name}
                </>
              ) : (
                <></>
              )}
          </div>
          <div className="product-type-price">
            {restaurant.cuisines && restaurant.cuisines[0] && (
              <div className="product-type">
                <span>
                  <a href="/">{restaurant.cuisines[0].name}</a>
                </span>
              </div>
            )}
            {restaurant.services && restaurant.services[0] && (
              <div className="product-service">
                <span>
                  <a href="/">{restaurant.services[0].name}</a>
                </span>
              </div>
            )}
            <div className="product-price">
              <span className="product-price-content">
                {Array(restaurant.priceRange).fill("$").join("")}
              </span>
              <span>
                {Array(5 - restaurant.priceRange)
                  .fill("$")
                  .join("")}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(RestaurantItemHorizontal);
