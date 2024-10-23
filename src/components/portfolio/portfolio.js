import {React, useState} from "react";
import './portfolio.css';

const Portfolio = () => {
    const [activeTab, setActiveTab] = useState("experience");

    const portfolioData = {
        experience: [
            {
                title: "Product Manager Intern",
                company: "WSPN",
                logo: require("../../images/wspn_logo.png"),
                duration: "Jun 2024 - Aug 2024",
                tasks: [
                    "Conducted extensive research on stablecoin market and crypto growth products.",
                    "Developed Stablecoin on TRON and TON network.",
                    "Conducted product planning for a CeDeFi application to increase coin userbase.",
                    "Created a Dashboard for stablecoin to track and analyze userbase and user activities.",
                ],
            },
            {
                title: "Software Engineer Intern",
                company: "Cylynx",
                logo: require("../../images/cylynx_logo.png"),
                duration: "May 2023 - Aug 2023",
                tasks: [
                    "Enhanced database performance through multithreading techniques, optimizing workflow in the database.",
                    "Leveraged API keys to ingest data for data analysis.",
                    "Calculated metrics using data to devise an NFT scoring system.",
                    "Utilized AWS functions and cloud servers to acquire and store data.",
                    "Used ethers.js package to retrieve unique contract address on the blockchain for data analysis.",
                ],
            },
            {
                title: "Intern",
                company: "NCS Pte Ltd",
                logo: require("../../images/ncs_logo.png"),
                duration: "Mar 2022 - Jul 2022",
                tasks: [
                    "Utilized TensorFlow and PyTorch for data analysis and visualization to enhance model performance and accuracy.",
                    "Completion of multiple computer vision projects with clients.",
                    "Conducted research on machine learning models to improve efficiency and accuracy.",
                    "Performed data engineering and data cleansing tasks to optimize the F1 score and accuracy of the predictive models.",
                ],
            },
            {
                title: "Temporary Staff",
                company: "NETS Pte Ltd",
                logo: require("../../images/nets_logo.png"),
                duration: "Dec 2019 - Apr 2020",
                tasks: [
                    "Cold calling to promote QR code payment method via SGQR.",
                    "Assisted in the pickup of NETS terminals.",
                ],
            },
        ],
        education: [
            {
                institution: "National University of Singapore",
                degree: "Bachelor of Computing in Computer Science",
                logo: require("../../images/nus_logo.png"),
                duration: "Aug 2022 - Present",
                GPA: "GPA: 3.76/5.00",
                accolades: [
                    "Sheares Hall AY23/24 Table Tennis Captain",
                    "Sheares Hall AY23/24 Sheares Web Backend Developer Lead",
                    "Sheares Hall AY23/24 Volleyball member",
                    "Sheares Hall AY23/24 Overseas Community Service Project (OCSP) member",
                    "Sheares Hall AY23/24 Tennis member",
                    "Sheares Hall AY22/23 Table Tennis member",
                    "Sheares Hall AY22/23 Volleyball member",
                    "Sheares Hall AY22/23 Floorball member",
                    "Sheares Hall AY22/23 Basketball member",
                    "Sheares Hall AY22/23 D&D Pageant",
                ],
            },
            {
                institution: "Catholic Junior College",
                degree: "GCE 'A' levels",
                logo: require("../../images/cjc_logo.png"),
                duration: "Feb 2018 - Dec 2019",
                GPA: "Rank Points: 82.5/90",
                accolades: [
                    "Principal's Honour Roll 2019",
                    "Principal's Honour Roll 2018",
                    "Volleyball member",
                ],
            },
            {
                institution: "Maris Stella High School",
                degree: "GCE 'O' levels",
                logo: require("../../images/mshs_logo.png"),
                duration: "Jan 2014 - Dec 2017",
                GPA: "L1R5: 10, L1R4: 8",
                accolades: [
                    "Table Tennis member",
                ],
            }
        ],
        projects: [
            {
                name: "NUS Fintech Month Hackathon 2023",
                duration: "Jan 2023",
                details: [
                    "Finalist in the hackathon.",
                    "Created Smart Contracts using Solidity to tokenize payment.",
                    "Developed web applications using React and backend using Node.",
                    "Developed MVP automating the payment of consignment goods via smart contracts on Ethereum Blockchain.",
                ],
            },
            {
                name: "Orbital Project 23",
                duration: "May 2023 - Aug 2023",
                details: ["Created a website application to tokenize real estate properties.", "Achieved Apollo 11 level (2nd highest achievement)."],
                link: "https://nfproperty.vercel.app/"
            },
            {
                name: "Hack&Roll 2024",
                duration: "Jan 2024",
                details: ["Created several Google Chrome extensions to improve productivity."],
                link: "https://github.com/irwynliong/Trolling4real"
            },
        ],
    };

    return (
        <div className="portfolio">
            {/* Mini Navbar */}
            <div className="portfolio-tabs">
                <button 
                    className={activeTab === "experience" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("experience")}
                >
                    Technical Experiences
                </button>
                <button 
                    className={activeTab === "education" ? "tab active" : "tab"}
                    onClick={() => setActiveTab("education")}
                >
                    Education
                </button>
            </div>

            {/* Content Display */}
            {activeTab === "experience" && (
                <div className="experience-content">
                    <h2>Experience</h2>
                    {portfolioData.experience.map((exp, index) => (
                        <div key={index} className="experience-item">
                            <div className="experience-header">
                                <img src={exp.logo} alt={`${exp.company} logo`} className="experience-logo" />
                                <h3>{exp.title}</h3>
                                <p className="duration"><i>{exp.duration}</i></p>
                            </div>
                            <div className="company">
                                <p>{exp.company}</p>
                            </div>

                            <ul>
                                {exp.tasks.map((task, i) => <li key={i}>{task}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            )}

            {activeTab === "education" && (
                <div className="education-content">
                    <h2>Education</h2>
                    {portfolioData.education.map((edu, index) => (
                        <div key={index} className="education-item">
                            <div className="education-header">
                                <img src={edu.logo} alt={`${edu.company} logo`} className="experience-logo" />
                                <h3>{edu.degree}</h3>
                                <p className="duration"><i>{edu.duration}</i></p>
                            </div>
                            <div className="institution">
                                <p>{edu.institution}</p>    
                            </div>
                            <div className="accolades">
                                <p className="GPA">{edu.GPA}</p>
                                <ul>
                                    {edu.accolades.map((accolade, i) => <li key={i}>{accolade}</li>)}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Portfolio;