import React from 'react'
import { Button, Icon, Balloon, Container, List } from "nes-react";
import '../index.css'
import Tweeter from '../assets/photos/Tweeter.png'
import Scheduler from '../assets/photos/Scheduler.png'
import TinyApp from '../assets/photos/TinyApp.png'
import Warzone from '../assets/photos/warzone.png'
import BuyAndSell from '../assets/photos/buyandsell.png'


export default function Projects({ backToTown }) {

  const title = ["<Projects", <br />, "    style={{", <br />, "        commitment: 100%,", <br />, "        passion: 100%,", <br />, "        programming=True", <br />, "    }}", <br />, "/>"]


  const githubButton = (url) => {
    window.open(url)
  }



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
        <div className="project-desc-container">
          <div className="project-desc">
            <h4>
              React Scheduler
            </h4>
            <p>
              This react scheduler was my first introduction to react. Using functional react and custom hooks I created a scheduler that allowed students to book a specific time slot with a teacher for 1-1 mentoring.
            </p>
          </div>

          <div>
            <Button
              className="is-primary"
              children={"Github"}
              onClick={() => githubButton('https://github.com/Stephan-Pauld/scheduler')}
            />
          </div>
        </div>
        <div>
          <img className="project-pics" src={Scheduler} alt="Stephan and Wife at DisneyLand" />
        </div>
      </div>

      <div className="project-container">
        <div>
          <img className="project-pics" src={Warzone} alt="Stephan and Wife at DisneyLand" />
        </div>
        <div className="project-desc-container">
          <div className="project-desc">
            <h4>
              Warzone- Stat Arena
            </h4>
            <p>
              Stat Arena was an amazing project using, mySQL, Redis.io, Express and functional React. Using the Modern-Warfare API. I got realtime statistics so players could use their gamer tag on the site and see their realtime statistics in the form of a personal profile and compare those stats to their friends or Professional Esports players. Stat Arena also implemented a LIVE overlay with realtime updating stats to be used on any streaming platform IE: Twitch, YouTube or FaceBook-Gaming so a streamers viewers could see the content creators statistics change realtime.
            </p>
          </div>

          <div>
            <Button
              className="is-primary"
              children={"Github"}
              onClick={() => githubButton('https://github.com/Stephan-Pauld/WarzoneStatArena')}
            />
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="project-desc-container">
          <div className="project-desc">
            <h4>
              Buy And Sell - Electronics Haven
            </h4>
            <p>
              Electronic Haven is a small e-Commerce website where an admin can create, read, update and delete products or categories on their site. Users can contact the seller via a custom messaging system through the website or twillio. When a price is negotiated an admin can mark an item for the price it was sold for and set the product as sold or out of stock.
            </p>
          </div>

          <div>
            <Button
              className="is-primary"
              children={"Github"}
              onClick={() => githubButton('https://github.com/Stephan-Pauld/buy_and_sell')}
            />
          </div>
        </div>
        <div>
          <img className="project-pics" src={BuyAndSell} alt="Stephan and Wife at DisneyLand" />
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
            <Button
              className="is-primary"
              children={"Github"}
              onClick={() => githubButton('https://github.com/Stephan-Pauld/tweeterApp')}
            />
          </div>
        </div>
      </div>

      <div className="project-container">
        <div className="project-desc-container">
          <div className="project-desc">
            <h4>
              Tiny App
            </h4>
            <p>
              TinyApp is an account based URL shortener. This was an awesome project that taught me how to create RESTFUL API's and basic CRUD operations using and express server.
            </p>
          </div>

          <div>
            <Button
              className="is-primary"
              children={"Github"}
              onClick={() => githubButton('https://github.com/Stephan-Pauld/tinyApp')}
            />
          </div>
        </div>
        <div>
          <img className="project-pics" src={TinyApp} alt="Stephan and Wife at DisneyLand" />
        </div>
      </div>
    </>
  )
}
