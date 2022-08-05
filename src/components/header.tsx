import React from "react";
import Contact from "./contact";
import "./header.css";

const Header = () => {

    const [isContactOpen, setIsContactOpen] = React.useState(false);

    return <>
        <header>
            <a href="index.php">
                <h1>THEO FARNOLE</h1>
                <h2>GAME DEVELOPER</h2>
            </a>

            <nav>
                <a href="index.php">HOME</a>
                <a href="index.php#professional-xp">PROJECTS</a>
                <a href="skill.php">SKILLS & SOFTWARES</a>
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
        // TODO: implement this function
        throw new Error("Function not implemented.");
    }
};

export default Header;