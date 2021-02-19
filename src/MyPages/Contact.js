import React, { useState } from 'react'
import { Button, Container, Balloon, Icon, TextInput, TextArea } from "nes-react";
import emailjs from 'emailjs-com';
import { templateId, serviceId, userId } from '../consts'

export default function Contact({ backToTown }) {

  const [submitted, setSubmitted] = useState(true);
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [message, setMessage] = useState();
  const [buttonText, setButtonText] = useState('Submit');

  const title = ["<ContactMe", <br />, "    style={{", <br />, "        commitment: 100%,", <br />, "        passion: 100%,", <br />, "        programming=True", <br />, "    }}", <br />, "/>"]


  const submitButton = () => {
    if (name !== undefined || email !== undefined || message !== undefined) {
      if (name.length > 2 || message.length > 15 || email.length > 1) {
        if (email.includes("@")) {
          setButtonText("E-Mail Sent!")
          setSubmitted(!submitted)
          setName("");
          setEmail("");

          const templateParams = {
            name,
            email,
            message
          }

          emailjs.send(serviceId, templateId, templateParams, userId)
            .then(function (response) {
              console.log('SUCCESS!', response.status, response.text);
            }, function (error) {
              console.log('FAILED...', error);
            });
        }
      }
    }
  }

  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', margin: '0 5% 3% 5%' }}>
        <div style={{ display: 'flex', justifyContent: 'flex-end', flexDirection: 'column', width: '15%' }}>
          <Balloon
            children={"Press here or down arrow to head back to town"}
            fromLeft={true}
          />
          <Button className="is-error" onClick={() => backToTown(1070, 566)}>Town</Button>
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

      <div style={{ width: '80%', margin: 'auto' }}>
        <Container
          title={"Contact Me"}
          dark={true}
          children={
            <>
              <div>
                <TextInput
                  label={"Name"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div>
                <TextInput
                  value={email}
                  label={"Email"}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div>
                <TextArea
                  label={"Message"}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <Button
                children={buttonText}
                success={!submitted}
                primary={submitted}
                onClick={() => submitButton()}
              />
            </>
          }
        />
      </div>




    </>
  )
}
