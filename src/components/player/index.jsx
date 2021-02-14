import React, {useEffect} from 'react'
import Actor from '../actor'
import useKeyPress from '../../hooks/use-key-press'
import useWalk from '../../hooks/use-walk'
import useWindowSize from '../../hooks/window-size/useWindowSize'
import town from '../../assets/town.png'
import aboutMe from '../../assets/aboutMe.jpeg'


export default function Player({skin}) {
  const title = ["<AboutMe", <br/>, "style={{", <br/>, "commitment: 100%,", <br/>, "passion: 100%,",<br/>, "programming=True", <br/>,"}}",<br/>, "/>"]

  const { dir, step, walk, position } = useWalk()
  const {width, height} = useWindowSize()
  // console.log(width, height);
  useKeyPress((e) => {   
    walk(e.key.replace("Arrow", "").toLowerCase())
    e.preventDefault();
  })


  // Setting DOORS FOR PAGES
  // 1711 is width
  // 1061 is x @ 1711
  // 1160 @ 1920
  //1920 - 1711 / 2 = 104.5
  // console.log((1920 - width)/2);
  // console.log(position.x + 191);

  const aboutMeDoorX = (1920 - width) / 2
  // console.log(aboutMeDoorX);
  // console.log(width);
  // console.log(position.y);
  // console.log(position.x + aboutMeDoorX);
  // Door positions if screensize changes
  if (position.x + aboutMeDoorX > 1155 && position.x + aboutMeDoorX < 1176 && position.y === 306) {
    document.getElementById('root').style.backgroundImage = 'none'
    document.getElementById('root').style.backgroundColor = "#2D2D2D"
    return(
      <div  style={{
        color: 'white', 
        fontFamily: 'Ubuntu',
        // textAlign: 'center',
        // fontSize: '12px'
        }}>
        <h1 className="title">
          {title}
        </h1>
      </div>
    )
  } else {
    // document.getElementById('root').style.backgroundImage = `url(${town})`
    return (
      <>
      <img id="map" src={town} alt=""/>
      <Actor
      sprite={skin}
      step={step}
      dir={dir}
      position={position}
      />
      </>
      )
  }

}
