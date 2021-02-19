import React from 'react'
import { Button, Icon, Balloon, Container, List } from "nes-react";
import '../index.css'
import StefNess from '../assets/photos/disneyland.jpg'
import dogs from '../assets/photos/boysCropped.jpg'

export default function AboutMe({ backToTown }) {
  const star = <Icon icon={"star"} small={true} />
  const empty = <Icon icon={"star"} small={true} empty={true} />
  const title = ["<AboutMe", <br />, "    style={{", <br />, "        commitment: 100%,", <br />, "        passion: 100%,", <br />, "        programming=True", <br />, "    }}", <br />, "/>"]


  const socialLinks = (url) => {
    console.log("Catssss");
    window.open(url)
  }



  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 5% -3% 5%' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', width: '15%' }}>
          <Balloon
            children={"Press here or down arrow to head back to town"}
            fromLeft={true}
          />
          <Button className="is-error" onClick={() => backToTown(1170, 346)}>Town</Button>
        </div>
        <div>
          <Icon
            icon={"heart"}
          />
          <Icon
            icon={"heart"}
          />
          <Icon
            icon={"heart"}
          />
          <Icon
            className={"is-empty"}
            icon={"heart"}
          />
        </div>
      </div>
      <div>

        <h3 className="heading">Hello, my name is Stephan Paul.</h3>

        <div className="body-text">
          <h4 className="intro">I'm a full stack web developer based in Lethbridge, AB.</h4>
          <p>Throughout the day I'm A full stack developer. During the evenings I spend my time working on personal projects and gaming.</p>

          <p>My most recent project is this <span className="recent-project" onClick={()=> socialLinks('https://github.com/Stephan-Pauld/portfolio')} style={{ textDecoration: "underline" }}>portfolio</span> made with functional React. Next I will be working with a QR scanner using React Native</p>
        </div>


        <div className="socials">
          <div>
            Get Social With Me!
          </div>
          <div className="social-icons">
            <Icon
            className={"socialicon"}
              icon={"github"}
              onClick={() => socialLinks('https://github.com/Stephan-Pauld')}
            />
            <Icon
              icon={"gmail"}
              />
            <Icon
              className={"socialicon"}
              icon={"linkedin"}
              onClick={() => socialLinks('https://www.linkedin.com/in/stephan-paul/')}
            />
          </div>
        </div>



        <div className="about-pic-container">

          <div className="my-pics">
            <img className="about-pics" src={StefNess} alt="Stephan and Wife at DisneyLand" width="300" height="300" />
            <h6>My wife Vanessa and I</h6>

          </div>

          <div className="my-pics">
            <img className="about-pics" src={dogs} alt="Stephan and Wife at DisneyLand" width="300" height="300" />
            <h6>My dogs Gus(left), Jabba(right)</h6>
          </div>
        </div>

      </div>


      <div className="skills-container">
        <Container
          title={"Languages"}
          dark={true}
          children={
            <>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                <div style={{ marginLeft: '33px' }}>
                  <List solid={true}>
                    <li>HTML{star}{star}{star}{star}{empty}</li>
                    <li>CSS{star}{star}{star}{empty}{empty}</li>
                  </List>
                </div>
                <div style={{ marginLeft: '33px' }}>
                  <List solid={true}>
                    <li>SQL{star}{star}{star}{star}{empty}</li>
                    <li>SASS{star}{star}{empty}{empty}{empty}</li>
                  </List>
                </div>
                <div style={{ marginLeft: '33px' }}>
                  <List solid={true}>
                    <li>JavaScript{star}{star}{star}{star}{star}</li>
                    <li>Ruby{star}{star}{star}{empty}{empty}</li>
                  </List>
                </div>
              </div>
            </>
          }
        />
      </div>

      <div className="skills-container">
        <Container
          title={"Frameworks"}
          dark={true}
          children={
            <>
              <div style={{ display: 'flex', justifyContent: 'space-around' }}>

                <div style={{ marginLeft: '33px' }}>
                  <List solid={true}>
                    <li>React-Native</li>
                    <li>React</li>
                  </List>
                </div>
                <div style={{ marginLeft: '33px' }}>
                  <List solid={true}>
                    <li>Express</li>
                    <li>Node</li>
                    <li>BootStrap</li>
                  </List>
                </div>
                <div style={{ marginLeft: '33px' }}>
                  <List solid={true}>
                    <li>.Net</li>
                    <li>Rails</li>
                    <li>jQuery</li>
                  </List>
                </div>
              </div>
            </>
          }
        />
      </div>
    </>
  )
}
