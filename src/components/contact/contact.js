import {React, useRef} from "react";
import { FaLinkedin, FaGithub, FaInstagram, FaTelegram } from 'react-icons/fa';
import './contact.css';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_r04wmf5', 'template_1p1ap2a', form.current, 'EZc3QXFdTxxG7CAiT')
            .then(
                (result) => {
                console.log('SUCCESS!', result.text);
                e.target.reset();
                alert("Message sent successfully! I'll get back to you as soon as possible.");
                },
                (error) => {
                console.log('FAILED...', error.text);
                }
            );

    };
    return (
        <section id="contactPage">
            <div className="contactTitle">Contact Me</div>
            <div className="contactDesc">
                Drop me an email or find my socials. I'll try my best to get back to you!
            </div>
            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                <input type="text" className="name" placeholder="Name" name="your_name" required/>
                <input type="email" className="email" placeholder="Email" name="your_email" required/>
                <textarea className="msg" name="message" rows="5" placeholder="Message" required></textarea>
                <button type="submit" className="submitBtn" value="Send">Submit</button>
                <div className="contactSocials">
                    <a href="https://www.linkedin.com/in/irwyn-liong" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="link" />
                    </a>
                    <a href="https://github.com/irwynliong" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="link" />
                    </a>
                    <a href="https://www.instagram.com/_irwyn" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className="link" />
                    </a>
                    <a href="https://t.me/irwynnn" target="_blank" rel="noopener noreferrer">
                        <FaTelegram className="link" />
                    </a>
                </div>
            </form>
        </section>
    );
}

export default Contact;