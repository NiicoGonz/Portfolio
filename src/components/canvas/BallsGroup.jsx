import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import CanvasLoader from "../Loader";

// Componente individual de bola con rotación automática
const Ball = ({ imgUrl, color, index }) => {
  const [decal] = useTexture([imgUrl]);
  const ballRef = useRef();

  // Rotación automática individual
  useFrame((state, delta) => {
    if (ballRef.current) {
      // Rotación en Y axis + ligera variación por índice
      ballRef.current.rotation.y += delta * (0.5 + index * 0.05);
      ballRef.current.rotation.x += delta * 0.2;
    }
  });

  return (
    <Float speed={1.75} rotationIntensity={0.5} floatIntensity={2}>
      <ambientLight intensity={0.4} />
      <directionalLight position={[0, 0, 0.05]} intensity={1} />
      <group ref={ballRef}>
        <mesh castShadow receiveShadow scale={2.75}>
          {/* Geometría optimizada: 32,32 -> 16,16 = 75% menos polígonos */}
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial
            color={color}
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
            emissive={color}
            emissiveIntensity={0.4}
          />
          <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
          />
        </mesh>
      </group>
    </Float>
  );
};

// Canvas individual para cada bola (pero optimizado)
const BallCanvas = ({ icon, color, index }) => {
  return (
    <Canvas
      frameloop="always"
      dpr={[1, 1.5]}
      gl={{
        preserveDrawingBuffer: true,
        antialias: false,
        powerPreference: "high-performance"
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
        />
        <Ball imgUrl={icon} color={color} index={index} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
