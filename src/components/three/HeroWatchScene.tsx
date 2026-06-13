"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, MeshReflectorMaterial } from "@react-three/drei";
import { useRef } from "react";
import type { Group } from "three";

function AbstractWatch() {
  const groupRef = useRef<Group>(null);

  useFrame(({ mouse }) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = mouse.x * 0.35;
    groupRef.current.rotation.x = -0.18 + mouse.y * 0.12;
  });

  return (
    <group ref={groupRef} rotation={[-0.2, 0.2, 0]} scale={1.35}>
      <mesh castShadow receiveShadow>
        <cylinderGeometry args={[1.12, 1.12, 0.18, 128]} />
        <meshStandardMaterial color="#d7bd7f" metalness={0.85} roughness={0.18} />
      </mesh>
      <mesh position={[0, 0.11, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <circleGeometry args={[0.94, 128]} />
        <meshStandardMaterial color="#050505" metalness={0.55} roughness={0.25} />
      </mesh>
      <mesh position={[0, 0.22, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[0.98, 0.035, 24, 128]} />
        <meshStandardMaterial color="#fff2c5" metalness={0.9} roughness={0.12} />
      </mesh>
      <mesh position={[0, 0.24, 0]} rotation={[Math.PI / 2, 0, 0]}>
        <boxGeometry args={[0.055, 0.7, 0.025]} />
        <meshStandardMaterial color="#f8f1da" metalness={0.8} roughness={0.18} />
      </mesh>
      <mesh position={[0, 0.25, 0]} rotation={[Math.PI / 2, 0, -0.9]}>
        <boxGeometry args={[0.04, 0.52, 0.025]} />
        <meshStandardMaterial color="#d7bd7f" metalness={0.8} roughness={0.18} />
      </mesh>
      {Array.from({ length: 12 }).map((_, index) => {
        const angle = (index / 12) * Math.PI * 2;
        return (
          <mesh key={index} position={[Math.cos(angle) * 0.78, 0.25, Math.sin(angle) * 0.78]} rotation={[0, angle, 0]}>
            <boxGeometry args={[0.028, 0.07, 0.012]} />
            <meshStandardMaterial color="#d7bd7f" metalness={0.9} roughness={0.14} />
          </mesh>
        );
      })}
      <mesh position={[0, -0.05, 1.34]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.64, 0.16, 1.04]} />
        <meshStandardMaterial color="#a7a7a7" metalness={0.95} roughness={0.2} />
      </mesh>
      <mesh position={[0, -0.05, -1.34]} rotation={[0, 0, 0]}>
        <boxGeometry args={[0.64, 0.16, 1.04]} />
        <meshStandardMaterial color="#a7a7a7" metalness={0.95} roughness={0.2} />
      </mesh>
    </group>
  );
}

export function HeroWatchScene() {
  return (
    <Canvas shadows camera={{ position: [0, 1.2, 5.2], fov: 38 }} dpr={[1, 1.8]}>
      <ambientLight intensity={0.8} />
      <directionalLight position={[3, 5, 4]} intensity={2.6} castShadow />
      <spotLight position={[-3, 4, 2]} intensity={4} angle={0.5} penumbra={0.7} />
      <Float speed={1.5} rotationIntensity={0.28} floatIntensity={0.32}>
        <AbstractWatch />
      </Float>
      <mesh position={[0, -1.7, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[7, 7]} />
        <MeshReflectorMaterial
          color="#050505"
          blur={[280, 80]}
          resolution={512}
          mixBlur={1}
          mixStrength={0.65}
          roughness={0.65}
          metalness={0.4}
        />
      </mesh>
      <Environment preset="city" />
    </Canvas>
  );
}
