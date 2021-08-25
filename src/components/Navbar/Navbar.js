import React, { Component } from 'react';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
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
                            <img className="logo" src={Vector} alt="Vector" />
                            <div className="nav-logo-text">
                                <h3 className="logo-text-h3">SIGMA</h3>
                                <h5 className="logo-text-h5">SOFTWARE SOLUTIONS</h5>
                            </div>
                        </div>
                        <div className="nav-btn">
                            <div className="search">
                                <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M19.25 17H18.065L17.645 16.595C19.115 14.885 20 12.665 20 10.25C20 4.865 15.635 0.5 10.25 0.5C4.865 0.5 0.5 4.865 0.5 10.25C0.5 15.635 4.865 20 10.25 20C12.665 20 14.885 19.115 16.595 17.645L17 18.065V19.25L24.5 26.735L26.735 24.5L19.25 17ZM10.25 17C6.515 17 3.5 13.985 3.5 10.25C3.5 6.515 6.515 3.5 10.25 3.5C13.985 3.5 17 6.515 17 10.25C17 13.985 13.985 17 10.25 17Z" fill="white" />
                                </svg>

                                <input type="text" class="search__input" placeholder="я ищу..."></input>
                            </div>
                        </div>
                    </div>
                    <div className="span-text">
                        <h2 className="nav-span-text">Crafting every single Code with detailed</h2>
                        <h6 className="nav-span-text-h5">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non purus, suspendisse eget sit sagittis aliquam mattis non. Lobortis diam nisl senectus molestie congue vel ut. Auctor quis egestas consequat diam nisl pulvinar vitae ut ut. At lacinia in sagittis, sed dignissim enim facilisi et malesuada.
                        </h6>
                    </div>
                    <div className="nav-btn-div">
                        <button className="button-yellow">
                            Start Project
                        </button>
                    </div>
                    <div className="Face">
                        <div className="Social-media-link">
                            <a className="a" target="blank" href="https://www.facebook.com/SigmaSoftt">
                                <i class="fab fa-facebook-f"></i>
                            </a>
                            <a className="a" target="blank" href="https://www.instagram.com/sigma.io/"><i class="fab fa-instagram"></i></a>
                            <a className="a" target="blank" href="/"><i class="fab fa-dribbble"></i></a>
                            <a className="a" target="blank" href="/"><i class="fab fa-behance"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Navbar
