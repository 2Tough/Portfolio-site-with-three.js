import React, { useRef } from 'react'
import { OrbitControls, PerspectiveCamera, RenderTexture, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'



const Cube = () => {
    const textRef = useRef()
    useFrame(state => 
        (textRef.current.position.x = Math.sin(state.clock.elapsedTime)*3))
  return (
    <mesh>
    <boxGeometry/>
    <meshStandardMaterial>
        <RenderTexture attach="map">
            <PerspectiveCamera makeDefault position={[0,0,5]} />
            <color attach="background" args={["red"]}/>
            <Text ref={textRef} fontSize={2} color="#555">
                Polaski
            </Text>
        </RenderTexture>
    </meshStandardMaterial>
</mesh>

  )
}

export default Cube