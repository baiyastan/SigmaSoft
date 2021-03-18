import React, { Component } from 'react';
import './Footer.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';

export class Footer extends Component { 
    
    render() {
          
        return (
            <div className="Footer">
                <div className="container">
                    <div className="footer-block">
                        <div className="item">
                            <h6 className="itemh6">Наш Адрес</h6>
                            <div className="span">​Ахунбаева, 103 </div>
                            <div className="span">​Ленинский район, Бишкек, 720000 </div>
                            <div className="span">​8 этаж (Sigmasoft Ltd)</div>
                        </div>
                        <div className="item">
                            <h6 className="itemh6">Сообщество</h6>
                            <div className="span">Для разработчиков</div>
                            <div className="span">​Facebook Group </div>
                            <div className="span">FAQ </div>
                        </div>
                        <div className="item">
                            <h6 className="itemh6">О Нас</h6>
                            <div className="span">Наша Команда  </div>
                            <div className="span">​Наша История</div>
                            <div className="span">​Вакансии</div>
                        </div>
                        <div className="item">
                            <h6 className="itemh6">Контакты</h6>
                            <div className="div">+996-550-123-3546 </div>
                            <div className="div">info.marketing@sigma.io</div>

                        </div>
                    </div>
                    <div className="footer-line"></div>
                    <div className="footer-end">
                        
                        <div className="footer-end-text">© SigmaSoft 2021, Все права защищены.</div>
                        <div className="footer-icon">
                            <a className="Footer-icons" href="/"><TwitterIcon/></a>
                            <a className="Footer-icons" href="https://www.facebook.com/SigmaSoftt"><FacebookIcon /></a>
                            <a className="Footer-icons" href="https://www.instagram.com/sigma.io/"><InstagramIcon /></a>
                            
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
