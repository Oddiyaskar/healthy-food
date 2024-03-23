import './Footer.scss'
import Logo from '../Img/Logo.svg'
import Instagram from '../Img/Instagram.svg'
import Facebook from '../Img/facebook.svg'
import Twitter from '../Img/twitter.svg'
import YouTube from '../Img/YouTube.svg'

function Footer() {
    return (
        <>
            <footer className='footer'>
                <div className="container">
                    <div className="footer__info">
                        <ul className='footer__list'>
                            <li className='footer__item'>
                                <img className='footer__logo' src={Logo} alt="Logo" width={61} height={60} />
                            </li>

                            <li className='footer__item'>
                                <a className='footer__link' href="#link">www.company name.com</a>
                            </li>

                            <li className='footer__item'>
                                <a className='footer__link' href="#link">companyname@gmail.com</a>
                            </li>

                            <li className='footer__item'>
                                <a className='footer__link' href="#link">Phone: +7 485-118-03-25</a>
                            </li>
                        </ul>

                        <ul className='footer__list1'>
                            <li className='footer__item'>
                                <h5 className='footer__heading'>Home</h5>
                            </li>

                            <li className='footer__item'>
                                <a className='footer__link' href="#link">Landingpage</a>
                            </li>

                            <li className='footer__item'>
                                <a className='footer__link' href="#link">Documentation</a>
                            </li>

                            <li className='footer__item'>
                                <a className='footer__link' href="#link">Referral Program</a>
                            </li>

                            <li className='footer__item'>
                                <a className='footer__link' href="#link">UI & UX Design</a>
                            </li>

                            <li className='footer__item'>
                                <a className='footer__link' href="#link">Web Design</a>
                            </li>
                        </ul>

                        <ul className='footer__list1'>
                            <li className='footer__item'>
                                <h5 className='footer__heading'>Menu</h5>
                            </li>

                            <li className='footer__item'>
                                <a className='footer__link' href="#link">Landingpage</a>
                            </li>

                            <li className='footer__item'>
                                <a className='footer__link' href="#link">Documentation</a>
                            </li>

                            <li className='footer__item'>
                                <a className='footer__link' href="#link">Referral Program</a>
                            </li>

                            <li className='footer__item'>
                                <a className='footer__link' href="#link">UI & UX Design</a>
                            </li>

                            <li className='footer__item'>
                                <a className='footer__link' href="#link">Web Design</a>
                            </li>
                        </ul>

                        <ul className='footer__list1'>
                            <li className='footer__item'>
                                <h5 className='footer__heading'>Company</h5>
                            </li>

                            <li className='footer__item'>
                                <a className='footer__link' href="#link">Landingpage</a>
                            </li>

                            <li className='footer__item'>
                                <a className='footer__link' href="#link">Documentation</a>
                            </li>

                            <li className='footer__item'>
                                <a className='footer__link' href="#link">Referral Program</a>
                            </li>

                            <li className='footer__item1'>
                                <img className='footer__icon' src={Instagram} alt="Instagram" width="21" height="21" />
                                <img className='footer__icon' src={Facebook} alt="Facebook" width="21" height="21" />
                                <img className='footer__icon' src={Twitter} alt="Twitter" width="21" height="21" />
                                <img className='footer__icon' src={YouTube} alt="YouTube" width="21" height="21" />
                            </li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;