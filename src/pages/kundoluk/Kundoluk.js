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
const SubTitle = styled.p `
    font-size: 24px;
    line-height: 150%;
    color: #666666;
    margin-bottom: 98px;
`
const Kundoluk = () => {
    return <>
        <Header></Header>
        <Spacer></Spacer>
        <main>
            <AeroHeader>
                <img src={main} alt="kundoluk"></img>
            </AeroHeader>
            <AeroTitle margin="20px 0 27px;">
                Kundoluk
            </AeroTitle>
            <Container>
                <SubTitle>
                    Мы помогаем школам идти в ногу со временем, создавая лучшие цифровые решения.
                </SubTitle>
            </Container>
            <AeroBody>
                <div className="item">
                    <div>
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
                    <img src={analytics} alt="" />
                </div>
                <div className="item">
                    <img src={possibility} alt="" />
                    <div>
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
                    <div>
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
                    <img src={admin} alt="" />
                </div>
                <div className="item">
                    <img src={course} alt="" />
                    <img src={grades} alt="" />
                </div>
            </AeroBody>
        </main>
        <Footer></Footer>
    </>
}

export default Kundoluk