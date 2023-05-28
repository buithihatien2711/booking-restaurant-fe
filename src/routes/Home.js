import React, { Component } from 'react'
import { Outlet } from 'react-router'
import Header from '../containers/Header/Header'
import Footer from '../containers/Footer/Footer'

class Home extends Component {
    render() {
        // const { isLoggedIn } = this.props;
        // let linkToRedirect = isLoggedIn ? '/system/user-manage' : '/login';

        // return (
        //     <Redirect to={linkToRedirect} />
        // );
        return (
            <>
                <Header/>
                <Outlet/>
                <Footer/>
                {/* <div>Home</div> */}
            </>
        )
    }
}

export default Home