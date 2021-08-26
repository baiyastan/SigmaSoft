import React, { Component } from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Navbar from '../../components/Navbar/Navbar'
import Our from '../../components/Our/Our'
import Work from '../../components/Works/Work'

export class Home extends Component {
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

export default Home
