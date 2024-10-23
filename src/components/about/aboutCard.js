import React from "react";
import { Link } from "react-router-dom";
import "./aboutCard.css";

const AboutCard = ({ imgSrc, title, description, link }) => {
    return (
        <Link to={link} className="aboutCard">
            <img src={imgSrc} alt={title} />
            <div className="aboutCardText">
                <h2>{title}</h2>
                <p>{description}</p>
            </div>
        </Link>
    );
};

export default AboutCard;
