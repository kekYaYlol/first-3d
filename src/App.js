import { createRoot } from 'react-dom/client'
import { Canvas, useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { OrbitControls } from '@react-three/drei'
import { useControls } from "leva";

import Hero from './Components/Hero';
import Cube from './Components/Cube';
// import Boy from './Components/Boy';
import Scene from './Components/Scene';
import './App.css';
import React from "react";

function RotatingBox() {
  const meshRef = useRef();

  // useFrame(() => {
    // if(meshRef.current) {
      // meshRef.current.rotation.x += 0.01;
      // meshRef.current.rotation.y += 0.01;
    // }
  // });

  return (
    <mesh ref={meshRef}>
      <boxGeometry args={[2, 2, 2]}/>
      <meshStandardMaterial color="blue"/>
    </mesh>
  );
  
}

function App() {
  const colors = useControls("Hero colors", {
    head: "#00baff",
    body: "#ff0000",
    arms: "#ffd400",
    legs: "#00ff00",
  });

  return (
    <div id='canvas-container' className="App">
      <Scene />

      <Canvas camera={{ position: [5, 3, 5], fov: 50}} className='first_canvas'>
        {/* <RotatingBox /> */}
        <Hero colors={colors}/>

        {/* <Boy position={[0, 0, 0]}/> */}
        {/* <Scene position={[0, 0, 0]}/> */}

        <ambientLight intensity={0.8}/>
        <directionalLight position={[5, 5, 5]} intensity={1}/>
        <OrbitControls />
      </Canvas>

    </div>
  );
}

createRoot(document.getElementById('root')).render(<App />)
export default App;