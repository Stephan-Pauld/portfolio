import React from 'react'
import Actor from '../actor'
import stuff from '../../assets/sprites/m1.png'
import useKeyPress from '../../hooks/use-key-press'
import useWalk from '../../hooks/use-walk'
import town from '../../assets/town.png'
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

  console.log(position);
  if (position.x === 1184 && position.y === 384) {
    document.getElementById('root').style.backgroundImage = "none"
    return(
      <>
        <h1>About Me</h1>
      </>
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
