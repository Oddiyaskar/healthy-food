import "./About.scss"
import Mask from '../Img/Mask.png' 

function About() {
    return (
        <>
            <section className="about">
                <div className="container">
                    <img className="about__img" src={Mask} alt="Mask" width={555} height={500} />

                    <div className="about__info">
                        <p className="about__text">About us</p>
                        <h4 className="about__heading">Food Stalls with Persons but  to Product marketing plane catlogues etc to.</h4>
                        <p className="about__textt">There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also equipment  make your marketing plane Effective.</p>
                        <button className="about__btn">Read More</button>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About;