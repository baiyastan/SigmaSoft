import Logo from '../photo/Vector29.png';
import styled from 'styled-components'

const HeaderContent = styled.header`
    background: linear-gradient(0deg, #0F336D, #0F336D);
    height: 83px;
    padding: 0 100px;
    position: fixed; 
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
const HeaderSearch = styled.div`
    button {
        outline: none;
        border: none;
        background: inherit;
        cursor: pointer;
    }
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
            <HeaderSearch>
                <button>
                    <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M19.25 17H18.065L17.645 16.595C19.115 14.885 20 12.665 20 10.25C20 4.865 15.635 0.5 10.25 0.5C4.865 0.5 0.5 4.865 0.5 10.25C0.5 15.635 4.865 20 10.25 20C12.665 20 14.885 19.115 16.595 17.645L17 18.065V19.25L24.5 26.735L26.735 24.5L19.25 17ZM10.25 17C6.515 17 3.5 13.985 3.5 10.25C3.5 6.515 6.515 3.5 10.25 3.5C13.985 3.5 17 6.515 17 10.25C17 13.985 13.985 17 10.25 17Z" fill="white" />
                    </svg>
                </button>
            </HeaderSearch>
        </HeaderContent>
    )
}

export default Header