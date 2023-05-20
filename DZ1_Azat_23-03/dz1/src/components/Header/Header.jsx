import Container from "../Container/Container";
import Logo from "../../assets/logo.svg"
import Telegram from "../../assets/telegram.png"
import { NavLink } from "react-router-dom";


const Header = ({  }) => {
    return (
        <Container sectionName="header">
            <NavLink to={ '/' }>Logo</NavLink>
            <nav>
                <ul>
                    <li><NavLink to={'/'}>
                        Main
                    </NavLink></li>
                    <li><NavLink to={'/add'}>
                        Add Post
                    </NavLink></li>
                    <li><NavLink to={'/about'}>
                        About Us
                    </NavLink></li>
                    <li><NavLink to={'/login'}>
                        Login
                    </NavLink></li>
                </ul>
            </nav>
            <a href="https://t.me/azatsun2" target="_blank">Telegram</a>
        </Container>
    )
}


export default Header