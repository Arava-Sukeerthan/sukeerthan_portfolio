import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

const NeuralParticles = ({ count = 5000 }) => {
  const points = useRef();

  // Create particles
  const [positions, lineIndices] = useMemo(() => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50;
    }

    // Connect nearby nodes to create a neural-like structure
    // We'll skip drawing lines directly with LineSegments here for performance
    // and instead just animate the particles nicely

    return [positions, []];
  }, [count]);

  useFrame((state) => {
    if (points.current) {
      points.current.rotation.x = state.clock.elapsedTime * 0.05 + (state.pointer.y * 0.1);
      points.current.rotation.y = state.clock.elapsedTime * 0.03 + (state.pointer.x * 0.1);
    }
  });

  return (
    <group>
      <Points ref={points} positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#06b6d4" // Cyan
          size={0.05}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
    </group>
  );
};

const ConnectingLines = ({ count = 300 }) => {
  const linesRef = useRef();

  // Draw some subtle neural connections
  const [positions, colors] = useMemo(() => {
    const pos = [];
    const color = [];
    for (let i = 0; i < count; i++) {
      const x1 = (Math.random() - 0.5) * 30;
      const y1 = (Math.random() - 0.5) * 30;
      const z1 = (Math.random() - 0.5) * 30;
      
      const distance = 5;
      const x2 = x1 + (Math.random() - 0.5) * distance;
      const y2 = y1 + (Math.random() - 0.5) * distance;
      const z2 = z1 + (Math.random() - 0.5) * distance;

      pos.push(x1, y1, z1, x2, y2, z2);
      
      // Gradient from blue to purple
      const c1 = new THREE.Color(0x06b6d4);
      const c2 = new THREE.Color(0xa855f7);
      
      color.push(c1.r, c1.g, c1.b);
      color.push(c2.r, c2.g, c2.b);
    }
    return [new Float32Array(pos), new Float32Array(color)];
  }, [count]);

  useFrame((state) => {
    if (linesRef.current) {
      linesRef.current.rotation.x = state.clock.elapsedTime * 0.02 + (state.pointer.y * 0.05);
      linesRef.current.rotation.y = state.clock.elapsedTime * 0.03 + (state.pointer.x * 0.05);
    }
  });

  return (
    <lineSegments ref={linesRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={positions.length / 3}
          array={positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-color"
          count={colors.length / 3}
          array={colors}
          itemSize={3}
        />
      </bufferGeometry>
      <lineBasicMaterial
        vertexColors={true}
        transparent
        opacity={0.15}
        blending={THREE.AdditiveBlending}
      />
    </lineSegments>
  );
};

export default function NeuralBackground() {
  return (
    <div className="fixed inset-0 w-full h-full z-0 pointer-events-none opacity-60">
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <fog attach="fog" args={['#030014', 10, 40]} />
        <NeuralParticles />
        <ConnectingLines count={400} />
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#030014]/50 to-[#030014] z-10 pointer-events-none"></div>
    </div>
  );
}
