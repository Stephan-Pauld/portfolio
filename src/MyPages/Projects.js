import React from 'react'
import { Button, Icon, Balloon, Container, List } from "nes-react";
import '../index.css'
import Tweeter from '../assets/photos/Tweeter.png'
import Scheduler from '../assets/photos/Scheduler.png'
import TinyApp from '../assets/photos/TinyApp.png'
import Warzone from '../assets/photos/warzone.png'
import BuyAndSell from '../assets/photos/buyandsell.png'
import MineSweeper from '../assets/photos/minesweeper.png'


export default function Projects({ backToTown }) {

  const title = ["<Projects", <br />, "    style={{", <br />, "        commitment: 100%,", <br />, "        passion: 100%,", <br />, "        programming=True", <br />, "    }}", <br />, "/>"]


  const githubButton = (url) => {
    window.open(url)
  }



  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 5% 3% 5%' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', width: '15%' }}>
          <Balloon
            children={"Press here or down arrow to head back to town"}
            fromLeft={true}
          />
          <Button className="is-error" onClick={() => backToTown(590, 346)}>Town</Button>
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
              React Scheduler- React, Express, Postgres
            </h4>
            <p>
              This react scheduler was my first introduction to react. Using functional react and custom hooks I created a scheduler that allowed students to book a specific time slot with a teacher for 1-1 mentoring. (Leave a moment for the site to load data since hosted on Heroku)
            </p>
          </div>
          <div>
            <Button
              className="is-primary"
              children={"Github"}
              onClick={() => githubButton('https://github.com/Stephan-Pauld/scheduler')}
            />
            <Button
              className="is-primary"
              children={"Live Site"}
              onClick={() => githubButton('https://flamboyant-heisenberg-65d304.netlify.app/')}
            />
          </div>
        </div>
        <div>
          <img className="project-pics" src={Scheduler} alt="Stephan and Wife at DisneyLand" />
        </div>
      </div>





      <div className="project-container">
        <div>
          <img className="project-pics" src={MineSweeper} alt="Stephan and Wife at DisneyLand" />
        </div>
        <div className="project-desc-container">
          <div className="project-desc">
            <h4>
              Mine Sweeper - React, Express mySQL
            </h4>
            <p>
              This was a great learning project with React and Redux. As a user you get a 16x16 board with 40 randomly placed bombs. Tiles are blank, have a value or are a bomb. The tiles with a numbered value check to see how many bombs are near them. Similarily the blank tiles check to see if there are additional blank tiles touching them to uncover multiple blank tiles with a single click. If a player senses a mine under a tile a user can right click that tile to place a flag which then makes it so you can not click that tile unless you remove the flag. I made a custom scoring function which takes into account a players time as well as the amount of "safe" tiles uncovered. When a bomb is uncovered OR a player uncovers all safe tiles the game is over and a player is able to submit their highscore to a mySQL databse with express as the backend server. (Server Not Hosted)
            </p>
          </div>
          <div>
            <Button
              className="is-primary"
              children={"Github"}
              onClick={() => githubButton('https://github.com/Stephan-Pauld/MineSweeperChallenge')}
            />
            <Button
              className="is-primary"
              children={"Live Site"}
              onClick={() => githubButton('https://romantic-goldwasser-56552d.netlify.app/')}
            />
          </div>
        </div>
      </div>



      <div className="project-container">
        <div className="project-desc-container">
          <div className="project-desc">
            <h4>
              Warzone Stat Arena- React, Express, Redis, oAuth, mySQL
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
        <div>
          <img className="project-pics" src={Warzone} alt="Stephan and Wife at DisneyLand" />
        </div>
      </div>










      <div className="project-container">
        <div>
          <img className="project-pics" src={BuyAndSell} alt="Stephan and Wife at DisneyLand" />
        </div>
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
      </div>

      <div style={{ marginTop: '4%' }}>

      </div>
    </>
  )
}
