import Header from '../../components/Header'
import main from '../../photo/kundoluk/main.png'
import analytics from '../../photo/kundoluk/analytics.png'
import admin from '../../photo/kundoluk/admin.png'
import possibility from '../../photo/kundoluk/possibility.png'
import course from '../../photo/kundoluk/courses.png'
import grades from '../../photo/kundoluk/grades.png'
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
`
const Kundoluk = () => {
    useEffect (() => {
        const classes = [
            { name: '.kun-title', x: 0, y: -30, delay: 0.3 },
            { name: '.kun-sub-title', x: 0, y: -30, delay: 0.6 },
            { name: '.item1-left', x: -100, y: 0, delay: 0.8 },
            { name: '.item1-right', x: 100, y: 0, delay: 0.8 },
            { name: '.item2-left', x: -100, y: 0, delay: 0.8 },
            { name: '.item2-right', x: 100, y: 0, delay: 0.8 },
            { name: '.item3-left', x: -100, y: 0, delay: 0.8 },
            { name: '.item3-right', x: 100, y: 0, delay: 0.8 },
            { name: '.item4-left', x: -100, y: 0, delay: 0.8 },
            { name: '.item4-right', x: 100, y: 0, delay: 0.8 },
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
        <main>
            <AeroHeader>
                <img src={main} alt="kundoluk"></img>
            </AeroHeader>
            <AeroTitle className="kun-title" margin="20px 0 27px;">
                Kundoluk
            </AeroTitle>
            <Container>
                <SubTitle className="kun-sub-title">
                    Мы помогаем школам идти в ногу со временем, создавая лучшие цифровые решения.
                </SubTitle>
            </Container>
            <AeroBody>
                <div className="item">
                    <div className="item1-left">
                        <p>Возможности для учителей</p>
                        <p>
                        Выставление оценок в электронном журнале
                        Внесение и редактирование расписания занятий
                        Создание домашних заданий с прикреплением файлов
                        Выставление итоговых оценок и отметок о пропусках
                        Создание внеклассных занятий
                        Отправка сообщений родителям индивидуально
                        Автоматическая аналитика и отчеты
                        Просмотр статистики по ученику или по классу
                        </p>
                    </div>
                    <img className="item1-right" src={analytics} alt="" />
                </div>
                <div className="item">
                    <img className="item2-left" src={possibility} alt="" />
                    <div className="item2-right">
                        <p>Возможности для родителей</p>
                        <p>
                            Всё об успеваемости и оценках ребенка
                            Подробные домашния задания
                            Ежедневное расписание занятий
                            Данные о посещаемости и поведении ребёнка
                            Оповещения о контрольных работах
                            Сообщения о предстоящих мероприятиях
                            Рейтинг успеваемости ребёнка по классу
                            Прямая связь с учителями
                        </p>
                    </div>
                </div>
                <div className="item">
                    <div className="item3-left">
                        <p>Возможности для администрации школы</p>

                        <p>
                        Общий контроль ведения базы данных
                        Просмотр и экспорт отчётов об успеваемости
                        Просмотр и экспорт отчётов о посещаемости
                        Полный мониторинг учителей и учащихся
                        Обмен сообщениями между всеми пользователями
                        Различные виды статистики по школе, классу или ученику
                        </p>
                    </div>
                    <img className="item3-right" src={admin} alt="" />
                </div>
                <div className="item">
                    <img className="item4-left" src={course} alt="" />
                    <img className="item4-right" src={grades} alt="" />
                </div>
            </AeroBody>
        </main>
        <Footer></Footer>
    </>
}

export default Kundoluk