import { Suspense, useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";

import CanvasLoader from "../Loader";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);
  const ballRef = useRef();
  const initialPosition = useRef();
  const [resetBall, setResetBall] = useState(false);

  useFrame(() => {
    if (!initialPosition.current) {
      initialPosition.current = ballRef.current.position.clone();
    }
    if (resetBall) {
      ballRef.current.position.copy(initialPosition.current);
      ballRef.current.rotation.set(0, 0, 0);
      setResetBall(false);
    }
  });

  return (
    <Float speed={3.5} rotationIntensity={1} floatIntensity={2}>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <mesh ref={ballRef} castShadow receiveShadow scale={2.75}>
        <sphereGeometry args={[1, 32, 32]} />
        <meshStandardMaterial
          color="#aaa6c3"
          polygonOffset
          polygonOffsetFactor={-5}
          flatShading
        />
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading
        />
      </mesh>
    </Float>
  );
};

const BallCanvas = ({ icon }) => {
  const orbitControls = useRef();
  const [resetBall, setResetBall] = useState(false);

  const handleEndMove = () => {
    orbitControls.current.reset(); // Resetea la posición de los controles de órbita
    setResetBall(true); // Activa el reseteo de la esfera
  };

  return (
    <Canvas
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          ref={orbitControls}
          onEnd={() => handleEndMove()}
        />
        <Ball imgUrl={icon} resetBall={resetBall} setResetBall={setResetBall} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
