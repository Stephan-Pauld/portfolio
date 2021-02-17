import React, { useEffect } from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk";
import useWindowSize from "../../hooks/window-size/useWindowSize";
import town from "../../assets/town.png";
import AboutMe from "../../MyPages/AboutMe";
import Project from "../../MyPages/Projects"
import Contact from "../../MyPages/Contact"
export default function Player({ skin }) {
  const { dir, step, walk, position } = useWalk();
  const { width, height } = useWindowSize();

  // console.log(width, height);
  useKeyPress((e) => {
    walk(e.key.replace("Arrow", "").toLowerCase());
    e.preventDefault();
  });

  // Setting DOORS FOR PAGES
  // 1711 is width
  // 1061 is x @ 1711
  // 1160 @ 1920
  //1920 - 1711 / 2 = 104.5
  // console.log((1920 - width)/2);
  // console.log(position.x + 191);

  const aboutMeDoorX = (1920 - width) / 2;
  // console.log(aboutMeDoorX);
  // console.log(width);
  // console.log(position.y);
  // console.log(position.x + aboutMeDoorX);
  // Door positions if screensize changes
  if (
    position.x + aboutMeDoorX > 1155 &&
    position.x + aboutMeDoorX < 1176 &&
    position.y === 306
  ) {
    /// ABOUT ME PAGE!!!!!
    document.getElementById("root").style.backgroundImage = "none";
    document.getElementById("root").style.backgroundColor = "#2D2D2D";
    document.getElementById("main").classList.remove("map-alignment");
    return (
      <>
        <AboutMe />
        {/* <Actor
      sprite={skin}
      step={step}
      dir={dir}
      position={position}
      /> */}
      </>
    );
  } else if(
    
    position.x + aboutMeDoorX >= 575 &&
    position.x + aboutMeDoorX <= 600 &&
    position.y <= 301 
  ) {
    document.getElementById("root").style.backgroundImage = "none";
    document.getElementById("root").style.backgroundColor = "#2D2D2D";
    document.getElementById("main").classList.remove("map-alignment");
    return (
      <>
        <Project />
        {/* <Actor
      sprite={skin}
      step={step}
      dir={dir}
      position={position}
      /> */}
      </>
    );
    
  } else if(
    position.x + aboutMeDoorX >= 1055 &&
    position.x + aboutMeDoorX <= 1080 &&
    position.y <= 526 && position.y >= 500
  ) {
    document.getElementById("root").style.backgroundImage = "none";
    document.getElementById("root").style.backgroundColor = "#2D2D2D";
    document.getElementById("main").classList.remove("map-alignment");
    return (
      <>
        <Contact />
        {/* <Actor
      sprite={skin}
      step={step}
      dir={dir}
      position={position}
      /> */}
      </>
    );

  } else {
    // document.getElementById('root').style.backgroundImage = `url(${town})`
    if (document.getElementById("main")) {
      document.getElementById("main").classList.add("map-alignment");
    }
    return (
      <>
        <img id="map" src={town} alt="" />
        <Actor sprite={skin} step={step} dir={dir} position={position} />
      </>
    );
  }
}
