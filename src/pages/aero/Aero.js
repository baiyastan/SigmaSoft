import Header from '../../components/Header'
import aeroImage from '../../photo/aero.jpg'
import aeroMain from '../../photo/aero/main.jpg'
import aeroPlot from '../../photo/aero/plot.jpg'
import aeroAnalytics from '../../photo/aero/analytics.jpg'
import aeroVisualization from '../../photo/aero/visualization.jpg'
import aeroVisualization2 from '../../photo/aero/visualization2.jpg'
import aeroDataInsight from '../../photo/aero/data-insight.jpg'
import aeroDataDetail from '../../photo/aero/data-detail.jpg'
import Footer from '../../components/Footer';
import { AeroHeader, AeroTitle, AeroBody } from '../../components/common/CommonCss'
import { useEffect } from 'react'
import gsap from "gsap";

import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const Aero = () => {
    useEffect (() => {
        const classes = [
            { name: '.aero-title', x: 0, y: -30, delay: 0.3 },
            { name: '.item1-left', x: -100, y: 0, delay: 0.3 },
            { name: '.item1-right', x: 100, y: 0, delay: 0.3 },
            { name: '.item2-left', x: -100, y: 0, delay: 0.3 },
            { name: '.item2-right', x: 100, y: 0, delay: 0.3 },
            { name: '.item3-left', x: -100, y: 0, delay: 0.3 },
            { name: '.item3-right', x: 100, y: 0, delay: 0.3 },
            { name: '.item4-left', x: -100, y: 0, delay: 0.3 },
            { name: '.item4-right', x: 100, y: 0, delay: 0.3 },
            { name: '.item5-left', x: -100, y: 0, delay: 0.3 },
            { name: '.item5-right', x: 100, y: 0, delay: 0.3 },
            { name: '.item6-left', x: -100, y: 0, delay: 0.3 },
            { name: '.item6-right', x: 100, y: 0, delay: 0.3 },
            { name: '.item7-left', x: -100, y: 0, delay: 0.3 },
            { name: '.item7-right', x: 100, y: 0, delay: 0.3 },
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
    return <div>
        <Header aero></Header>
        <main>
            <AeroHeader>
                <img src={aeroImage} alt="aero"></img>
            </AeroHeader>
            <AeroTitle className="aero-title">
                Flight Data Monitoring System
            </AeroTitle>
            <AeroBody>
                <div className="item">
                    <p className="item1-left">Представляем вам главный аналитический интерфейс нашей программы мониторинга полетных данных (FDM). Данные, полученные с помощью нашей программы FDM, используются для повышения эффективности и безопасности работы самолетов, а также для выведения рисков и предотвращения значительных неисправностей во время полета.</p>
                    <img className="item1-right" src={aeroMain} alt="" />
                </div>
                <div className="item">
                    <img className="item2-left" src={aeroVisualization} alt="" />
                    <p className="item2-right">Наша программа позволяет идентифицировать уровень и область технических неисправностей и рисков во время полета, и количественно оценить уровень безопасности, выделяя случаи нестандартных, необычных или небезопасных обстоятельств.</p>
                </div>
                <div className="item">
                    <p className="item3-left">Данные обрабатываются программным обеспечением, которое предоставляет конечному пользователю соответствующую серию рейсов и событий полета. Фильтрация этих рейсов и событий необходима для обеспечения хорошего уровня актуальности и согласованности в базе данных.</p>
                    <img className="item3-right" src={aeroAnalytics} alt="" />
                </div>
                <div className="item">
                    <img className="item4-left" src={aeroVisualization2} alt="" />
                    <div className="item__desc item4-right">
                        <span>Принцип FDM:</span>
                        <ul>
                            <li>Сбор данных о происшествиях во время полета;</li>
                            <li>Выявление рисков;</li>
                            <li>Оценка и аналитика рисков (сочетая вероятность возникновения и возможные последствия каждой опасности);</li>
                            <li>Определение и принятие мер по смягчению последствий;</li>
                            <li>Отслеживание за эффективностью смягчения последствий.</li>
                        </ul>
                        </div>
                </div>
                <div className="item">
                    <p className="item5-left">Наша программа FDM предоставляет возможность анализировать широкий спектр параметров и определять способствующие факторы, которые помогут оценить и понять основные причины происшествий во время эксплуатации - в дополнение к отчетам летного экипажа или интервью.</p>
                    <img className="item5-right" src={aeroDataInsight} alt="" />
                </div>
                <div className="item">
                    <img className="item6-left" src={aeroDataDetail} alt="" />
                    <p className="item6-right">Поскольку FDM собирает данные по всей авиакомпании, анализ, предоставляемый в еженедельных или ежемесячных отчетах, позволяет анализировать одно событие в общем контексте, а не сосредотачиваться на этом отдельном событии.</p>
                </div>
                <div className="item">
                    <p className="item7-left">Целью создания процесса FDM в авиакомпании является переход от чисто реактивного режима (анализ инцидентов на основе отчетов летного экипажа) к более проактивному режиму (раннее выявление нежелательных событий и реализация мер по смягчению последствий).</p>
                    <img className="item7-right" src={aeroPlot} alt="" />
                </div>
            </AeroBody>
        </main>
        <Footer></Footer>
    </div>
}

export default Aero