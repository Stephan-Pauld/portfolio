import React from 'react'
import { Button, Icon, Balloon, Container, List } from "nes-react";
import '../index.css'
import Tweeter from '../assets/photos/Tweeter.png'
import scheduler from '../assets/photos/Scheduler.png'
import TinyApp from '../assets/photos/TinyApp.png'


export default function Projects({ backToTown }) {

  const title = ["<Projects", <br />, "    style={{", <br />, "        commitment: 100%,", <br />, "        passion: 100%,", <br />, "        programming=True", <br />, "    }}", <br />, "/>"]

  const star = <Icon icon={"star"} small={true} />
  const empty = <Icon icon={"star"} small={true} empty={true} />

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '3% 5% 3% 5%' }}>
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

            icon={"heart"}
          />
        </div>
      </div>


      <div className="project-container">
        <div>
          <img className="project-pics" src={Tweeter} alt="Stephan and Wife at DisneyLand" />
        </div>
        <div className="project-desc-container">
          <div className="project-desc">
            <h4>
              Tweeter
            </h4>
            <p>
              This project was my first push into really grasping css, mostly using flex-box. It also taught me a lot of basic crud operations and how a server and front end talk to eachother. This was strictly a learning project.
            </p>
          </div>

          <div>
          <Button className="is-primary">Github</Button>
          </div>
        </div>
      </div>

      <div className="project-container">
  
        <div className="project-desc-container">
          <div className="project-desc">
            <h4>
              Tweeter
            </h4>
            <p>
              This project was my first push into really grasping css, mostly using flex-box. It also taught me a lot of basic crud operations and how a server and front end talk to eachother. This was strictly a learning project.
            </p>
          </div>

          <div>
          <Button className="is-primary">Github</Button>
          </div>
        </div>
        <div>
          <img className="project-pics" src={TinyApp} alt="Stephan and Wife at DisneyLand" />
        </div>
      </div>










      <div style={{ width: '55%', margin: 'auto' }}>
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

      <div style={{ width: '55%', margin: 'auto' }}>
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
