import React, { Component } from 'react'
import './ReservationDetail.scss'
import { withRouter } from '../../../../hoc/withRouter'
import { handleGetReservationDetail } from "../../../../services/reservationService";
import Select from '../../../../components/Forms/Select/Select'

export class ReservationDetail extends Component {
    state = {
        reservation: null,
        date: null,
        hour: null,
    }
    async componentDidMount() {
        if (this.props.params && this.props.params.id) {
            // console.log('>>> id: ', this.props.params.id)
            let id = this.props.params.id
            let res = await handleGetReservationDetail(id)
            console.log(res)

            this.setState({
                reservation: res && res.data && res.data.data ? res.data.data : null
            })

            if (res.data && res.data.data) {
                const [dateReservation, hourReservation] = res.data.data.time.split("T");
                const shortenedHour = hourReservation.substring(0, 5);
                this.setState({
                    date: dateReservation,
                    hour: shortenedHour,
                })
            }
        }
    }

    formatDateTime(dateTimeString) {
        const date = new Date(dateTimeString);
        const time = date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        const formattedDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
        return `${time} ${formattedDate}`;
    }

    render() {
        let adults = []
        for (let i = 1; i < 200; i++) {
            let adult = { id: i, name: i }
            adults.push(adult)
        }
        let children = [{ id: 0, name: 0 }, ...adults]

        let hours = []
        for (let i = 0; i < 48; i++) {
            let hour = `${(Math.floor(i / 2))}`.padStart(2, '0')
            let minute = (i % 2) === 0 ? '00' : '30'
            let time = { id: `${hour}:${minute}`, name: `${hour} : ${minute}` }
            hours.push(time)
        }

        let statuses = [
            { id: 0, name: 'Chờ xác nhận' },
            { id: 1, name: 'Xác nhận' },
            { id: 2, name: 'Đã đến' },
            { id: 3, name: 'Bị từ chối' },
        ]

        return (
            <div className='reservation-detail'>
                <div className="title">
                    Chi tiết đặt bàn
                </div>
                <div className="content">
                    <div className="row">
                        <div className="col-md-5 first-col">
                            <div className="customer-name row info-line">
                                <div className="col-md-3">
                                    Tên người đặt
                                </div>
                                <div className="col-md-9">
                                    <input type="text" value={this.state.reservation && this.state.reservation.nameCustomer ? this.state.reservation.nameCustomer : ''} />
                                </div>
                            </div>
                            <div className="customer-phone row info-line">
                                <div className="col-md-3">
                                    Số điện thoại
                                </div>
                                <div className="col-md-9">
                                    <input type="text" value={this.state.reservation && this.state.reservation.phoneCustomer ? this.state.reservation.phoneCustomer : ''} />
                                </div>
                            </div>
                            <div className="reservation-date row info-line">
                                <div className="col-md-3">
                                    Đặt ngày
                                </div>
                                <div className="col-md-9">
                                    <input type="date" value={this.state.date ? this.state.date : ''} />
                                </div>
                            </div>
                            <div className="reservation-date row info-line">
                                <div className="col-md-3">
                                    Thời gian
                                </div>
                                <div className="col-md-9">
                                    {/* <select></select> */}
                                    <Select data={hours} defaultValue='Chọn giờ' selectedIndex={this.state.hour} />
                                </div>
                            </div>
                        </div>
                        <div className="col-md-2"></div>
                        <div className="col-md-5">
                            <div className="number-adults row info-line">
                                <div className="col-md-3">
                                    Số người lớn
                                </div>
                                <div className="col-md-9">
                                    <Select data={adults}
                                        selectedIndex={this.state.reservation && this.state.reservation.numAdults ? this.state.reservation.numAdults : null} />
                                </div>
                            </div>
                            <div className="number-children row info-line">
                                <div className="col-md-3">
                                    Số trẻ em
                                </div>
                                <div className="col-md-9">
                                    {/* {console.log('number children: ', this.state.reservation)} */}
                                    <Select data={children}
                                        selectedIndex={this.state.reservation && this.state.reservation.numChildren ? this.state.reservation.numChildren : null} />
                                </div>
                            </div>
                            <div className="number-children row info-line">
                                <div className="col-md-3">
                                    Trạng thái
                                </div>
                                <div className="col-md-9">
                                    <Select data={statuses}
                                        selectedIndex={this.state.reservation && this.state.reservation.reservationStatus ? this.state.reservation.reservationStatus : null} 
                                    />
                                </div>
                            </div>
                            <div className="number-children row info-line">
                                <div className="col-md-3">
                                    Được tạo lúc
                                </div>
                                <div className="col-md-9">
                                    <input
                                        type="text"
                                        value={
                                            this.state.reservation && this.state.reservation.createAt
                                                ? this.formatDateTime(this.state.reservation.createAt)
                                                : ''
                                        }
                                    />
                                </div>
                            </div>
                        </div>
                        <div className='col-md-12'>
                            <div className="row">
                                <div className="col-md-12" style={{ marginBottom: '10px' }}>
                                    Ghi chú
                                </div>
                                <div className="col-md-12">
                                    <textarea value={this.state.reservation && this.state.reservation.note ? this.state.reservation.note : ''}></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default withRouter(ReservationDetail)