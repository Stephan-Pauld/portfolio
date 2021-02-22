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


  const backToTown = (x, y) => {
    setPosition({ x: x - playerPosWidth, y: y });
    setDir(0);
  }

  const clickedOnHouse = (x, y) => {
    setPosition({ x: x - playerPosWidth, y: y });
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
        if (position.y < 21) {
          setPosition(prev => ({
            x: prev.x,
            y: prev.y + stepSize,
          }));
        }
        if (position.y <= 236) {
          if (position.x + baseLine <= 855) {
            setPosition(prev => ({
              x: prev.x + stepSize,
              y: prev.y,
            }));
          }
          if (position.x + baseLine >= 920) {
            setPosition(prev => ({
              x: prev.x - stepSize,
              y: prev.y,
            }));
          }
        }
        /////////////////
        // TOP BRIDGE ///
        /////////////////
        if (position.y > 236 && position.y < 346) {
          if (position.x + baseLine <= 880 && position.x + baseLine > 800) {

            setPosition(prev => ({
              x: prev.x + stepSize,
              y: prev.y,
            }));
          }
          if (position.x + baseLine >= 900 && position.x + baseLine <= 970) {
            setPosition(prev => ({
              x: prev.x - stepSize,
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
              y: prev.y + stepSize,
            }));
          }
          if (position.y >= 390 && position.y < 431) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y - stepSize,
            }));
          }
        }
        //////////////////
        // Right BRIDGE //
        //////////////////

        if (position.x + baseLine > 955 && position.x + baseLine < 1070) {
          if (position.y <= 356) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y + stepSize,
            }));
          }
          if (position.y >= 390 && position.y < 431) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y - stepSize,
            }));
          }
        }
        ////////////////////
        // BOTTOM BRIDGE ///
        ////////////////////
        if (position.y > 401 && position.y < 506) {
          if (position.x + baseLine <= 880 && position.x + baseLine > 800) {

            setPosition(prev => ({
              x: prev.x + stepSize,
              y: prev.y,
            }));
          }
          if (position.x + baseLine >= 900 && position.x + baseLine <= 970) {
            setPosition(prev => ({
              x: prev.x - stepSize,
              y: prev.y,
            }));
          }
        }
        ////////////////////////////////////
        // top left house area first half //
        ////////////////////////////////////
        if (position.x + baseLine <= 725 && position.x + baseLine > 600) {
          if (position.y <= 330) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y + stepSize,
            }));
          }
          if (position.y >= 390 && position.y < 431) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y - stepSize,
            }));
          }
        }
        /////////////////////////
        // top left FRONT DOOR //
        ////////////////////////
        if (position.x + baseLine <= 600 && position.x + baseLine > 570) {
          if (position.y <= 296) {

            setPosition(prev => ({
              x: prev.x,
              y: prev.y + stepSize,
            }));
          }
          // bottom fence straight down from door
          if (position.y >= 391) {

            setPosition(prev => ({
              x: prev.x,
              y: prev.y - stepSize,
            }));
          }
        }
        ////////////////////////////////////
        // top left house area sencond half //
        ////////////////////////////////////
        if (position.x + baseLine <= 570 && position.x + baseLine >= 480) {
          // top fence left of house
          if (position.y <= 330) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y + stepSize,
            }));
          }
          // Bottom Fence
          if (position.y >= 391) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y - stepSize,
            }));
          }
          // left fence
          if (position.x + baseLine <= 480) {
            setPosition(prev => ({
              x: prev.x + stepSize,
              y: prev.y,
            }));
          }
        }
        /////////////////////////////////////
        // top right house area first half //
        /////////////////////////////////////
        if (position.x + baseLine >= 1070 && position.x + baseLine < 1160) {
          if (position.y <= 330) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y + stepSize,
            }));
          }
          if (position.y >= 390 && position.y < 431) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y - stepSize,
            }));
          }
        }
        //////////////////////////
        // top right FRONT DOOR //
        /////////////////////////
        if (position.x + baseLine >= 1160 && position.x + baseLine <= 1180) {
          if (position.y <= 306) {

            setPosition(prev => ({
              x: prev.x,
              y: prev.y + stepSize,
            }));
          }
          if (position.y >= 391) {

            setPosition(prev => ({
              x: prev.x,
              y: prev.y - stepSize,
            }));
          }
        }

        /////////////////////////////////////
        // top right house area second half //
        /////////////////////////////////////
        if (position.x + baseLine >= 1185 && position.x + baseLine <= 1315) {
          if (position.y <= 330) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y + stepSize,
            }));
          }
          if (position.y >= 390) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y - stepSize,
            }));
          }
          if (position.x + baseLine >= 1315) {
            setPosition(prev => ({
              x: prev.x - stepSize,
              y: prev.y,
            }));
          }
        }
        /////////////////////////////
        // Bottom center Town Area //
        /////////////////////////////
        if (position.y > 501 && position.y < 556) {

          if (position.x + baseLine <= 870 && position.x + baseLine >= 815) {
            setPosition(prev => ({
              x: prev.x + stepSize,
              y: prev.y,
            }));
          }
          if (position.x + baseLine >= 920 && position.x + baseLine <= 955) {
            setPosition(prev => ({
              x: prev.x - stepSize,
              y: prev.y,
            }));
          }
        }
        /////////////////////////////
        // Bottom center Town fence //
        /////////////////////////////
        if (position.x + baseLine >= 860 && position.x + baseLine <= 920 && position.y > 591) {
          if (position.y >= 616) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y - stepSize,
            }));
          }

        }
        //////////////////////////////////////////
        // Bottom Town Area left side first half//
        //////////////////////////////////////////
        if (position.x + baseLine < 860 && position.x + baseLine >= 725 && position.y > 431) {

          if (position.y >= 616) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y - stepSize,
            }));
          }
          if (position.y <= 561) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y + stepSize,
            }));
          }
        }
        ////////////////////////////////////////
        // Bottom Town Area left side door area //
        //////////////////////////////////////////
        if (position.x + baseLine <= 720 && position.x + baseLine >= 700 && position.y > 431) {
          if (position.y <= 521) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y + stepSize,
            }));
          }
          if (position.y >= 616) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y - stepSize,
            }));
          }
        }
        ///////////////////////////////////////////
        // Bottom Town Area left side second half//
        //////////////////////////////////////////
        if (position.x + baseLine < 700 && position.x + baseLine >= 660 && position.y > 431) {

          if (position.x + baseLine <= 660) {
            setPosition(prev => ({
              x: prev.x + stepSize,
              y: prev.y,
            }));
          }

          if (position.y >= 616) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y - stepSize,
            }));
          }

          if (position.y <= 561) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y + stepSize,
            }));
          }
        }
        //////////////////////////////////////////
        // Bottom Town Area right side first half//
        //////////////////////////////////////////
        if (position.x + baseLine > 920 && position.x + baseLine <= 1050 && position.y > 431) {

          if (position.y >= 616) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y - stepSize,
            }));
          }
          if (position.y <= 561) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y + stepSize,
            }));
          }
        }
        ////////////////////////////////////////
        // Bottom Town Area right side door area //
        //////////////////////////////////////////
        if (position.x + baseLine >= 1050 && position.x + baseLine <= 1080 && position.y > 431) {
          if (position.y <= 521) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y + stepSize,
            }));
          }
          if (position.y >= 616) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y - stepSize,
            }));
          }
        }
        ///////////////////////////////////////////
        // Bottom Town Area left side second half//
        //////////////////////////////////////////
        if (position.x + baseLine > 1080 && position.x + baseLine >= 660 && position.y > 431) {

          if (position.x + baseLine >= 1110) {
            setPosition(prev => ({
              x: prev.x - stepSize,
              y: prev.y,
            }));
          }

          if (position.y >= 616) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y - stepSize,
            }));
          }

          if (position.y <= 561) {
            setPosition(prev => ({
              x: prev.x,
              y: prev.y + stepSize,
            }));
          }
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
    backToTown,
    clickedOnHouse,
  }
}
