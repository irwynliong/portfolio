import React, { useState, useEffect, useMemo } from "react";
import './intro.css';
import download from '../../images/download.png';

const Intro = () => {
    const greetings = useMemo(() => ["Hello!", "Hola!", "你好!", "Bonjour!", "こんにちは!"], []);
    const title = useMemo(() => ["Software Engineer", "Full Stack Developer", "Blockchain Developer", "Volleyball Player", "Gamer", "Foodie", "Traveler", "Learner"], []);

    const [currentGreeting, setCurrentGreeting] = useState("");
    const [greetingIndex, setGreetingIndex] = useState(0);
    const [letterIndex, setLetterIndex] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);

    const [currentTitle, setCurrentTitle] = useState(title[0]);
    const [titleIndex, setTitleIndex] = useState(0);

    // Typing effect for greetings
    useEffect(() => {
        const currentFullGreeting = greetings[greetingIndex];

        if (!isDeleting) {
            // Typing effect
            if (letterIndex < currentFullGreeting.length) {
                const timeout = setTimeout(() => {
                    setCurrentGreeting((prev) => prev + currentFullGreeting[letterIndex]);
                    setLetterIndex((prev) => prev + 1);
                }, 100); // Speed of typing

                return () => clearTimeout(timeout);
            } else {
                // Once done typing, wait before starting deletion
                const deleteTimeout = setTimeout(() => {
                    setIsDeleting(true);
                }, 5000); // Pause before starting to delete

                return () => clearTimeout(deleteTimeout);
            }
        } else {
            // Deleting effect
            if (letterIndex > 0) {
                const timeout = setTimeout(() => {
                    setCurrentGreeting((prev) => prev.slice(0, -1)); // Remove the last letter
                    setLetterIndex((prev) => prev - 1);
                }, 50); // Speed of deleting

                return () => clearTimeout(timeout);
            } else {
                // Once the word is deleted, move to the next greeting and start typing again
                const nextTimeout = setTimeout(() => {
                    setIsDeleting(false);
                    setGreetingIndex((prev) => (prev + 1) % greetings.length); // Move to the next greeting
                }, 500); // Pause before typing the next word

                return () => clearTimeout(nextTimeout);
            }
        }
    }, [letterIndex, isDeleting, greetingIndex, greetings]);

    // Change title on click
    useEffect(() => {
        const handleClick = () => {
            setTitleIndex((prev) => (prev + 1) % title.length);
        };

        // Update the title when titleIndex changes
        setCurrentTitle(title[titleIndex]);

        // Add click event listener
        document.addEventListener("click", handleClick);

        // Cleanup event listener on component unmount
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, [titleIndex, title]);

    return (
        <section id="intro">
            <div className="introContainer">
                <span className="greeting">{currentGreeting}</span>
                <span className="introText">My name is
                    <span className="introName"> Irwyn Liong</span>
                    <br />I'm a
                    <span className="introName2"> {currentTitle}</span>
                </span>
                <a href="/Liong_Yi_Chen_Irwyn_Resume.pdf" download="Liong_Yi_Chen_Irwyn_Resume.pdf">
                    <button className="btn">
                        <img src={download} alt="DL" className="btnImg" />Resume
                    </button>
                </a>
            </div>
            <img src="" alt="Profile" className="bg" />
        </section>
    );
}

export default Intro;
