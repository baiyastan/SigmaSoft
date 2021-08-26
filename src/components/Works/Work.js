import React, { Component } from 'react';
import kundoluk from '../../photo/kundoluk.svg';
import umnayaShkola from '../../photo/umnaya-shkola.svg';
import fdm from '../../photo/fdm.svg';
import erkaBereke from '../../photo/erka-bereke.svg';
import './Work.css';

export class Work extends Component {
    render() {
        return (
            <div className="Work">
                <div className="work-Ellipse">
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                </div>
                <div className="work-container">
                    <h2 className="work-text">Featured Works</h2>
                    <div className="text-container">
                        <h6 className="work-text-h6">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
                        </h6>
                    </div>
                    <div className="MaskGroup">
                        <a href="/kundoluk" className="MaskGroupBg bottom">
                            <div class="title">
                                <h3>Kundoluk</h3>
                            </div>
                            <img className="iphone" src={kundoluk} alt="MaskGroup" />
                        </a>
                        <a href="/aero" className="MaskGroupBg red left">
                            <img className="" src={fdm} alt="Group26" />
                            <div class="title">
                                <h3 class="right small">Air Manas<br /> Flight Systems</h3>
                            </div>
                        </a>
                        <a href="/erka-bereke" className="MaskGroupBg green">
                            <img className="" src={erkaBereke} alt="Group28" />
                            <div class="title">
                                <h3 className="">Erka<br/> bereke</h3>
                            </div>
                        </a>

                    </div>
                    <div className="work-btn-end">
                        <button className="btn-work">Show all our works</button>
                    </div>
                </div>
                <div className="end">
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                    <div className="Ellipse"></div>
                </div>
            </div>
        )
    }
}

export default Work
