import React, { Component } from 'react'
import './OwnerFooter.scss'

export class OwnerFooter extends Component {
  render() {
    return (
      <div className='footer'>
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div class="navbar-group navbar-group--solutions">
                <div class="navbar-group-title">Solutions</div>
                <ul class="menu menu--solutions">
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/products/reservation-management/">Restaurant reservation software</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/products/features/restaurant-marketing/">Digital marketing solutions</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/products/table-management/">Restaurant table management</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/products/features/takeout/">Online ordering for restaurants</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/products/features/experiences/">Experiences</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/products/reputation-management/">Reputation and reviews</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/products/relationship-management/">Relationship management</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/integrations/">OpenTable integrations</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div class="navbar-group navbar-group--who-we-serve">
                <div class="navbar-group-title">Why OpenTable </div>
                <ul class="menu menu--who-we-serve">
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/why-opentable/">For restaurants</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/restaurant-groups/">For restaurant groups</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/wineries-bars/">For bars and wineries</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/hotels-casinos/">For hotels and casinos</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/intel/">Robust reporting and insights</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/diner-network/">The largest diner network</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/service/">The best customer service</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div class="navbar-group navbar-group--also-included">
                <div class="navbar-group-title">Features</div>
                <ul class="menu menu--also-included">
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/products/extras/private-dining/">Private dining</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/products/features/owner-app/">Owner app</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/learn/built-to-protect/">Data &amp; security</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/products/features/opentable-waitlist/">Online waitlist</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/products/features/benchmark-reporting/">Benchmark reporting</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/products/features/direct-messaging/">Direct messaging</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div class="navbar-group navbar-group--more">
                <div class="navbar-group-title">More</div>
                <ul class="menu menu--more">
                  <li class="item menu-item">
                    <a href="https://www.opentable.com/">Diner site</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://www.opentable.com/about/">About OpenTable</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://press.opentable.com/">Press</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://opentable.com/blog/">Blog</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://support.opentable.com/s/article/New-on-GuestCenter?language=en_US">New on OpenTable</a>
                  </li>
                  <li class="item menu-item">
                    <a href="https://restaurant.opentable.com/resources/ ">Restaurant resources</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default OwnerFooter