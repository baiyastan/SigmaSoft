import React, { Component } from 'react';
import MaskGroup from '../../photo/Mask-Group.png';
import Group27 from '../../photo/Group27.png';
import Group26 from '../../photo/Group26.png';
import Group28 from '../../photo/Group28.png';
import GroupMac from '../../photo/GroupMac.png';
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
                        <div className="MaskGroupBg">
                            <img className="iphone" src={MaskGroup} alt="MaskGroup" />
                            <h4 className="MaskGrouph4">Project 01</h4>
                            <h5 className="MaskGrouph5">Kundoluk</h5>
                        </div>
                        <div className="MaskGroupBg1">
                            <img className="Group27" src={Group27} alt="Group27"/>
                            <img className="GroupMac" src={GroupMac} alt="GroupMac"/>
                            <h4 className="MaskGrouph">Project 02</h4>
                            <h5 className="MaskGrouphm">Umnaya Shkola</h5>
                        </div>
                        <div className="MaskGroupBg2">
                            <img className="Group27" src={Group26} alt="Group26"/>
                            <h4 className="MaskGrouph">Project 03</h4>
                            <h5 className="MaskGrouphm ty">Air Manas Flight Systems</h5>
                        </div>
                        <div className="MaskGroupBg3">
                            <img className="Group27 mac" src={Group28} alt="Group28"/>
                            <h4 className="MaskGrouph mac1">Project 04</h4>
                            <h5 className="MaskGrouphm mac2">Landing Page</h5>
                        </div>
                        
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
