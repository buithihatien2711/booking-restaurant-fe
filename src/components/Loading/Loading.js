import React, { Component } from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import './Loading.scss'

export class Loading extends Component {
    render() {
        return (
            <div className="sweet-loading">
                <ClipLoader
                className="loading"
                size={100}
                color={"#FD5D5D"}
                // loading={this.state.loading}
                Loading = {this.props.loading}
                speedMultiplier={1}
                aria-label="Loading Spinner"
                data-testid="loader"
                />
            </div>
        )
    }
}

export default Loading