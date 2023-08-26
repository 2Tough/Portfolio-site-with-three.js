import React, { useRef , useState } from 'react';
import emailjs from '@emailjs/browser';
import styled from "styled-components"
import Map from "./Map";



const Section = styled.div`
height: 100vh;
scroll-snap-align: center;
`

const Container = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    gap: 50px;
`

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`

const Right = styled.div`
    flex: 1;
 
`

const Title = styled.h1`
    font-weight: 200;

`

const Form = styled.form`
    width: 500px;
    display: flex;
    flex-direction: column;
    gap: 25px;
`

const Input = styled.input`
    padding: 20px;
    background:  rgba(0, 0, 0, 0.6);
    color: white;
    border: none;
    border-radius: 5px;

`

const TextArea = styled.textarea`
    padding: 20px;
    background: rgba(0, 0, 0, 0.6);
    border: none;
    color: white;
    border-radius: 5px;
`

const Button = styled.button`
    background: black;
    font-weight: bold;
    color: white;
    border: white 1px solid;
    cursor: pointer;
    border-radius: 5px;
    padding: 20px;
`

const Contact = () => {
    
    const ref = useRef();
    const [success, setSuccess] = useState(false)    

    const handleSubmit = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('private', 'private', ref.current, '-private')
        .then((result) => {
            console.log(result.text);
            setSuccess(true)
        }, (error) => {
            console.log(error.text);
        });
    
    }

    return (
        <Section>
            <Container>
                <Left>
                    <Form ref={ref} onSubmit={handleSubmit}>
                        <Title>Contact me</Title>
                        <Input placeholder="Name" name="name"/>
                        <Input placeholder="Email" name="email"/>
                        <TextArea placeholder="Write your message" name="message" rows={10}/>
                        <Button type="submit">Send</Button>
                        {success &&
                        "Your message has been sent. I will get back to you soon!"}
                    </Form>
                </Left>
                <Right>
                   <Map/>
                </Right>
            </Container>
        </Section>
    )
}

export default Contact;