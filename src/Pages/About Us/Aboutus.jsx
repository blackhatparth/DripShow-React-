import Header from '../../Components/Header'
import HeaderImage from '../../Images/header_bg_1.png'
import './Aboutus.css'
import Visionimage from '../../Images/leaves.jpg'
import Storyimage from '../../Images/city.jpg'
import Missionimage from '../../Images/businessman.jpg'

import React from 'react'

const Aboutus = () => {
  return (
    <>
    <Header title="About Us" image={HeaderImage}>
      hello world
    </Header>

    <section className="about__story">
      <div className="container about__story-container">
        <div className="about__section-image">
          <img src={Storyimage} alt="" />
        </div>
        <div className="about__section-content">
          <h1>Our Story</h1>
          <p>
            Our journey started from...
          </p>
          <p>
            As we know how....
          </p>
          <p>
            Doing research on ground level....
          </p>
        </div>
      </div>
    </section>


    <section className="about__vision">
      <div className="container about__vision-container">
        <div className="about__section-content">
          <h1>Our Vision</h1>
          <p>
            Our journey started from...
          </p>
          <p>
            As we know how....
          </p>
          <p>
            Doing research on ground level....
          </p>
        </div>
        <div className="about__section-image">
          <img src={Visionimage} alt="" />
        </div>
      </div>
    </section>


    <section className="about__mission">
      <div className="container about__mission-container">
        <div className="about__section-image">
          <img src={Missionimage} alt="" />
        </div>
        <div className="about__section-content">
          <h1>Our Mission</h1>
          <p>
            Our journey started from...
          </p>
          <p>
            As we know how....
          </p>
          <p>
            Doing research on ground level....
          </p>
        </div>
      </div>
    </section>
    </>
  )
}

export default Aboutus