/* eslint-disable react/no-unknown-property */
import React, { Suspense, useEffect, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as THREE from 'three';
import { useLoader } from '@react-three/fiber';

function PhoneModel(props) {
  const group = useRef();
  const gltf = useLoader(GLTFLoader, '/models/iphone.glb');
  
  // Center and scale the model to a nice size
  useEffect(() => {
    if (!gltf?.scene) return;
    const scene = gltf.scene;
    const box = new THREE.Box3().setFromObject(scene);
    const size = new THREE.Vector3();
    const center = new THREE.Vector3();
    box.getSize(size);
    box.getCenter(center);
    scene.position.sub(center); // center the model
    const targetHeight = 2.5; // units in view
    const scale = targetHeight / (size.y || 1);
    scene.scale.setScalar(scale);
  }, [gltf]);

  useFrame((state, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.1;
    }
  });

  return <primitive ref={group} object={gltf.scene} {...props} />;
}

function CameraControls() {
  const { camera, gl } = useThree();
  const controls = useRef();
  useEffect(() => {
    controls.current = new OrbitControls(camera, gl.domElement);
    controls.current.enableDamping = true;
    controls.current.dampingFactor = 0.06;
    controls.current.rotateSpeed = 0.5;
    controls.current.enablePan = false;
    controls.current.minDistance = 2.2;
    controls.current.maxDistance = 6;
    controls.current.autoRotate = false;
    return () => controls.current?.dispose();
  }, [camera, gl]);
  useFrame(() => controls.current?.update());
  return null;
}

const IphoneScene = () => {
  return (
    <Canvas dpr={[1, 2]} camera={{ position: [0, 0, 3], fov: 36 }}>
      <ambientLight intensity={0.7} />
      <directionalLight intensity={0.8} position={[2, 2, 3]} />
      <pointLight intensity={0.5} position={[-2, -1, 2]} />
      <spotLight intensity={0.6} position={[0, 3, 2]} angle={0.3} penumbra={0.5} />
      <Suspense fallback={null}>
        <PhoneModel position={[0, -0.2, 0]} />
      </Suspense>
      <CameraControls />
    </Canvas>
  );
};

export default IphoneScene;


