import React from 'react'
import '../index.css'
import StefNess from '../assets/photos/disneyland.jpg'
import dogs from '../assets/photos/boysCropped.jpg'

export default function AboutMe() {

  const title = ["<AboutMe", <br />, "    style={{", <br />, "        commitment: 100%,", <br />, "        passion: 100%,", <br />, "        programming=True", <br />, "    }}", <br />, "/>"]
  return (
    <>
      <div>
        <pre className="title-font">
          {title}
        </pre>
      </div>
      <div>
        <h3 className="heading">Hello, my name is Stephan Paul.</h3>
        <div className="body-text">
          <h4 className="intro">I'm a full stack web developer based in Lethbridge, AB.</h4>

          <p>Throughout the day I'm A full stack developer. During the evenings I spend my time working on personal projects and gaming.</p>

          <p>My most recent project is this <span style={{ textDecoration: "underline" }}>portfolio</span> made with functional React. Next I will be working with a QR scanner using React Native</p>

        </div>

        <div className="about-pic-container">
          <div className="my-pics">
            <img className="about-pics" src={StefNess} alt="Stephan and Wife at DisneyLand" width="300" height="300" />
            <img className="about-pics" src={dogs} alt="Stephan and Wife at DisneyLand" width="300" height="300" />
          </div>
          <div className="picture-text body-text" >
            <p>My wife Vanessa and I at DisneyLand</p>
            <p>Our dogs, Jabba and Gus</p>
          </div>
        </div>

      </div>
    </>
  )
}
