import React from "react";
import './about.css';
import AboutSwiper from "./swiper/aboutSwiper";
import me from '../../images/me.png';

const About = () => {
    return (
        <section id="about">
            <div className="aboutHeader">
                <img src={me} alt="Profile" className="aboutImage" />
                <span className="aboutTitle">About Me</span>
            </div>
            <p className="aboutDesc">
                I'm a software engineer based in 🇸🇬. I have a passion for web3 and love to create new things.
                <br/>I'm currently looking for new opportunities, do drop a DM to me on my email or socials for collaborations!
            </p>
            <div>
                <AboutSwiper />
            </div>
        </section>
    );
}

export default About;
