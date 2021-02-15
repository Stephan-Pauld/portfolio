import React from 'react'
import Player from './components/player'
import m1 from './assets/sprites/m1.png'
import m2 from './assets/sprites/m2.png'
import e1 from './assets/sprites/e1.png'
import f1 from './assets/sprites/f1.png'
import f2 from './assets/sprites/f2.png'
import "./index.css"


export default function App() {


  return (
      <div id="main" className="map-alignment">
      <Player
      skin={m2}
      />
    </div>
  )
}
