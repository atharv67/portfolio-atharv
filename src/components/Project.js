import React from 'react';
import Slider from 'react-slick';
import projects from './Project_desc.js';
import Card from './Project_card';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useEffect } from 'react';
export default function Project(){
    useEffect(() => {
        const handleScroll = () => {
          const sectionElement = document.getElementById('project');
          const sectionPosition = sectionElement.getBoundingClientRect();
          const windowHeight = window.innerHeight;
    
          if (sectionPosition.top < windowHeight && sectionPosition.bottom >= 0) {
            sectionElement.classList.add('slide-in');
          } 
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
    
    const se_projects=[];
    const ds_projects=[];
    for (let i=0;i<projects.length;i++){
        if(projects[i].category.includes(0)){
            se_projects.push(projects[i]);
        }
        if(projects[i].category.includes(1)){
            ds_projects.push(projects[i]);
        }
    }
    const selectedStyle={
        backgroundColor: "#61dafb",
        color: "#282c34"
    }

    const [currCategory,setCurrCategory]=React.useState(0);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };
    function handleClick(event){
        const category=event.target.id;
        console.log('in',category)
        if(category==='0'){
            setCurrCategory(0)
        }
        else if(category==='1'){
            setCurrCategory(1)
            
        }
    }
    let currProjects;
    if (currCategory===1){
        currProjects=ds_projects
    }
    else{
        currProjects=se_projects
    }
    const projects_arr=currProjects.map(project=>(
        <Card 
         key={project.id}
         name={project.name}
         desc={project.desc}
         skills={project.skills}
         category={project.category}
         link={project.link}/>
    ))

    return(
        <main className="Project" id="project">
            <section className="section-differentiator">
            <h2 className="section-heading">Projects</h2>
            <hr className="horizontal-line"/>
            </section>
            <div className='category-buttons'>
                <button className="select-project-category-button" style={currCategory===0?selectedStyle:{}} onClick={handleClick} id='0'>
                    Software Engineering
                </button>
                <button className="select-project-category-button" style={currCategory===1?selectedStyle:{}} onClick={handleClick} id='1'>
                    Data Science
                </button>   
            </div>
            
            <Slider {...settings} className="projects-carousel">
                {projects_arr}
            </Slider>


        </main>
    )
}