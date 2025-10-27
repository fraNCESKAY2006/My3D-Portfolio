import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { MeshDistortMaterial, Sphere } from '@react-three/drei';
import { Mesh } from 'three';

const AnimatedBlob: React.FC = () => {
  const ref = useRef<Mesh>(null!);

  useFrame((state) => {
    if (ref.current) {
        ref.current.position.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.5;
    }
  });

  return (
    <group>
        <ambientLight intensity={1} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <Sphere ref={ref} args={[1, 64, 64]}>
        <MeshDistortMaterial
            color="#8A2BE2"
            attach="material"
            distort={0.5}
            speed={1.5}
            roughness={0.1}
            metalness={0.2}
        />
        </Sphere>
    </group>
  );
};

export default AnimatedBlob;