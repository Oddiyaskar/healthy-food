import './Food.scss'
import Home from '../Img/Home.svg'
import Group from '../Img/Group.svg'
import Super from '../Img/super.svg'

function Food() {
    return (
        <>
            <section className='food'>
                <div className="container">
                    <p className='food__text'>Features</p>
                    <h2 className='food__heading'>Food With A New Passion</h2>

                    <ul className='food__list'>
                        <li className='food__item'>
                            <div className="food__info">
                                <img className='food__img' src={Home} alt="Home" width="45" height="45" />
                            </div>
                            <h3 className='food__title'>Quality Food</h3>
                            <p className='food__textt'>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                        </li>

                        <li className='food__item'>
                            <div className="food__info">
                                <img className='food__img' src={Group} alt="Group" width="45" height="45" />
                            </div>
                            <h3 className='food__title'>Food Delivery</h3>
                            <p className='food__textt'>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                        </li>

                        <li className='food__item'>
                            <div className="food__info">
                                <img className='food__img' src={Super} alt="Super" width="45" height="45" />
                            </div>
                            <h3 className='food__title'>Super Taste</h3>
                            <p className='food__textt'>It can be a very secure path to earn good money and make you very successful creative entrepreneur.</p>
                        </li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Food;