import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import './Contact.css'
import { MdOutlineEmail } from 'react-icons/md'
import { RiMessengerLine } from 'react-icons/ri'
import { BsWhatsapp } from 'react-icons/bs'

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_pm6yz85', 'template_rasc2kf', form.current, 'user_d00LsotJL8acQeAe8nzdo')
            .then((result) => {
                e.target.reset()
                alert('E-mail sent')
                console.log(result.text);
            }, (error) => {
                alert('There was an error, please try again.')
                console.log(error.text);
            });
    };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className="container contact__container">
                <div className="contact__options">
                    <article className="contact__option">
                        <MdOutlineEmail className='contact__option-icon' />
                        <h4>Email</h4>
                        <h5>neto@carlosnetodev.com</h5>
                        <a href="mailto:neto@carlosnetodev.com" target='_blank'>Send me a message</a>
                    </article>
                    <article className="contact__option">
                        <RiMessengerLine className='contact__option-icon' />
                        <h4>Facebook Messenger</h4>
                        <h5>Carlos Frinka Neto</h5>
                        <a href="https://m.me/carisfreez" target='_blank'>Send me a message</a>
                    </article>
                    <article className="contact__option">
                        <BsWhatsapp className='contact__option-icon' />
                        <h4>Whatsapp</h4>
                        <a href="https://api.whatsapp.com/send?phone=+5516981541659" target='_blank'>Send me a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Full Name' required />
                    <input type="email" name='email' placeholder='Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Submit Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact