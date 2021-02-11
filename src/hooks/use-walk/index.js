import React, { useState } from 'react'

export default function useWalk(maxSteps) {
  const [position, setPosition] = useState({ x: 816, y: 16 });
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);

  const directions = {
    down: 0,
    left: 1,
    right: 2,
    up: 3,
  }

  const stepSize = 16;

  const modifier = {
    down: { x: 0, y: stepSize },
    left: { x: -stepSize, y: 0 },
    right: { x: stepSize, y: 0 },
    up: { x: 0, y: -stepSize },
  };

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
    console.log(position, dir);
    // if (position.x <= 0 || position.x === -16) {
    //   console.log("cats");
    //   setPosition(prev => ({
    //     x: 0,
    //     y: prev.y
    //   }));
    // }
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
