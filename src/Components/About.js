import React from 'react'
import AboutBackground from '../Assets/about-background.png';
import AboutBackgroundImage from '../Assets/about-background-image.png';
import { BsFillPlayCircleFill } from 'react-icons/bs';



function About() {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt=""/>

        </div>
        <div className='about-section-image-container'>
            <img src='{AboutBackgroundImage' alt=""/>
        </div>
        <div className='about-section-text-container'>
            <p className='primary-subheading'> About </p>
               <h1 className='primary-heading'>   Food is an important part of a balanced diet </h1>
               <p className='primary-text'> Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
               <p className='primary-text'> Esse enim alias tenetur, velit odit quos dolorem voluptatem saepe necessitatibus neque beatae quisquam explicabo possimus reiciendis cumque nobis praesentium impedit. Culpa?</p>
               <div className='about-buttons-container'>
                <button className='secondary-button'> Learn more</button>
                        <button className='watch-video-button'> <BsFillPlayCircleFill/> Watch Video</button>
                     </div>
                   
        </div>

    </div>
  )
}

export default About