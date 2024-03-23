import './Great.scss'
import Ong from '../Img/ong.svg'
import Chap from '../Img/chap.svg'
import August from '../Img/August.png'
import Four from '../Img/four.svg'

function Great() {
    return (
        <>
            <section className='great'>
                <div className="container">
                    <p className='great__text'>Testimonial</p>
                    <h2 className='great__heading'>Making Food great again and again</h2>
                    <p className='great__textt'>You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc to make your.</p>
                    <div className="great__info">
                        <img className='great__icon' src={Ong} alt="Ong" width="10" height="16" />
                        <div className="great__div">
                            <img className='great__img' src={August} alt="August" width={139} height={139} />
                            <p className='great__text1'>You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, Effective Product catlogues etc very successful to make your.</p>
                            <img className='great__iconca' src={Four} alt="Four" width={88} height={16} />
                            <h3 className='great__title'>Augusta W. Reynoso</h3>
                            <p className='great__text2'>UI&UX DeSIGNER</p>
                        </div>
                        <img className='great__icons' src={Chap} alt="Chap" width="10" height="16" />
                    </div>
                </div>
            </section>
        </>
    )
}

export default Great;