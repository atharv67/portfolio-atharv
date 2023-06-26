import React from "react";
import SkillButton from "./SkillButton";
export default function Card(props){
    const bullets=props.desc.split(";");
    const bullet_list=bullets.map(bullet=>(<li>{bullet}</li>));
    const skills=props.skills.map(skill=>(<SkillButton val={skill}/>))
    return(
        <main className="project-card">
            <h1 className="project-title">
                {props.name}
            </h1>
            <ul>
                {bullet_list}
            </ul>
            <div className="skills-div">
                {skills}
            </div>
            <button className="view-project-button">
                <a href={props.link} target="_blank">View Project</a>
            </button>
        </main>
    )
}