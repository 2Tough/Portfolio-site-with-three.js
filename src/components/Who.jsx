import React from "react";
import styled from "styled-components"


const Section = styled.div`
height: 100vh;
display: flex;
scroll-snap-align: center;

justify-content: center;
`

const Container = styled.div`
    width: 1400px;
    display: flex;
    height: 100vh;
    scroll-snap-align: center;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 1;
`
    
const Title = styled.h1`
    font-size: 74px;`

const WhatIDo = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;`

const Description = styled.p`
    font-size: 24px;
    color: lightgray;
`

const Subtitle = styled.h2`
    color: #da4ea2;
`;

const Button = styled.button`
    background: #da4ea2;
    color: white;
    font-weight: 500;
    width: 120px;
    padding: 1.5em 0.8em;
    border-radius: 15px;
    border: none;
    `

const Right = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px
    `
const Img = styled.img`
   
    `

const Who = () => {
    return (
        <Section>
            
            <Container>
                <Left>
                    {/* 3D model */}
                </Left>
                <Right>
                    <Title>Let your imagination be free</Title>
                    <WhatIDo>
                        <Subtitle>What I do</Subtitle>
                    </WhatIDo>
                    <Description>I passion about creating and cool stuff.</Description>
                    <Button>See my work</Button>
                
                
                    
                    <Img></Img>
                </Right>
            </Container>
        </Section>
    )
}

export default Who;