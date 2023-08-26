import React from "react";
import styled from "styled-components"
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber"
import { MeshDistortMaterial, OrbitControls, Sphere} from "@react-three/drei"

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
    background: #da4ea2;
    color: white;
    font-weight: 500;
    width: 100px;
    padding: 1.5em 0.8em;
    border-radius: 15px;
    border: none;
    `

const Right = styled.div`
    flex: 3;
    position: relative;`
const Img = styled.img`

    width: 800px;
    height: 600px;
    object-fit: contain;
    position: absolute;
 
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    animation: animate 50s infinite linear;
   

    @keyframes animate {
        to{
            transform: translateY(20px);
            transform:rotate(360deg); 
            scale: 1;
        }

        // might edit this, trying this outjdjjdjdjdjd
        25% {
            scale: 1.1;
          }
        
          50% {
            scale: 1.2;
          }
        
          60% {
            scale: 1.3;
          }
    }
    `

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
                    <Description>I like animation, sculting and programming.</Description>
                    <Button>Learn more</Button>
                </Left>
                <Right>
                    {/* <Canvas>
                        <OrbitControls enableZoom={false} />
                        <ambientLight intensity={2}/>
                        <directionalLight position={[400,100,130]}/>
                        <Sphere args={[1, 200, 200]} scale={2.1}>
                        <MeshDistortMaterial
                            color="#011e40" 
                            attach="material" 
                            distort={0.4} 
                            speed={0.5}
                        />
                        </Sphere>
                    </Canvas> */}
                    <Img src="./img/blackhole.png"></Img>
                </Right>
            </Container>
        </Section>
    )
}

export default Hero;