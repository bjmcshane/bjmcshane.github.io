import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    // there's supposed to be code here for the hover effect, can't seem to get it to work
    const [letterClass, setLetterClass] = useState('text-animate')
    const strArr = 'Contact me'.split('')
    const refForm = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        console.log(refForm.current)
    
        emailjs.sendForm(
            'service_xk92knd',
            'template_0hqrcdj',
            refForm.current,
            'kquHycYihdOqWvgmM'
        )
        .then(
            (result) => {
                alert("Message successfully sent!")
                console.log(result)
                window.location.reload(false)
            },
            (error) => {
                console.log(error)
                alert("Failed to send the message, try again")
                
            }
        )
    }

    return (
        <>
            <div className="container contact-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={strArr} idx={15}/>
                    </h1>
                    <p>
                        I am interested in freelance opporunities - especially on ambitious
                        or large projects. However, if you have any other requests or
                        questions, don't hesitate to contact me using below form either.
                    </p>
                    <div className='contact-form'>
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type="text" name="name" placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type="email" name="email" placeholder='Email' required />
                                </li>
                                <li >
                                    <input placeholder="Subject" type="text" name="subject" required />
                                </li>
                                <li >
                                    <textarea placeholder="Message" name="message" required />
                                </li>
                                <li >
                                    <input type="submit" className="flat-button" value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact