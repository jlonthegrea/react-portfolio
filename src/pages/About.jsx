//import image here for portfolio
import React from 'react'
import avatarImage from '../assets/projects/me.jpg'

function AboutMe() {
    return (
    <div className="AboutMeClass" id="AboutMe">
        <h2 className="title">
          About Me
        </h2>
        <img src={avatarImage} alt="Avatar" height={500} width={500} />
        <article id="aboutMeArticle">
          <div className="text">
            <p>Howdy there! If you will, call me Jaylon Allen. At the University of Central Florida Bootcamp, I'm starting studies to seek a career in software engineering. I'm eager to learn more about the world of technology. It excites me to combine my love of React and JavaScript with my programming knowledge. My coding bootcamp gave me the chance to work with HTML, CSS, and JS for front-end development. I've grown increasingly interested in learning about backend programming and realize how critical it is to use what I learn. Through this incredible training, I've been able to put my knowledge and skills to practice, which has allowed me to grow and learn more as technology advances. While there will always be challenges in the amazing realm of technology, I'm excited to be a part of it.</p>
          </div>
        </article>
    </div>
    );
  }
  
  export default AboutMe;