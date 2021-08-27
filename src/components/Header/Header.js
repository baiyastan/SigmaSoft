import React, { Component } from 'react';
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger"; 
import IconColor from '../../photo/IconColor.png';
import icon from '../../photo/icon.png';
import Icon_Color1 from '../../photo/Icon_Color.png';
import IconTvColor from '../../photo/IconTvColor.png';
import './Header.css';
gsap.registerPlugin(ScrollTrigger);

export class Header extends Component {
    componentDidMount () {
        const classes = [
            { name: '.Header-text', x: 0, y: -30, delay: 0.3 },
            { name: '.Header-text-h5', x: 0, y: -30, delay: 0.6 },
            { name: '.card-center', x: 0, y: 100, delay: 0.8 },
            { name: '.card-right', x: 100, y: 0, delay: 0.8 },
            { name: '.card-left', x: -100, y: 0, delay: 0.8 },
        ]
        classes.forEach((i, index) => {
            gsap.from(i.name, {
                duration: 2,
                opacity: 0, 
                delay: i.delay, 
                x: i.x,
                y: i.y,
                stagger: 0.2,
                ease: "power2", 
                force3D: true,
                scrollTrigger: {
                    trigger: i.name,
                    toggleActions: 'restart none none none'
                },
              });
        })
    }
    render() {
        return (
            <div className="Header">
                <div className="container">
                    <div className="divs-text">
                        <h2 className="Header-text">What we do best</h2>
                    </div>
                    <div className="divs-text">
                        <h5 className="Header-text-h5">
                            We will help a client's problems to develop the products they want with high quality.
                        </h5>
                    </div>
                    <div className="Header-card">
                        <div className="card card-left">
                            <div className="card-div">
                                <div className="card-div-color card-shadow">
                                    <img src={IconColor} alt="IconColor" />
                                </div>
                                <h3 className="card_text">Ideation</h3>
                            </div>
                            <h6 className="card-div-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vel non nunc ultrices lectus diam.</h6>
                        </div>
                        <div className="card card-center">
                            <div className="card-div">
                                <div className="card-div-color1 card-shadow">
                                    <img src={icon} alt="icon" />
                                </div>
                                <h3 className="card_text">UI/UX Design</h3>
                            </div>
                            <h6 className="card-div-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna amet pellentesque vitae lorem ut.</h6>
                        </div>
                        <div className="card card-center">
                            <div className="card-div">
                                <div className="card-div-color2 card-shadow">
                                    <img src={Icon_Color1} alt="Icon_Color1" />
                                </div>
                                <h3 className="card_text">Development</h3>
                            </div>
                            <h6 className="card-div-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                        </div>
                        <div className="card card-right">
                            <div className="card-div">
                                <div className="card-div-color3 card-shadow">
                                    <img src={IconTvColor} alt="IconTvColor" />
                                </div>
                                <h3 className="card_text">Deploy Product</h3>
                            </div>
                            <h6 className="card-div-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec.</h6>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header
