import React, { Component } from "react";
import "./ManageReservation.scss";
import { handleGetReservation } from "../../../../services/reservationService";
// import Select from '../../../../components/Forms/Select/Select'
import { AiOutlineEye } from "react-icons/ai";
import { handleGetRestaurantIdByUserId } from "../../../../services/restaurantService";
import jwt_decode from "jwt-decode";
import { Link } from "react-router-dom";
import { withRouter } from "../../../../hoc/withRouter";
import Select from "../../../../components/Forms/Select/Select";
import { handleChangeReservationStatus } from "../../../../services/reservationService";
import { toast } from "react-toastify";
import RestaurantRegister from "../../../Auth/OwnerRegister/RestaurantRegister";
import { path } from "../../../../utils/constant";

export class ManageReservation extends Component {
  state = {
    reservations: null,
    restaurantId: null,
  };
  async componentDidMount() {
    let token = localStorage.ownerToken;
    if (token) {
      var decoded = jwt_decode(token);
      if (decoded.sub) {
        let userId = decoded.sub;
        try {
          let resGetId = await handleGetRestaurantIdByUserId(userId);
          let id = resGetId.data.data;
          this.setState({
            restaurantId: id,
          });
          if (!id) {
            this.props.navigate(path.RESTAURANTREGISTER)
            window.location.reload()
            return;
          }
          let status = null;
          let date = null;

          try {
            let res = await handleGetReservation(id, status, date);
            // console.log(res.data.data);
            this.setState({
              reservations:
                res && res.data && res.data.data ? res.data.data : null,
            });
          } catch (error) {
            console.log(error);
          }
        } catch (error) {
          this.props.navigate(path.RESTAURANTREGISTER)
          window.location.reload()
          return;
        }
      }
    }
  }

  handleChangeStatus = async (selectedValue, reservation) => {
    console.log(">> handle change status: ", selectedValue, reservation);

    try {
      let res = await handleChangeReservationStatus(
        reservation.id,
        selectedValue
      );
      if (res.data.success) {
        toast.success("Cập nhật trạng thái thành công");
      }
    } catch (error) {}
  };

  OnChangeStatus = (event) => {
    console.log(event.target.value);
  };

  render() {
    let statuses = [
      { id: 0, name: "Chờ xác nhận" },
      { id: 1, name: "Xác nhận" },
      { id: 2, name: "Đã đến" },
      { id: 3, name: "Bị từ chối" },
    ];

    return (
      <>
        {/* {!this.state.restaurantId ? (
          <RestaurantRegister />
        ) : ( */}
          <div className="manage-reservation">
            <div className="filter row">
              <div className="col-md-3">
                <input type="date" className="date-input" />
              </div>
              <div className="col-md-3"></div>
              <div className="col-md-3">
                <select className="select-status">
                  <option value="default">Trạng thái</option>
                  <option value="1">Chờ xác nhận</option>
                  <option value="2">Đã xác nhận</option>
                  <option value="3">Đã hủy</option>
                </select>
              </div>
              <div className="col-md-3"></div>
            </div>
            <div className="content">
              <table className="table-content">
                <colgroup>
                  <col style={{ width: "70px" }} />
                  <col />
                  <col style={{ width: "200px" }} />
                  <col style={{ width: "200px" }} />
                  <col style={{ width: "100px" }} />
                  <col style={{ width: "100px" }} />
                  <col style={{ width: "100px" }} />
                  <col style={{ width: "200px" }} />
                  <col style={{ width: "80px" }} />
                </colgroup>
                <thead>
                  <tr>
                    <th>STT</th>
                    <th>Tên</th>
                    <th>Số điện thoại</th>
                    <th>Ngày</th>
                    <th>Giờ</th>
                    <th>Số người lớn</th>
                    <th>Số trẻ em</th>
                    <th>Trạng thái</th>
                    <th>Chi tiết</th>
                  </tr>
                </thead>
                <tbody>
                  {this.state.reservations && (
                    <>
                      {this.state.reservations.map((reservation, index) => {
                        const [date, hour] = reservation.time.split("T");
                        const shortenedHour = hour.substring(0, 5);
                        return (
                          <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{reservation.nameCustomer}</td>
                            <td>{reservation.phoneCustomer}</td>
                            <td>{date}</td>
                            <td>{shortenedHour}</td>
                            <td>{reservation.numAdults}</td>
                            <td>{reservation.numChildren}</td>
                            <td style={{ textAlign: "center" }}>
                              <Select
                                data={statuses}
                                selectedIndex={
                                  reservation && reservation.reservationStatus
                                    ? reservation.reservationStatus
                                    : null
                                }
                                onChange={this.handleChangeStatus}
                                containElement={reservation}
                              />
                            </td>
                            <td style={{ textAlign: "center" }}>
                              <Link
                                to={`/business/reservation/${reservation.id}`}
                              >
                                <AiOutlineEye className="icon" />
                              </Link>
                            </td>
                          </tr>
                        );
                      })}
                    </>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        {/* )} */}
      </>
    );
  }
}

export default withRouter(ManageReservation);
