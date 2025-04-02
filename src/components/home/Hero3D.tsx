import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';


const AnimatedSphere = () => {
  return (
    <Sphere args={[1, 64, 64]} visible>
      <MeshDistortMaterial
        color="#6c63ff"
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.4}
      />
    </Sphere>
  );
};

const Hero3D = () => {
  return (
    <div className="hero-canvas-container">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
        <AnimatedSphere />
      </Canvas>
    </div>
  );
};

export default Hero3D; 