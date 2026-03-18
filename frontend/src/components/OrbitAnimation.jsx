import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const OrbitRing = ({ rotation, speed, color, radius, xTilt, particles, isHovered }) => {
  const groupRef = useRef();
  
  useFrame((state, delta) => {
    // Increase speed slightly when hovered
    const currentSpeed = isHovered ? speed * 1.5 : speed;
    groupRef.current.rotation.z -= currentSpeed * delta;
  });

  return (
    <group rotation={rotation}>
      <group ref={groupRef} rotation-x={xTilt}>
        <mesh>
          <torusGeometry args={[radius, 0.012, 16, 100]} />
          <meshBasicMaterial color={color} transparent opacity={isHovered ? 0.6 : 0.3} blending={THREE.AdditiveBlending} />
        </mesh>
        
        {/* Glow particles on the ring */}
        {particles.map((angle, i) => (
          <group key={i} rotation-z={angle}>
            <mesh position={[radius, 0, 0]}>
              <sphereGeometry args={[0.08, 16, 16]} />
              <meshBasicMaterial color={color} transparent opacity={isHovered ? 1 : 0.8} blending={THREE.AdditiveBlending} />
            </mesh>
            <mesh position={[radius, 0, 0]}>
              <sphereGeometry args={[0.15, 16, 16]} />
              <meshBasicMaterial color={color} transparent opacity={isHovered ? 0.6 : 0.3} blending={THREE.AdditiveBlending} />
            </mesh>
          </group>
        ))}
      </group>
    </group>
  );
};

const OrbitAnimation = ({ isHovered }) => {
  return (
    <div className="absolute inset-[-40%] z-0 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 9], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <Float speed={isHovered ? 3 : 1.5} rotationIntensity={0.5} floatIntensity={isHovered ? 1 : 0.5}>
          {/* Blue Ring */}
          <OrbitRing 
            isHovered={isHovered}
            rotation={[0, 0, 0]} 
            speed={0.3} 
            color="#3b82f6" // blue-500
            radius={3.4} 
            xTilt={Math.PI / 2.5} 
            particles={[0, Math.PI]} 
          />
          {/* Red Ring */}
          <OrbitRing 
            isHovered={isHovered}
            rotation={[0, 0, Math.PI / 2]} 
            speed={0.4} 
            color="#ef4444" // red-500
            radius={3.6} 
            xTilt={Math.PI / 3} 
            particles={[Math.PI / 2]} 
          />
          {/* Purple/Accent Ring */}
          <OrbitRing 
            isHovered={isHovered}
            rotation={[0, 0, -Math.PI / 4]} 
            speed={0.2} 
            color="#ec4899" // pink-500
            radius={3.2} 
            xTilt={Math.PI / 2.2} 
            particles={[Math.PI * 1.5]} 
          />
        </Float>
      </Canvas>
    </div>
  );
};

export default OrbitAnimation;
