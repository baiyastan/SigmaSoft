import MainFooter from './Footer/Footer'
import styled from 'styled-components'
import gsap from "gsap";
import { useEffect } from 'react';

import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const StartProject = styled.section`
    font-family: 'Roboto', sans-serif;
    display: flex;
    justify-content: center;

    .card {
        background: #FFFFFF;
        box-shadow: 0px 0px 7px rgba(0, 0, 0, 0.25);
        border-radius: 4px;
        height: 278px;
        padding: 0 76px 0 74px;
        display: flex;
        min-width: 1028px;
        align-items: center;
        margin-top: 56px;
        margin-bottom: 216px;
        justify-content: space-between;

        &__title {
            font-weight: bold;
            font-size: 46px;
            line-height: 52px;
            color: #1E266D;
        }
        &__btn {
            background: linear-gradient(180deg, #5EFFBE 0%, #009B5D 100%);
            border-radius: 4px;
            border: none;
            outline: none;
            font-size: 24px;
            line-height: 150%;
            color: #FFFFFF;
            height: 51px;
            width: 252.32px;
        }
    }
`
const Footer = () => {
    useEffect (() => {
        const classes = [
            { name: '.card', x: 0, y: 0, delay: 0.5 },
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
                    start: 'top bottom-=100px',
                    toggleActions: 'restart none none none'
                },
              });
        })
    })
    return (
        <div>
            <StartProject>
                <div className="card">
                    <h2 className="card__title">Ready to launch<br/> your app and website?</h2>
                    <button className="card__btn">Start Project</button>
                </div>
            </StartProject>
            <MainFooter></MainFooter>
        </div>
    )
}

export default Footer