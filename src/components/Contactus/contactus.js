import React, { useRef } from "react";
import '../Contactus/contactus.css';
import facebook from '../../assets/facebook.png';
import insagram from '../../assets/instagram.png';
import gihup from '../../assets/github.png';
import emailjs from '@emailjs/browser';
import { useNavigate } from "react-router-dom";
import { Routes, Route, Router, BrowserRouter } from "react-router-dom";
const ContactUs = () => {

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_g6cpb66', 'template_p8igb2c', form.current, {
                publicKey: 'nJFVwKf-MGD0bTu2N',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    e.target.reset();
                    alert('تم إرسال رسالتك ');

                },
                (error) => {
                    console.log('FAILED...', error.text);
                },
            );
    };
    return (
        <div id="contactus">
            <h1 className="Title">تواصل معنا</h1>
            <span className="contactdes">تواصل معنا سنسعى للرد في أسرع وقت</span>
            <form className="contactform" ref={form} onSubmit={sendEmail}>
                <input type="text " className="name" placeholder="الإسم" name="user_name"></input>
                <input type="email " className="email" required placeholder="الإيميل" name="user_email"></input>
                <textarea className="mesaage" name="message" rows={5} placeholder="رسالتك" required></textarea>
                <button type="submit" value='أرسل' className="submitBtn">أرسل</button>
                <div className="links">

                    <a href="https://web.facebook.com"> <img src={insagram} alt="instagram" className="link"></img></a>
                    <a ><img src={facebook} alt="instagram" className="link"></img></a>
                    <a> <img src={gihup} alt="github" className="link"></img></a>
                </div>
            </form>
        </div>
    )
}

export default ContactUs;