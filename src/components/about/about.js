import React, { useState } from "react";
import './about.css';
import AboutCard from "./aboutCard";

const aboutCardData = [
    {
        imgSrc: require("../../images/ocsp_logo.png"),
        title: "OCSP",
        description: "I gain sense of achievement by giving back to society.",
        link: "/ocsp"
    },
    {
        imgSrc: require("../../images/noc_logo.png"),
        title: "NOC New York",
        description: "I'm currently in New York!",
        link: "/noc"
    },
    {
        imgSrc: require("../../images/myself.png"),
        title: "Life",
        description: "I love life.",
        link: "/life"
    }
];

const About = () => {
    const [currentBarIndex, setCurrentBarIndex] = useState(0);

    const handlePrevClick = () => {
        setCurrentBarIndex((prevIndex) =>
            prevIndex === 0 ? aboutCardData.length - 1 : prevIndex - 1
        );
    };

    const handleNextClick = () => {
        setCurrentBarIndex((prevIndex) =>
            prevIndex === aboutCardData.length - 1 ? 0 : prevIndex + 1
        );
    };

    return (
        <section id="about">
            <span className="aboutTitle">About Me</span>
            <p className="aboutDesc">
                I'm a software engineer based in 🇸🇬. I have a passion for web3 and love to create new things. 
                <br/>I'm currently looking for new opportunities, do drop a DM to me on my email or socials for collaborations!
            </p>
            <div className="aboutBars">
                <button onClick={handlePrevClick} className="arrow">◀</button>
                <AboutCard
                    imgSrc={aboutCardData[currentBarIndex].imgSrc}
                    title={aboutCardData[currentBarIndex].title}
                    description={aboutCardData[currentBarIndex].description}
                    link={aboutCardData[currentBarIndex].link}
                />
                <button onClick={handleNextClick} className="arrow">▶</button>
            </div>
        </section>
    );
}

export default About;