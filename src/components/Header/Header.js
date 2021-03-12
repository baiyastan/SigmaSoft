import React, { Component } from 'react';
import IconColor from '../../photo/IconColor.png';
import IconColor1 from '../../photo/Icon-Color.png';
import icon from '../../photo/icon.png';
import Icon_Color1 from '../../photo/Icon_Color.png';
import IconTvColor from '../../photo/IconTvColor.png'; 
import './Header.css';

export class Header extends Component {
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
                        <div className="card-Hovered">
                            <div className="card-div">
                                <div className="card-div-color">
                                    <img  src={IconColor} alt="IconColor"/>
                                </div>
                                <h3 className="card_text">Ideation</h3>
                            </div>
                            <h6 className="card-div-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Enim vel non nunc ultrices lectus diam.</h6>
                            <div className="card-div-end">
                                <img src={IconColor1} alt="IconColor1" />
                            </div>
                        </div>
                        <div className="card">
                        <div className="card-div">
                                <div className="card-div-color1">
                                    <img  src={icon} alt="icon"/>
                                </div>
                                <h3 className="card_text">UI/UX Design</h3>
                            </div>
                            <h6 className="card-div-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna amet pellentesque vitae lorem ut.</h6>
                        </div>
                        <div className="card">
                        <div className="card-div">
                                <div className="card-div-color2">
                                    <img  src={Icon_Color1} alt="Icon_Color1"/>
                                </div>
                                <h3 className="card_text">Development</h3>
                            </div>
                            <h6 className="card-div-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h6>
                        </div>
                        <div className="card">
                        <div className="card-div">
                                <div className="card-div-color3">
                                    <img  src={IconTvColor} alt="IconTvColor"/>
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
