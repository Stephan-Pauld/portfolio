import React from 'react'
import { Button } from "nes-react";
import { Container } from "nes-react";
import { Balloon } from "nes-react";
import '../index.css'
import StefNess from '../assets/photos/disneyland.jpg'
import dogs from '../assets/photos/boysCropped.jpg'

export default function AboutMe({ backToTown }) {

  const title = ["<AboutMe", <br />, "    style={{", <br />, "        commitment: 100%,", <br />, "        passion: 100%,", <br />, "        programming=True", <br />, "    }}", <br />, "/>"]

  return (
    <>

      <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', width: '15%', margin: '3% 10%', }}>
        <Balloon
          children={"Press here or down arrow to head back to town"}
          fromLeft={true}
        />
        <Button className="is-error" onClick={() => backToTown(1170, 346)}>Town</Button>
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
            <h5>My dogs Gus(left), Jabba(right)</h5>

          </div>

          <div className="my-pics">
            <img className="about-pics" src={dogs} alt="Stephan and Wife at DisneyLand" width="300" height="300" />
            <h5>My dogs Gus(left), Jabba(right)</h5>
          </div>

        </div>


      </div>
    </>
  )
}
