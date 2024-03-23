import './Contact.scss'

function Contact() {
    return (
        <>
            <section className='contact'>
                <div className="container">
                    <p className='contact__text'>Contact</p>
                    <h4 className='contact__heading'>Food Stalls with Persons but also specialized equipment, Skills to manage.</h4>
                    <input className='contact__input' type="text" placeholder='Enter your message' />
                    <button className='contact__btn'>Send</button>
                </div>
            </section>
        </>
    )
}

export default Contact;