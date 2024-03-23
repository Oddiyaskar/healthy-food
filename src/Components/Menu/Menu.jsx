import './Menu.scss'
import Vegie from '../Img/Vegie.png'
import Salads from '../Img/Salads.png'
import Burger from '../Img/Burger.png'
import Steak from '../Img/Steak.png'
import Egg from '../Img/Egg.png'
import Peach from '../Img/Peach.png'
import Four from '../Img/four.svg'
import Five from '../Img/five.svg'
import Three from '../Img/three.svg'
import Two from '../Img/two.svg'

function Menu() {
    return (
        <>
            <section className='menu'>
                <div className="container">
                    <p className='menu__text'>Menu</p>
                    <h5 className='menu__heading'>Food Full of treaty Love</h5>
                    <p className='menu__textt'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers,</p>

                    <ul className='menu__list'>
                        <li className='menu__item'>
                            <img className='menu__img' src={Vegie} alt="Vegie" width={360} height={264} />
                            <div className="menu__info">
                                <h6 className='menu__title'>Vegie Muffen</h6>
                                <h6 className='menu__headline'>16$</h6>
                            </div>
                            <p className='menu__text1'>There are many things are needed to start the Fast Food Business.</p>
                            <button className='menu__btn'>+</button>
                            <img className='menu__icon' src={Four} alt="Four" width="88" height="16" /> 
                        </li>

                        <li className='menu__item'>
                            <img className='menu__img' src={Salads} alt="Salads" width={360} height={264} />
                            <div className="menu__info">
                                <h6 className='menu__title'>Salads</h6>
                                <h6 className='menu__headline'>12$</h6>
                            </div>
                            <p className='menu__text1'>There are many things are needed to start the Fast Food Business.</p>
                            <button className='menu__btn'>+</button>
                            <img className='menu__icon' src={Five} alt="Five" width="88" height="16" /> 
                        </li>

                        <li className='menu__item'>
                            <img className='menu__img' src={Burger} alt="Burger" width={360} height={264} />
                            <div className="menu__info">
                                <h6 className='menu__title'>Burger</h6>
                                <h6 className='menu__headline'>10$</h6>
                            </div>
                            <p className='menu__text1'>There are many things are needed to start the Fast Food Business.</p>
                            <button className='menu__btn'>+</button>
                            <img className='menu__icon' src={Three} alt="Three" width="88" height="16" /> 
                        </li>

                        <li className='menu__item'>
                            <img className='menu__img' src={Steak} alt="Steak" width={360} height={264} />
                            <div className="menu__info">
                                <h6 className='menu__title'>Delmonico Steak dish</h6>
                                <h6 className='menu__headline'>14$</h6>
                            </div>
                            <p className='menu__text1'>There are many things are needed to start the Fast Food Business.</p>
                            <button className='menu__btn'>+</button>
                            <img className='menu__icon' src={Two} alt="Two" width="88" height="16" /> 
                        </li>

                        <li className='menu__item'>
                            <img className='menu__img' src={Egg} alt="Egg" width={360} height={264} />
                            <div className="menu__info">
                                <h6 className='menu__title'>Egg Masala</h6>
                                <h6 className='menu__headline'>9$</h6>
                            </div>
                            <p className='menu__text1'>There are many things are needed to start the Fast Food Business.</p>
                            <button className='menu__btn'>+</button>
                            <img className='menu__icon' src={Four} alt="Four" width="88" height="16" /> 
                        </li>

                        <li className='menu__item'>
                            <img className='menu__img' src={Peach} alt="Peach" width={360} height={264} />
                            <div className="menu__info">
                                <h6 className='menu__title'>Peach Melba dish</h6>
                                <h6 className='menu__headline'>15$</h6>
                            </div>
                            <p className='menu__text1'>There are many things are needed to start the Fast Food Business.</p>
                            <button className='menu__btn'>+</button>
                            <img className='menu__icon' src={Three} alt="Three" width="88" height="16" /> 
                        </li>
                    </ul>
                    <button className='menu__button'>Learn More</button>
                </div>
            </section>
        </>
    )
}

export default Menu;