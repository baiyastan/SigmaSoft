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

const Aero = () => {
    return <div>
        <Header aero></Header>
        <main>
            <AeroHeader>
                <img src={aeroImage} alt="aero"></img>
            </AeroHeader>
            <AeroTitle>
                Flight Data Monitoring System
            </AeroTitle>
            <AeroBody>
                <div className="item">
                    <p>Представляем вам главный аналитический интерфейс нашей программы мониторинга полетных данных (FDM). Данные, полученные с помощью нашей программы FDM, используются для повышения эффективности и безопасности работы самолетов, а также для выведения рисков и предотвращения значительных неисправностей во время полета.</p>
                    <img src={aeroMain} alt="" />
                </div>
                <div className="item">
                    <img src={aeroVisualization} alt="" />
                    <p>Наша программа позволяет идентифицировать уровень и область технических неисправностей и рисков во время полета, и количественно оценить уровень безопасности, выделяя случаи нестандартных, необычных или небезопасных обстоятельств.</p>
                </div>
                <div className="item">
                    <p>Данные обрабатываются программным обеспечением, которое предоставляет конечному пользователю соответствующую серию рейсов и событий полета. Фильтрация этих рейсов и событий необходима для обеспечения хорошего уровня актуальности и согласованности в базе данных.</p>
                    <img src={aeroAnalytics} alt="" />
                </div>
                <div className="item">
                    <img src={aeroVisualization2} alt="" />
                    <div className="item__desc">
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
                    <p>Наша программа FDM предоставляет возможность анализировать широкий спектр параметров и определять способствующие факторы, которые помогут оценить и понять основные причины происшествий во время эксплуатации - в дополнение к отчетам летного экипажа или интервью.</p>
                    <img src={aeroDataInsight} alt="" />
                </div>
                <div className="item">
                    <img src={aeroDataDetail} alt="" />
                    <p>Поскольку FDM собирает данные по всей авиакомпании, анализ, предоставляемый в еженедельных или ежемесячных отчетах, позволяет анализировать одно событие в общем контексте, а не сосредотачиваться на этом отдельном событии.</p>
                </div>
                <div className="item">
                    <p>Целью создания процесса FDM в авиакомпании является переход от чисто реактивного режима (анализ инцидентов на основе отчетов летного экипажа) к более проактивному режиму (раннее выявление нежелательных событий и реализация мер по смягчению последствий).</p>
                    <img src={aeroPlot} alt="" />
                </div>
            </AeroBody>
        </main>
        <Footer></Footer>
    </div>
}

export default Aero