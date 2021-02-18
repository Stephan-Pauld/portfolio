import React from 'react'
import { Button, Icon, Balloon, Container, List } from "nes-react";
import '../index.css'
import tweeter from '../assets/photos/tweeter.png'
import scheduler from '../assets/photos/Schedulerr.png'


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
