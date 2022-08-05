import React from "react";
import Contact from "./contact";
import "./footer.css";

const Footer = () => {
    return <div id="footer-parent">

        <footer>
            <Contact />

            <div id="thx_you_section">
                <p>
                    Thank you for your interest, you've reached the end of this section !
                </p>
            </div>
        </footer>
    </div>;
};

export default Footer;