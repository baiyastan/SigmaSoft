import React, { Component } from 'react';
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger"; 
import kundoluk from '../../photo/kundoluk.svg';
import fdm from '../../photo/fdm.svg';
import erkaBereke from '../../photo/erka-bereke.svg';
import './Work.css';
gsap.registerPlugin(ScrollTrigger);

export class Work extends Component {
    componentDidMount () {
        const classes = [
            { name: '.work-text', x: 0, y: -30, delay: 0.3 },
            { name: '.work-text-h6', x: 0, y: -30, delay: 0.6 },
            { name: '.MaskGroupBg-left', x: -100, y: 0, delay: 0.8 },
            { name: '.MaskGroupBg-right', x: 100, y: 0, delay: 0.8 },
            { name: '.btn-work', x: -100, y: 0, delay: 0.8 },
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
                        <a href="/kundoluk" className="MaskGroupBg MaskGroupBg-left bottom">
                            <div class="title">
                                <h3>Kundoluk</h3>
                            </div>
                            <img className="iphone" src={kundoluk} alt="MaskGroup" />
                        </a>
                        <a href="/aero" className="MaskGroupBg MaskGroupBg-right red left">
                            <img className="" src={fdm} alt="Group26" />
                            <div class="title">
                                <h3 class="right small">Air Manas<br /> Flight Systems</h3>
                            </div>
                        </a>
                        <a href="/erka-bereke" className="MaskGroupBg MaskGroupBg-left green">
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
