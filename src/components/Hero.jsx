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

`

const Right = styled.div`

`

const Hero = () => {
    return (
        <Section>
            <Navbar/>
            <Container>
                <Left>
                    <Title>Create. Learn. Have fun.</Title>
                    <WhatWeDo>
                        <Subtitle>What I do</Subtitle>
                    </WhatWeDo>
                    <Description></Description>
                </Left>
                <Right></Right>
            </Container>
        </Section>
    )
}

export default Hero;