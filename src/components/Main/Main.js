import React, { Component } from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import Navbar from '../Navbar/Navbar'
import Our from '../Our/Our'
import Work from '../Works/Work'

export class Main extends Component {
    render() {
        return (
            <div >
                <Navbar />
                <Header />
                <Work />
                <Our />
                <Footer />
            </div>
        )
    }
}

export default Main
