import React, { Component } from 'react'
import { Outlet } from 'react-router'
import Header from '../containers/Header/Header'
import Footer from '../containers/Footer/Footer'

class Home extends Component {
    render() {
        return (
            <>
                <Header/>
                <Outlet/>
                <Footer/>
            </>
        )
    }
}

export default Home