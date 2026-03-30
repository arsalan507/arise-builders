"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";

function Building({
  position,
  scale,
  color,
  speed = 1,
}: {
  position: [number, number, number];
  scale: [number, number, number];
  color: string;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.3 * speed) * 0.1;
      meshRef.current.position.y =
        position[1] + Math.sin(state.clock.elapsedTime * 0.5 * speed) * 0.15;
    }
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial
        color={color}
        transparent
        opacity={0.6}
        roughness={0.3}
        metalness={0.1}
      />
    </mesh>
  );
}

function Particles() {
  const points = useRef<THREE.Points>(null);
  const count = 200;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 15;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 15;
    }
    return pos;
  }, []);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.y = state.clock.elapsedTime * 0.03;
      points.current.rotation.x = state.clock.elapsedTime * 0.02;
    }
  });

  return (
    <points ref={points}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.03}
        color="#C8956C"
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  );
}

function GridLines() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Wireframe buildings */}
      {[
        { pos: [2, 0, 0] as [number, number, number], h: 3, w: 0.8 },
        { pos: [3.5, -0.5, -1] as [number, number, number], h: 2, w: 1 },
        { pos: [1, -0.3, 1.5] as [number, number, number], h: 2.5, w: 0.6 },
        { pos: [4, 0.2, 1] as [number, number, number], h: 1.8, w: 0.7 },
        { pos: [0, -0.2, -1] as [number, number, number], h: 3.5, w: 0.9 },
      ].map((b, i) => (
        <mesh key={i} position={b.pos}>
          <boxGeometry args={[b.w, b.h, b.w]} />
          <meshStandardMaterial
            color="#C8956C"
            wireframe
            transparent
            opacity={0.15}
          />
        </mesh>
      ))}
    </group>
  );
}

function SceneContent() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <directionalLight position={[10, 10, 5]} intensity={0.8} />
      <pointLight position={[-5, 5, 5]} intensity={0.3} color="#C8956C" />

      <Float speed={1.5} rotationIntensity={0.2} floatIntensity={0.5}>
        <Building
          position={[2.5, 0, 0]}
          scale={[0.8, 2.5, 0.8]}
          color="#C8956C"
          speed={0.8}
        />
      </Float>

      <Float speed={1.2} rotationIntensity={0.15} floatIntensity={0.4}>
        <Building
          position={[4, -0.3, -1]}
          scale={[1, 1.8, 1]}
          color="#D4CFC3"
          speed={1.2}
        />
      </Float>

      <Float speed={1} rotationIntensity={0.1} floatIntensity={0.3}>
        <Building
          position={[1, 0.2, 1.5]}
          scale={[0.6, 3, 0.6]}
          color="#E4C9AD"
          speed={0.6}
        />
      </Float>

      <Particles />
      <GridLines />
    </>
  );
}

export default function Scene3D() {
  return (
    <Canvas
      camera={{ position: [0, 1, 8], fov: 45 }}
      dpr={[1, 1.5]}
      style={{ background: "transparent" }}
      gl={{ alpha: true, antialias: true }}
    >
      <SceneContent />
    </Canvas>
  );
}
