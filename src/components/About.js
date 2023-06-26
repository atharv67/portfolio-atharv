import React from "react";
import SkillButton from "./SkillButton";
export default function About(){
    const skills=['Python', 'Java', 'JavaScript', 'PHP', 'R', 'C#', 'SQL', 'Django', 'Flask', 'ReactJS', 'NodeJS', 'jQuery', 'NoSQL', 'JSON', 'MongoDB', 'HTML5', 'CSS', 'PostgreSQL', 'MS SQL', 'ASP.NET', 'AWS', 'Azure', 'Kubernetes', 'JIRA', 'Docker', 'Linux', 'Git', 'Selenium', 'REST API', 'Airflow', 'Image-Processing', 'Time-Series Analysis', 'PySpark', 'NLP', 'Scikit-learn', 'Tableau', 'Excel', 'MySQL', 'Tensorflow']
    const skills_buttons=skills.map(skill=>(<SkillButton val={skill}/>))
    return(
        <main className="about" id="about">
            <p className="line1">Hi, I am Atharv.</p>
            <p className="line2">I'm a problem solver.</p>
            <p className="summary">I'm a CS Grad student as North Carolina State University. 
            As a passionate problem solver with a keen interest in software engineering and data science, 
            I thrive on tackling real-life challenges that have a meaningful impact on people's lives. I am looking for roles in Software Engineering, Data Science and Data Engineering.</p>
            <div className="about-skills">
                {/* <h1 className="skill-heading">SKILLS</h1> */}
                {skills_buttons}
            </div>
        </main>
    )

}