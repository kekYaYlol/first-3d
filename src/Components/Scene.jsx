import { Canvas } from "@react-three/fiber"
import { OrbitControls } from "@react-three/drei"

import Boy from "./Boy";
import Tree from "./Tree";

export default function Scene() {
    return (
        <Canvas camera={{ position: [0, 5, 10], fov: 50 }}>
            <ambientLight intensity={1}/>
            <directionalLight position={[0, 0, 5]} intensity={1}/>
            <OrbitControls />

            <gridHelper args={[25, 25]} />

            <Boy position={[0, 0, 0]} />
            <Tree position={[7, 0.5, 0]} />
        </Canvas>
    )
}