import React, { useState } from 'react'
import useWindowSize from '../../hooks/window-size/useWindowSize'

export default function useWalk() {
  const maxSteps = 3;
  const { width, height } = useWindowSize()

  const playerPosWidth = (1920 - width) / 2

  const [position, setPosition] = useState({ x: 885 - playerPosWidth, y: 21 });
  const [dir, setDir] = useState(0);
  const [step, setStep] = useState(0);
  const [positionWidth, setPositionWidth] = useState(width)
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

  if (positionWidth !== width) {
    const change = width - positionWidth
    setPositionWidth(width);
    setPosition({
      x: position.x + change / 2,
      y: position.y,
    });
  }

  const walk = (dir) => {
    const change = width - positionWidth
    const baseLine = (1920 - width) / 2
    // console.log(position.x + baseLine);
    setDir(prev => {
      if (directions[dir] === prev) {

        ///////////////////////
        // TOP FENCE PATHING //
        ///////////////////////
        if (position.y <= 236) {
          if (position.x + baseLine <= 855) {
            setPosition(prev => ({
              x: prev.x + 5,
              y: prev.y,
            }));
          }
          if (position.x + baseLine >= 920) {
            setPosition(prev => ({
              x: prev.x - 5,
              y: prev.y,
            }));
          }
        }
        /////////////////
        // TOP BRIDGE ///
        /////////////////
        if (position.y > 236 && position.y < 346) {
          if (position.x + baseLine <= 880) {

            setPosition(prev => ({
              x: prev.x + 5,
              y: prev.y,
            }));
          }
          if (position.x + baseLine >= 900) {
            setPosition(prev => ({
              x: prev.x - 5,
              y: prev.y,
            }));
          }
        }

        //////////////////
        // Left Bridge  //
        //////////////////
        if (position.x + baseLine < 830 && position.x + baseLine > 725) {
          if (position.y <= 356) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y + 5,
            }));
          }
          if (position.y >= 390) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y - 5,
            }));
          }
        }
        //////////////////////////
        // top left house area  //
        //////////////////////////
        if (position.x + baseLine <= 725) {
          if (position.y <= 341) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y + 5,
            }));
          }
          // if (position.y >= 390) {
          //   setPosition(prev => ({
          //     x: prev.x,
          //     y: prev.y - 5,
          //   }));
          // }
        }
        move(dir)
      }
      return directions[dir]
    })





    setStep(prev => prev < maxSteps - 1 ? prev + 1 : 0)
  }

  const move = (dir) => {

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
