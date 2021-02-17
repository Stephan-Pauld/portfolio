import React from 'react'
import '../index.css'
import tweeter from '../assets/photos/tweeter.png'
import scheduler from '../assets/photos/Schedulerr.png'


export default function Projects() {

  const title = ["<Projects", <br />, "    style={{", <br />, "        commitment: 100%,", <br />, "        passion: 100%,", <br />, "        programming=True", <br />, "    }}", <br />, "/>"]
  return (
    <>
      <div>
        <pre className="title-font">
          {title}
        </pre>
      </div>

      <div className="project-page">

        <div className="project-container">
          <img className="project-pics tweeter" src={tweeter} alt="twitter clone" />
          <div className="overlay">
            <div className="project-text">
              <h4>Tweeter - A Twitter Clone</h4>
              <h4 className="git"><a href="https://github.com/Stephan-Pauld/tweeterApp">Github</a></h4>
            </div>
          </div>
        </div>

        <div className="project-container">
          <img className="project-pics tweeter" src={scheduler} alt="twitter clone" />
          <div className="overlay">
            <div className="project-text">
              <h4>Tweeter - A Twitter Clone</h4>
              <h4 className="git">Github</h4>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}
