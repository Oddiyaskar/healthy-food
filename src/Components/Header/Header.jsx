import './Header.scss'
import Logo from '../Img/Logo.svg'

function Header() {
    return (
        <>
            <header className='header'>
                <div className="container">
                    <a className='header__link' href="#link">
                        <img className='header__logo' src={Logo} alt="Logo" width="44" height="43" />
                    </a>

                    <nav className='nav'>
                        <ul className='nav__list'>
                            <li className='nav__item'>
                                <a className='nav__link' href="#link">Home</a>
                            </li>

                            <li className='nav__item'>
                                <a className='nav__link' href="#link">About us</a>
                            </li>

                            <li className='nav__item'>
                                <a className='nav__link' href="#link">Menu</a>
                            </li>

                            <li className='nav__item'>
                                <a className='nav__link' href="#link">Features</a>
                            </li>

                            <li className='nav__item'>
                                <a className='nav__link' href="#link">Contact us</a>
                            </li>
                        </ul>
                    </nav>

                    <button className='header__btn'>Booking Now</button>
                </div>
            </header>
        </>
    )
}

export default Header;