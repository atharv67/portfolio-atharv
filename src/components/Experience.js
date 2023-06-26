import React from "react";
import Experiences from "./Experiences";
import {VerticalTimeline,VerticalTimelineElement} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
export default function Experience(){
    const timelineElements=Experiences.map(experience=>{
                                const bullets=experience.description.split(";");
                                const bullet_list=bullets.map(bullet=>(<li>{bullet}</li>))
                                return(<VerticalTimelineElement 
                                            
                                            key={experience.id}
                                            contentStyle={{color: "aliceblue",backgroundColor: "rgba(23,26,34,255)"}}
                                            contentArrowStyle={{}}
                                            date={experience.dates}
                                            dateClassName="date"
                                            iconStyle={{ background:"#2596be", fontSize: '100px', padding: '0px' }}
                                            >
                                        <h3 className="vertical-timeline-element-title">{experience.position}</h3>
                                        <h5 className="vertical-timeline-element-subtitle">{experience.company}</h5>
                                        <p id="description" className="experience-box">{bullet_list}</p>
                                        </VerticalTimelineElement>
                                        );})
    return(
        <main className="experience" id="experience">
            <section className="section-differentiator">
            <h2 className="section-heading">Work Experience</h2>
            <hr className="horizontal-line"/>
            </section>
            <VerticalTimeline lineColor="#6e7887">
                {timelineElements}
            </VerticalTimeline>

            
            
        </main>
    )
}