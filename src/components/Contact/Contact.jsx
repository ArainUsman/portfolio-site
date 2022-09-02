import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser';
import './Contact.css'

const Contact = () => {
    const form = useRef();

    const [done, setDone] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_53yhi6i', 'template_0jhk4yn', form.current, 'u7xk91eLrs7mErHTO')
            .then((result) => {
                setDone(true)
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <div className='contact-form' id='Contact'>
            <div className="c-left">
                <div className="awesome">
                    <span>Get in touch</span>
                    <span>Contact me</span>
                    <div className="blur c-blur1"></div>
                </div>
            </div>
            <div className="c-right">
                <form ref={form} onSubmit={sendEmail} >
                    <input type="text" name="user-name" className='user' placeholder='Enter Your Name' />
                    <input type="email" name="user-email" className='user' placeholder='Enter Your Email' />
                    <textarea name="message" className='user' cols="50" rows="10" placeholder='How may I help you' />
                    <input type="submit" value='send' className="button contact-btn" />
                    <span>{done && 'Sent Successfully'}</span>
                    <div className="blur c-blur2"></div>
                </form>
            </div>
        </div>
    )
}

export default Contact
