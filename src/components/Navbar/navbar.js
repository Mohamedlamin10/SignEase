import { React, useState } from "react";
import '../Navbar/navbar.css'
import logo from '../../assets/logo.png'
import { Link } from "react-scroll";
import menu from '../../assets/menu.png'
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
    const [Top, setTop] = useState(0)
    const [Position, setPositin] = useState('sticky')
    const lastScrolTop = 0;
    window.addEventListener("scroll", function () {
        /* const scrollTop = this.window.pageYOffset || document.documentElement.scrollTop;
         if (scrollTop > lastScrolTop) {
             setTop(-80)
         }*/
        if (window.pageYOffset > 100) {
            setPositin('fixed');
            setTop(0);
        } else {
            setPositin('absolute');
            setTop(70);
        }

    })
    const [showMenu, setShowMenu] = useState(false);
    return (
        <nav className="navbar" style={{ top: Top, position: { Position } }}>
            <a className="Name">SignEase</a>
            <div className="desktopMenu">
                <Link className="desktopMenuListItem" spy={true} activeClass="active" to="intro" smooth={true} offset={-50} duration={500}> الصفحة الرئيسية </Link>
                <Link className="desktopMenuListItem" spy={true} activeClass="active" to="gallary" smooth={true} offset={-50} duration={500}> واجهات التطبيق</Link>
                <Link className="desktopMenuListItem" spy={true} activeClass="active" to="luangeSigen" smooth={true} offset={-50} duration={500}> لغة الإشارة  </Link>

                <Link className="desktopMenuListItem" spy={true} activeC lass="active" to="info" smooth={true} offset={-50} duration={500}> معلومات  </Link>
                <Link className="desktopMenuListItem" spy={true} activeClass="active" to="cv" smooth={true} offset={-50} duration={500}> الملف الشخصي  </Link>

            </div>
            <button className="desktopMenubtn" onClick={() => {
                document.getElementById('contactus').scrollIntoView({ behavior: 'smooth' });
            }}>
                إتصل بنا
            </button>
            <FiMenu color="#0da778" className="mobMenu" onClick={() => setShowMenu(!showMenu)}></FiMenu>
            <div className="NavMenu" style={{ display: showMenu ? 'flex' : 'none' }}>
                <Link className="ListItem" spy={true} activeClass="active" to="intro" smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}> الصفحة الرئيسية </Link>
                <Link className="ListItem" spy={true} activeClass="active" to="gallary" smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}> واجهات التطبيق</Link>
                <Link className="ListItem" spy={true} activeClass="active" to="luangeSigen" smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}>لغة الإشارة </Link>

                <Link className="ListItem" spy={true} activeC lass="active" to="info" smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}> معلومات  </Link>
                <Link className="ListItem" spy={true} activeClass="active" to="cv" smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}> الملف الشخصي  </Link>
                <Link className="ListItem" spy={true} activeClass="active" to="contactus" smooth={true} offset={-50} duration={500} onClick={() => setShowMenu(false)}> إتصل بنا  </Link>

            </div>
        </nav>
    )
}
export default Navbar;