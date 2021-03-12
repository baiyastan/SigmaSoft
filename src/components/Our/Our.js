import React, { Component } from 'react';
import logo1 from '../../photo/logo1.png';
import logo2 from '../../photo/logo2.png';
import logo3 from '../../photo/logo3.png';
import logo4 from '../../photo/logo4.png';
import logo5 from '../../photo/logo5.png';
import Vector from '../../photo/Vector.png';
import IconColor1 from '../../photo/Icon-Color.png';
import './Our.css';

export class Our extends Component {
    render() {
        return (
            <div className="Our">
                 <div className="our-Ellipse">
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                </div>
                <div className="Our-container">
                    <h2 className="work-text">Our Satisfied Clients</h2>
                    <div className="text-container">
                        <h6 className="our-text-h6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Nam nulla lectus purus ac ipsum amet. Duis platea neque duis nulla facilisis tempor. Dui sollicitudin congue.
                        </h6>
                    </div>
                    <div className="our-logo"> 
                        <img src={logo1} alt="logo1" />
                        <img className="logo__1" src={logo2} alt="logo2" />
                        <img className="logo__1" src={logo3} alt="logo3" />
                        <img className="logo__1" src={logo4} alt="logo4" />
                        <img className="logo__1" src={logo5} alt="logo5" />
                    </div>
                    <div className="our-btns">
                        <div className="our-blue">
                            <div className="our-blue1"></div>
                            <div className="our-blue2"></div>
                            <div className="our-blue2"></div>
                            <div className="our-blue2"></div>
                            <div className="our-blue2"></div>
                        </div>
                        <div className="our-btn">
                            <button className="our-btn1">
                                <img src={Vector} alt="Vector" />
                            </button>
                            <button className="our-btn2">
                                <img src={IconColor1} alt="IconColor1" />
                            </button>
                        </div>
                    </div>
                    <div className="our-end">
                        <div className="our-end-text">Ready to launch your app and website?</div>
                        <button className="our-end-btn">Get in touch now</button>
                    </div>
                </div>
                <div className="our-Ellipse-end">
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                    <div className="Ellipses"></div>
                </div>

            </div>
        )
    }
}

export default Our
