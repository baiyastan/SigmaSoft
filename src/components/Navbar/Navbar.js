import React, { Component } from 'react';
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
import freelancer from '../../photo/freelancer.png';
import Vector from '../../photo/Vector29.png';
import './Navbar.css';
import Search from '../common/Search';

gsap.registerPlugin(ScrollTrigger); 
export class Navbar extends Component {

    componentDidMount() {
        const classes = ['.nav-span-text', '.nav-span-text-h5', '.button-yellow']
        classes.forEach((i, index) => {
            gsap.from(i, {
                duration: 2,
                opacity: 0, 
                delay: 0.5 * (index + 1), 
                x: -100,
                stagger: 0.2,
                ease: "power2", 
                force3D: true,
                scrollTrigger: {
                    trigger: i,
                    toggleActions: 'restart none none none'
                },
              });
        })
    }
    
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
                            <Search></Search>
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
