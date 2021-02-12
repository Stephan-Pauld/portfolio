import React from 'react'
import Actor from '../actor'
import useKeyPress from '../../hooks/use-key-press'
import useWalk from '../../hooks/use-walk'
import town from '../../assets/town.png'
import aboutMe from '../../assets/aboutMe.jpeg'


export default function Player({skin}) {
  const { dir, step, walk, position } = useWalk(3)
  const data = {
    h: 32,
    w: 32,
  }
  useKeyPress((e) => {   
    walk(e.key.replace("Arrow", "").toLowerCase())
    e.preventDefault();
  })

 const kittens = ["<AboutMe", <br/>, "style={{", <br/>, "commitment: 100%,", <br/>, "passion: 100%,",<br/>, "programming=True", <br/>,"}}",<br/>, "/>"]

  if (position.x === 1200 && position.y === 384) {

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
          {kittens}
        </h1>
      </div>
    )
  } else {
    document.getElementById('root').style.backgroundImage = `url(${town})`
    return (
      <Actor
      sprite={skin}
      data={data}
      step={step}
      dir={dir}
      position={position}
      />
      )
  }

}
