import React, { Component } from 'react';
import SearchIcon from '@material-ui/icons/Search';
import freelancer from '../../photo/freelancer.png';
import Vector from '../../photo/Vector29.png';
import './Navbar.css';

export class Navbar extends Component {
    render() {
        return (
            <div className="Navbar">
                <img className="Navbar-img" src={freelancer} alt="freelancer" />
                <div className="Overlay"></div>
                <div className="Nav-container">
                    <div className="nav-Navbar">
                        <div className="nav-logo">
                            <img className="logo" src={Vector} alt="Vector"/>
                            <div className="nav-logo-text">
                                <h3 className="logo-text-h3">SIGMA</h3>
                                <h5 className="logo-text-h5">SOFTWARE SOLUTIONS</h5>
                            </div>
                        </div>
                        <div className="nav-btn">
                            <div className="search"><SearchIcon  /></div>
                            <button className="nav-button">
                                Start Project 
                                
                            </button>
                        </div>
                    </div>
                        <div className="span-text">
                                <h2 className="nav-span-text">Crafting every single Code with detailed</h2>
                                <h6 className="nav-span-text-h5">
                                    Leverage agile frameworks to provide a robust synopsis for high level overviews. Iterative approaches to
                                    corporate strategy foster collaborative thinking to further the overall value proposition.
                                </h6>
                        </div>
                    <div className="nav-btn-div">
                        <button className="button-yellow">
                            Contact Us
                        </button>
                        <h4 className="nav-our-text">Our Works</h4>
                    </div>
                    <div className="Face">
                        <div className="Social-media-link">
                            <a className="a" href="https://www.facebook.com/SigmaSoftt"><span className="Social-link">Facebook</span></a>
                            <a className="a" href="https://www.instagram.com/sigma.io/"><span className="Social-link">Instagram</span></a>
                            <a className="a"href="/"><span className="Social-link">Linkedin</span></a>
                            <a className="a" href="/"><span className="Social-link">GitHub</span></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
