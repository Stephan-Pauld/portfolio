import React from 'react'
import { Button } from "nes-react";
import { Icon } from "nes-react";
import { Balloon } from "nes-react";
import { Container } from "nes-react";

export default function Contact({ backToTown }) {

  const title = ["<ContactMe", <br />, "    style={{", <br />, "        commitment: 100%,", <br />, "        passion: 100%,", <br />, "        programming=True", <br />, "    }}", <br />, "/>"]
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '3% 5% 3% 5%' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', width: '15%' }}>
          <Balloon
            children={"Press here or down arrow to head back to town"}
            fromLeft={true}
          />
          <Button className="is-error" onClick={() => backToTown(1170, 346)}>Town</Button>
        </div>
        <div>
          <Icon
            icon={"heart"}
          />
          <Icon
            className={"is-empty"}
            icon={"heart"}
          />
          <Icon
            className={"is-empty"}
            icon={"heart"}
          />
          <Icon
            className={"is-empty"}
            icon={"heart"}
          />
        </div>
      </div>



      <div style={{width: '55%', margin: 'auto'}}>
        <Container
          title={"THIS IS IT"}
          dark={true}
          children={
            "This is the stufff"
          }
        />
      </div>




    </>
  )
}
