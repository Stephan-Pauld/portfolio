import React from 'react'

export default function Sprite({image, data, position}) {
  const {y, x, h, w} = data



  return (
<>
  <div
    style={{
      position: "absolute",
      top: position.y ,
      left: position.x,
      height: `${h}px`,
      width: `${w}px`,
      backgroundImage: `url(${image})`,
      backgroundRepeat: "no-repeat",
      backgroundPosition: `-${x}px -${y}px`
    }}
    >
      {/* <h5 style={{
        position: "absolute",
      top: '-63px',
      backgroundColor:'white',
    }}>
        X:{position.x}.
        Y:{position.y}
        <br/>
        width: {window.innerWidth}
      </h5> */}
  </div>
    </>
  )
}