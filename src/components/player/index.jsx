import React, { useEffect } from "react";
import Actor from "../actor";
import useKeyPress from "../../hooks/use-key-press";
import useWalk from "../../hooks/use-walk";
import useWindowSize from "../../hooks/window-size/useWindowSize";
import town from "../../assets/town.png";
import townWithTitles from "../../assets/photos/townAndTitles.png";
import AboutMe from "../../MyPages/AboutMe";
import Project from "../../MyPages/Projects";
import Contact from "../../MyPages/Contact";

export default function Player({ skin }) {
  document.getElementById("root").style.backgroundColor = "#2d2d2d";
  document.getElementById("root").style.height = "100vh";

  const { dir, step, walk, position, backToTown, clickedOnHouse } = useWalk();
  const { width, height } = useWindowSize();
  const aboutMeDoorX = (1920 - width) / 2;

  useKeyPress((e) => {
    const directions = ["up", "down", "left", "right"];

    const direction = e.key.replace("Arrow", "").toLowerCase();

    // this conditional stops app from crashing if
    // ANYTHING other than arrows are pressed
    if (!directions.includes(direction)) {
      return;
    }
    walk(direction);
    e.preventDefault();
  });

  if (
    position.x + aboutMeDoorX > 1155 &&
    position.x + aboutMeDoorX < 1176 &&
    position.y === 306
  ) {
    /// ABOUT ME PAGE!!!!!
    document.getElementById("root").style.backgroundImage = "none";
    document.getElementById("main").classList.remove("map-alignment");
    document.getElementById("root").style.paddingBottom = "1px";
    document.getElementById("root").style.height = null;

    return (
      <>
        <AboutMe backToTown={backToTown} />
      </>
    );
  } else if (
    position.x + aboutMeDoorX >= 575 &&
    position.x + aboutMeDoorX <= 600 &&
    position.y <= 301
  ) {
    /// PROJECT PAGE!!!!!
    document.getElementById("root").style.backgroundImage = "none";
    document.getElementById("root").style.paddingBottom = "1px";
    document.getElementById("main").classList.remove("map-alignment");
    document.getElementById("root").style.height = null;

    return (
      <>
        <Project backToTown={backToTown} />
      </>
    );
  } else if (
    position.x + aboutMeDoorX >= 1055 &&
    position.x + aboutMeDoorX <= 1080 &&
    position.y <= 526 &&
    position.y >= 500
  ) {
    /// CONTACT PAGE!!!!!
    document.getElementById("root").style.backgroundImage = "none";
    document.getElementById("main").classList.remove("map-alignment");
    document.getElementById("root").style.height = "100vh";

    return (
      <>
        <Contact backToTown={backToTown} />
      </>
    );
  } else {
    if (document.getElementById("main")) {
      document.getElementById("main").classList.add("map-alignment");
    }
    console.log(1110 - aboutMeDoorX);
    const aboutHouseRegion = 1110 - aboutMeDoorX;
    const projectHouseRegion = 535 - aboutMeDoorX;
    const contactHouseRegion = 1010 - aboutMeDoorX;
    return (
      <>
        <div
          className="about-house"
          style={{
            position: "absolute",
            left: `${aboutHouseRegion}px`,
            top: "210px",
            width: "150px",
            height: "150px"
          }}
          onClick={()=> clickedOnHouse(1160, 306)}
        />

        <div

          className="projects-house"
          style={{
            position: "absolute",
            left: `${projectHouseRegion}px`,
            top: "210px",
            width: "150px",
            height: "150px",
          }}
          onClick={()=> clickedOnHouse(590, 301)}
        />

        <div
          className="contact-house"
          style={{
            position: "absolute",
            left: `${contactHouseRegion}px`,
            top: "440px",
            width: "150px",
            height: "150px",
          }}
          onClick={()=> clickedOnHouse(1065, 526)}
        />
        <img id="map" src={townWithTitles} alt="" />
        <Actor sprite={skin} step={step} dir={dir} position={position} />
      </>
    );
  }
}
