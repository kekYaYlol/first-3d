import React from "react";

export default function Hero({ colors }) {
    return (
        <group>
            {/* Head */}
            <mesh position={[0, 2.5, 0]}>
                <boxGeometry args={[1, 1, 1]}/>
                <meshStandardMaterial color={colors.head}/>
            </mesh>
    
            {/* Body */}
            <mesh position={[0, 1.5, 0]}>
                <boxGeometry args={[1, 2, 0.5]}/>
                <meshStandardMaterial color={colors.body}/>
            </mesh>

            {/* Left leg */}
            <mesh position={[0.25, -0.25, 0]}>
                <boxGeometry args={[0.5, 1.5, 0.5]}/>
                <meshStandardMaterial color={colors.legs}/>
            </mesh>
    
            {/* Right leg */}
            <mesh position={[-0.25, -0.25, 0]}>
                <boxGeometry args={[0.5, 1.5, 0.5]}/>
                <meshStandardMaterial color={colors.legs}/>
            </mesh>

            {/* Left arm */}
            <mesh position={[0.75, 1.25, 0]}>
                <boxGeometry args={[0.5, 1.5, 0.5]}/>
                <meshStandardMaterial color={colors.arms}/>
            </mesh>
    
            {/* Right arm */}
            <mesh position={[-0.75, 1.25, 0]}>
                <boxGeometry args={[0.5, 1.5, 0.5]}/>
                <meshStandardMaterial color={colors.arms}/>
            </mesh>
        </group>
    );
}