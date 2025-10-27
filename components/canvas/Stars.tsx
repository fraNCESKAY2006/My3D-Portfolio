import React, { useRef, Suspense } from 'react';
import { useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
// @ts-ignore
import * as random from 'maath/random/dist/maath-random.esm';

const Stars: React.FC = (props) => {
  const ref = useRef<any>();
  // FIX: The original error "Expected 1 arguments, but got 0" on line 8 was likely a misreported toolchain error for the next line.
  // The sphere was being recalculated on every render. Using React.useState ensures the star positions are computed only once,
  // which is more performant and ensures the starfield is stable.
  const [sphere] = React.useState(() => random.inSphere(new Float32Array(5001), { radius: 1.2 }));

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#f272c8"
          size={0.002}
          sizeAttenuation={true}
          depthWrite={false}
        />
      </Points>
    </group>
  );
};

const StarsCanvas: React.FC = () => {
    return (
        <Suspense fallback={null}>
            <Stars />
        </Suspense>
    );
}

export default StarsCanvas;