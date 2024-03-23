import './Take.scss'
import App from '../Img/app.svg'
import Google from '../Img/google.svg'
import Phone from '../Img/Phone.png'

function Take() {
    return (
        <>
            <section className='take'>
                <div className="container">
                    <div className="take__info">
                        <p className='take__text'>Take away</p>
                        <h1 className='take__heading'>Food Stalls with Persons but  to  Product marketing plane.</h1>
                        <p className='take__textt'>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipmentwith Persons but also  Just Food Stalls with Persons.</p>
                        <img className='take__icon' src={App} alt="App" width="163" height="48" />
                        <img className='take__icons' src={Google} alt="Google" width="179" height="48" />
                    </div>

                    <img className='take__img' src={Phone} alt="Phone" width={323} height={651} />
                </div>
            </section>
        </>
    )
}

export default Take;