import React from 'react'
import '../index.css'

export default function AboutMe() {

  const title = ["<AboutMe", <br/>,"    style={{", <br />, "        commitment: 100%,", <br />, "        passion: 100%,", <br />, "        programming=True", <br />, "    }}", <br />, "/>"]
  return (
    <>
    <div>
      <pre className="title-font">
      {title}
      </pre>
    </div>
    <div >
      <h3 className="heading">Hello, my name is Stephan Paul.</h3>
      <div className="body-text">
      <p>I'm a full stack web developer based in Lethbridge, AB.</p>
      </div>
    </div>
    </>
  )
}
