import React from 'react'
import { Container } from "nes-react";
import { Button } from "nes-react";

export default function Contact({backToTown}) {

  const title = ["<ContactMe", <br />, "    style={{", <br />, "        commitment: 100%,", <br />, "        passion: 100%,", <br />, "        programming=True", <br />, "    }}", <br />, "/>"]
  return (
    <>
      <div style={{
        margin: 'auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width:'80%',
      }}>
        <div style={{display: 'flex', justifyContent:'center', flexDirection:'column'}}>
        <p style={{color: 'white'}}>Press here or Down <br/>Arrow to return to town</p>

        <Button className="is-error" onClick={()=> backToTown(1075, 566)}>Back</Button>
        </div>
      </div>
      {/* <Container>We're using containers from nes.css!</Container>; */}
    </>
  )
}
