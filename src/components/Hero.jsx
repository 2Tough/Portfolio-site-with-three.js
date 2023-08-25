import React from "react";
import styled from "styled-components"
import Navbar from "./Navbar";

const Section = styled.div`
height: 100vh;
display: flex;
flex-direction: column;
scroll-snap-align: center;
align-items: center;
justify-content: space-between;
`

const Container = styled.div`
    width: 1400px;
    display: flex;
    height: 100vh;
    scroll-snap-align: center;
    justify-content: space-between;
`

const Left = styled.div`
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 20px`
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
    background: #da4ea2
    color: white
    font-weight: `

const Right = styled.div`
    flex: 3`
const Img = styled.img``

const Hero = () => {
    return (
        <Section>
            <Navbar/>
            <Container>
                <Left>
                    <Title>Create. Learn. Have fun.</Title>
                    <WhatIDo>
                        <Subtitle>What I do</Subtitle>
                    </WhatIDo>
                    <Description></Description>
                    <Button>Learn more</Button>
                </Left>
                <Right>
                    {/* 3D model */}
                    <Img src="./img/blackhole.png"></Img>

                </Right>
            </Container>
        </Section>
    )
}

export default Hero;