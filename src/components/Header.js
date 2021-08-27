import Logo from '../photo/Vector29.png';
import styled from 'styled-components'
import Search from '../components/common/Search';

const HeaderContent = styled.header`
    background: linear-gradient(0deg, #0F336D, #0F336D);
    height: 83px;
    padding: 0 100px;
    position: fixed; 
    z-index: 100;
    top: 0; 
    left: 0; 
    right: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${props => props.aero && 
    'background: linear-gradient(0deg, rgba(15, 51, 109, 0.49), rgba(15, 51, 109, 0.49));'}

    .logo {
        margin-top: auto;
        margin-bottom: auto;
        margin-right: 16px;
        &-title {
            font-weight: bold;
            font-size: 24px;
            line-height: 30px;
            color: #FFFFFF;
            margin-bottom: -10px;
        }
        &-sub-title {
            font-weight: 500;
            font-size: 14.5px;
            line-height: 30px;
            color: #FFFFFF;
        }
    }
`

const HeaderLogo = styled.a`
    display: flex;
    text-decoration: none;
`

const Header = ({aero}) => {
    return (
        <HeaderContent aero={aero}>
            <HeaderLogo href="/">
                <img className="logo" src={Logo} alt="Logo" />
                <div className="logo-body">
                    <div className="logo-title">SIGMA</div>
                    <span className="logo-sub-title">SOFTWARE SOLUTIONS</span>
                </div>
            </HeaderLogo>
            <Search></Search>
        </HeaderContent>
    )
}

export default Header