import React, { useState } from 'react'
import useWindowSize from '../../hooks/window-size/useWindowSize'

export default function useWalk() {
  const maxSteps = 3;
  const {width, height} = useWindowSize()

  const playerPosWidth = (1920 - width) / 2

  const [position, setPosition] = useState({ x: 816 - playerPosWidth , y: 16 });
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);
  const [positionWidth, setPositionWidth] = useState(width)
  // console.log(positionWidth - width);
  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  }
  const stepSize = 5;
  const modifier = {
    down: { x: 0, y: stepSize },
    left: { x: -stepSize, y: 0 },
    right: { x: stepSize, y: 0 },
    up: { x: 0, y: -stepSize },
  };

  if (positionWidth !== width){
    const change = width - positionWidth 
      setPositionWidth(width);
      console.log(change);
      setPosition({
        x: position.x + change /2,
        y: position.y,
      });
  }


  const walk = (dir) => {
    setDir(prev => {
      if (directions[dir] === prev) {
        if (dir === "left" && position.x === 0){
          return
        }
        if (dir === "up" && position.y === 0){
          return
        }
        move(dir)
      }
      return directions[dir]
    })
    setStep(prev => prev < maxSteps - 1 ? prev + 1 : 0)
  }

  const move = (dir) => {
    // console.log(window.innerWidth - window.innerHeight - position.x);

    setPosition(prev => ({
      x: prev.x + modifier[dir].x,
      y: prev.y + modifier[dir].y,
    }));

  };

  return {
    walk,
    dir,
    step,
    position,
  }
}
