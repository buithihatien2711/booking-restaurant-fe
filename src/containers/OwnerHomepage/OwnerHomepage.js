import React, { Component } from 'react'
import './OwnerHomepage.scss'
import ManageReservation from '../System/Owner/Reservation/ManageReservation'

class OwnerHomepage extends Component {
  render() {
    return (
      <>
        <ManageReservation/>
      </>
    )
  }
}

export default OwnerHomepage