import React from 'react'
import styled from 'styled-components'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Snackbar } from '@mui/material';
import { Bio } from "../../data/constants";
import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
@media (max-width: 960px) {
    padding: 0px;
}
`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1350px;
padding: 0px 0px 80px 0px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

const Title = styled.div`
font-size: 42px;
text-align: center;
font-weight: 600;
margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
      margin-top: 12px;
      font-size: 32px;
  }
`;

const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        margin-top: 12px;
        font-size: 16px;
    }
`;

const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.9fr 1.2fr;
  gap: 35px;
  width: 100%;
  max-width: 1100px;
  margin-top: 50px;

  @media (max-width: 960px) {
    grid-template-columns: 1fr;
  }
`;

const ContactInfo = styled.div`
  background: ${({ theme }) => theme.card};
  padding: 35px;
  border-radius: 20px;
  border: 1px solid rgba(133,76,230,.25);
  box-shadow: rgba(23,92,230,.15) 0px 8px 30px;
  height: fit-content;
  transition: .3s;

  &:hover{
    transform: translateY(-6px);
    box-shadow: rgba(133,76,230,.35) 0px 12px 35px;
  }
`;

const InfoTitle = styled.h3`
  font-size: 28px;
  margin-bottom: 30px;
  color: ${({ theme }) => theme.text_primary};
`;

const InfoItem = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
  margin-bottom: 28px;

  svg {
    color: ${({ theme }) => theme.primary};
    font-size: 24px;
    margin-top: 5px;
    flex-shrink: 0;
  }

  div {
    display: flex;
    flex-direction: column;
  }

  span {
    color: ${({ theme }) => theme.text_primary};
    font-weight: 600;
    margin-bottom: 5px;
    font-size: 16px;
  }

  a {
    color: ${({ theme }) => theme.text_secondary};
    text-decoration: none;
    transition: 0.3s;
    word-break: break-word;

    &:hover {
      color: ${({ theme }) => theme.primary};
    }
  }

  p {
    color: ${({ theme }) => theme.text_secondary};
    margin: 0;
  }
`;


const ContactForm = styled.form`
  background:${({theme})=>theme.card};
  padding:35px;
  border-radius:20px;
  border:1px solid rgba(133,76,230,.25);
  box-shadow:rgba(23,92,230,.15) 0px 8px 30px;
  display:flex;
  flex-direction:column;
  gap:18px;
  transition:.3s;

  &:hover{
    transform:translateY(-6px);
    box-shadow:rgba(133,76,230,.35) 0px 12px 35px;
  }
`;

const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  background:#0f0f1c;
  border:1px solid rgba(255,255,255,.1);
  color:white;
  border-radius:12px;
  padding:16px;
  font-size:16px;
  outline:none;
  transition:.3s;

  &:focus{
    border:1px solid #854CE6;
    box-shadow:0 0 10px rgba(133,76,230,.4);
  }
`;

const ContactInputMessage = styled.textarea`
  background:#0f0f1c;
  border:1px solid rgba(255,255,255,.1);
  color:white;
  border-radius:12px;
  padding:16px;
  font-size:16px;
  resize:none;
  outline:none;
  transition:.3s;

  &:focus{
    border:1px solid #854CE6;
    box-shadow:0 0 10px rgba(133,76,230,.4);
  }
`;

const ContactButton = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  background: linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -moz-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  background: -webkit-linear-gradient(225deg, hsla(271, 100%, 50%, 1) 0%, hsla(294, 100%, 50%, 1) 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
`



const Contact = () => {

  //hooks
  const [open, setOpen] = React.useState(false);
  const form = useRef();

const handleSubmit = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_qiop91f",
      "template_n95pcob",
      form.current,
      "3b7ITq2vUOayFqQ68"
    )
    .then(() => {
      setOpen(true);
      form.current.reset();
    })
    .catch((error) => {
      console.error("EmailJS Error:", error);
      alert(error.text);
    });
};



  return (
    <Container>
      <Wrapper>
        <Title>Contact</Title>
        <Desc>Feel free to reach out to me for any questions or opportunities!</Desc>
       <ContactWrapper>

<ContactInfo>

  <InfoTitle>Let's Connect 👋</InfoTitle>

  <InfoItem>
    <FaEnvelope />
    <div>
      <span>Email</span>
      <a href="mailto:nandinigupta2004@gmail.com">
        nandinigarg583@gmail.com
      </a>
    </div>
  </InfoItem>

  <InfoItem>
    <FaGithub />
    <div>
      <span>GitHub</span>
      <a
        href={Bio.github}
        target="_blank"
        rel="noreferrer"
      >
        {Bio.github.replace("https://", "")}
      </a>
    </div>
  </InfoItem>

  <InfoItem>
    <FaLinkedin />
    <div>
      <span>LinkedIn</span>
      <a
        href={Bio.linkedin}
        target="_blank"
        rel="noreferrer"
      >
        {Bio.linkedin.replace("https://", "")}
      </a>
    </div>
  </InfoItem>

  <InfoItem>
    <FaMapMarkerAlt />
    <div>
      <span>Location</span>
      <p>Haryana, India</p>
    </div>
  </InfoItem>

</ContactInfo>

  <ContactForm ref={form} onSubmit={handleSubmit}>

    <ContactTitle>Send Me a Message 🚀</ContactTitle>

    <ContactInput
      required
      placeholder="Enter your email"
      name="from_email"
    />

    <ContactInput
      required
      placeholder="Enter your name"
      name="from_name"
    />

    <ContactInput
      required
      placeholder="Subject"
      name="subject"
    />

    <ContactInputMessage
      required
      rows="6"
      placeholder="Write your message..."
      name="message"
    />

    <ContactButton
      type="submit"
      value="Send Message"
    />

  </ContactForm>

</ContactWrapper>
        <Snackbar
          open={open}
          autoHideDuration={6000}
          onClose={()=>setOpen(false)}
          message="Email sent successfully!"
          severity="success"
        />
      </Wrapper>
    </Container>
  )
}

export default Contact