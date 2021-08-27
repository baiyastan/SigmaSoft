import Header from '../../components/Header'
import main from '../../photo/bereke/main.png'
import image1 from '../../photo/bereke/bereke1.png'
import image2 from '../../photo/bereke/bereke2.png'
import image3 from '../../photo/bereke/bereke3.png'
import image4 from '../../photo/bereke/bereke4.png'
import Footer from '../../components/Footer';
import { AeroHeader, AeroTitle, AeroBody, Container, Spacer } from '../../components/common/CommonCss'
import styled from 'styled-components'
import { useEffect } from 'react'
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const SubTitle = styled.p `
    font-size: 24px;
    line-height: 150%;
    color: #666666;
    margin-bottom: 98px;
    max-width: 1018px;
    margin: 0 auto 87px auto;
`
const ExtraSpace = styled.div`
    height: 23px;
`

const ErkaBereke = () => {
    useEffect (() => {
        const classes = [
            { name: '.erka-title', x: 0, y: -30, delay: 0.3 },
            { name: '.erka-sub-title', x: 0, y: -100, delay: 0.3 },
            { name: '.item-left', x: -100, y: 0, delay: 0.3 },
            { name: '.item-right', x: 100, y: 0, delay: 0.3 },
            { name: '.item1-left', x: -100, y: 0, delay: 0.3 },
            { name: '.item1-right', x: 100, y: 0, delay: 0.3 },
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
    })
    return <>
        <Header></Header>
        <Spacer></Spacer>
        <ExtraSpace></ExtraSpace>
        <main>
            <AeroHeader>
                <img src={main} alt="Erka bereke"></img>
            </AeroHeader>
            <AeroTitle className="erka-title" margin="87px 0 136px;">
                Erka Bereke
            </AeroTitle>
            <Container>
                <SubTitle className="erka-sub-title">
                    Представляем вашему вниманию онлайн-магазин Эрка Береке. После пандемии, люди все чаще прибегают к бесконтактному шоппингу, что повышает спрос на онлайн-магазины, поэтому каждый магазин имеет свой сайт или пользуется платной платформой-маркетплейс. 
                    Эрка Береке – онлайн-магазин с ярким дизайном и удобным интерфейсом, где каждый клиент почувствует себя в атмосфере магазина и легко найдет все нужное для покупок.                
                </SubTitle>
            </Container>
            <AeroBody itemBottom="114px">
                 <div className="item">
                    <img className="item-left" src={image1} alt="" />
                    <img className="item-right" src={image2} alt="" />
                </div>
                <div className="item">
                    <img className="item1-left" src={image3} alt="" />
                    <img className="item1-right" src={image4} alt="" />
                </div>
            </AeroBody>
        </main>
        <Footer></Footer>
    </>
}

export default ErkaBereke