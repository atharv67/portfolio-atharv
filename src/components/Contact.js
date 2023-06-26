import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub} from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-free/css/all.min.css';
export default function Contact(){
    const linkedin=()=>{
        const newTab = window.open('https://www.linkedin.com/in/atharv-pandit-b50bb3184/', '_blank');
        newTab.focus();
    }
    const github=()=>{
        const newTab = window.open('https://github.com/atharv67', '_blank');
        newTab.focus();
    }
    const email=()=>{
        const newTab = window.open('mailto:apandit3@ncsu.edu', '_blank');
        newTab.focus();
    }
    return(
        <main id="contact">
             <section className="section-differentiator">
            <h2 className="section-heading">Let us connect</h2>
            <hr className="horizontal-line"/>
            </section>
            <div className="icon-container">
            <FontAwesomeIcon icon={faLinkedin} className="icon" onClick={linkedin}/>
            <FontAwesomeIcon icon={faGithub} className="icon" onClick={github}/>
            <FontAwesomeIcon icon={faEnvelope} className="icon" onClick={email}/>
            </div>
        </main>

    )
}