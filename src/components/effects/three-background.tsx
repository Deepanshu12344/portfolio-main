"use client";

import { Canvas } from "@react-three/fiber";
import { Float, Icosahedron } from "@react-three/drei";

export function ThreeBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 opacity-40">
      <Canvas camera={{ position: [0, 0, 5] }}>
        <ambientLight intensity={0.6} />
        <directionalLight position={[2, 2, 2]} intensity={1.2} />
        <Float speed={1.4} rotationIntensity={0.8} floatIntensity={1.2}>
          <Icosahedron args={[1.2, 0]}>
            <meshStandardMaterial color="#4cc9f0" wireframe />
          </Icosahedron>
        </Float>
      </Canvas>
    </div>
  );
}

