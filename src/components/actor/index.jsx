import React from "react";
import Sprite from "../sprite";

export default function Actor({
  sprite,
  data,
  position = { x: 0, y: 0 },
  step = 0,
  dir = 0,
}) {
  // const {h, w} = data;

  return (
    <Sprite
      image={sprite}
      position={position}
      data={{
        x: step * 32,
        y: dir * 32,
        w: 32,
        h: 32,
      }}
    />
  );
}
