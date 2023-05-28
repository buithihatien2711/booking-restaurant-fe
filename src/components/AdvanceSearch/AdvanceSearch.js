import React, { Component } from "react";
import "./AdvanceSearch.scss";

export class AdvanceSearch extends Component {
  render() {
    return (
      <>
        <div className="search">
          <div className="container title-container">
            <div className="title">Tìm kiếm nâng cao</div>
            <div className="description">Tìm kiếm nhà hàng phù hợp với nhu cầu của bạn</div>
            <div className="line"></div>
          </div>
          <div className="container">
            <div className="content">
              <div className="option-advance-1">
                <select name="" id="">
                  <option value="city">Tỉnh/Thành</option>
                </select>
              </div>
              <div className="option-advance-2">
                <select name="" id="">
                  <option value="district">Quận/Huyện</option>
                </select>
              </div>
              <div className="option-advance-3">
                <select name="" id="">
                  <option value="">Khoảng giá</option>
                </select>
              </div>
              <div className="option-advance-4">
                <select name="" id="">
                  <option value="">Loại hình ẩm thực</option>
                </select>
              </div>
              <div className="option-advance-5">
                <select name="" id="">
                  <option value="">Loại hình phục vụ</option>
                </select>
              </div>
              <div className="search-btn">
                <button className="advance-search-btn">Tìm kiếm nhanh</button>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default AdvanceSearch;
