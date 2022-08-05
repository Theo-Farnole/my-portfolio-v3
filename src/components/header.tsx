import React from "react";
import Contact from "./contact";
import "./header.css";

const Header = () => {

    const [isContactOpen, setIsContactOpen] = React.useState(false);
    const [isNavOpen, setIsNavOpen] = React.useState(false);

    return <>
        <header>
            <a href="index.php">
                <h1>THEO FARNOLE</h1>
                <h2>GAME DEVELOPER</h2>
            </a>

            <nav className={isNavOpen ? "responsive" : ""}>
                <a href="/#">HOME</a>
                <a href="/#professional-xp">PROJECTS</a>
                <a href="/skills">SKILLS & SOFTWARES</a>
                <a href="javascript:void(0);" className="icon" onClick={toggleNav}>
                    <i className="fa fa-bars"></i>
                </a>
            </nav>
        </header>

        <div id="contact_popup">
            <h3>CONTACT</h3>

            {isContactOpen && <Contact />}

            <span onClick={toggleContactPopup} className="close_button">×</span>
        </div>
    </>

    function toggleContactPopup() {
        setIsContactOpen(!isContactOpen);
    }

    function toggleNav() {
        setIsNavOpen(!isNavOpen);
    }
};

export default Header;