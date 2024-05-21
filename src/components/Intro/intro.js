import React from "react";
import './intro.css';
import logo from '../../assets/logo.jpg';
const Intro = () => {
    return (
        <section id="intro">
            <div className="introContent">
                <span className="hello">مرحبا </span>
                <span className="Us"><a className="Name">SignEase</a>في</span>
                <p className="introText">  ملزمون بتمكين الأفراد تعلم لغة الإشارة وتحسين التواصل مع الصم لبناء مجتمع أكثر شمولا وتفاعلية  </p>
                <img className="logo" src={logo} alt="logo"></img>
            </div>

        </section>
    )
}

export default Intro; 