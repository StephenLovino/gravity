import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const PureThreeScene = () => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const modelRef = useRef(null);
  const controlsRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      50,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(2, 0, 3);
    camera.lookAt(2, 0, 0);
    cameraRef.current = camera;

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0); // Transparent background
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(2, 2, 3);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.5);
    pointLight.position.set(-2, -1, 2);
    scene.add(pointLight);

    const spotLight = new THREE.SpotLight(0xffffff, 0.6);
    spotLight.position.set(0, 3, 2);
    spotLight.angle = 0.3;
    spotLight.penumbra = 0.5;
    scene.add(spotLight);

    // Load iPhone model
    const loader = new GLTFLoader();
    loader.load(
      '/models/iphone.glb',
      (gltf) => {
        const model = gltf.scene;
        modelRef.current = model;

        // Center and scale the model
        const box = new THREE.Box3().setFromObject(model);
        const size = new THREE.Vector3();
        const center = new THREE.Vector3();
        box.getSize(size);
        box.getCenter(center);
        
        model.position.sub(center);
        model.position.set(2, -0.2, 0); // Position on right side
        
        const targetHeight = 2.0; // Smaller size for better proportions
        const scale = targetHeight / (size.y || 1);
        model.scale.setScalar(scale);

        scene.add(model);
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
      },
      (error) => {
        console.error('Error loading model:', error);
      }
    );

    // OrbitControls
    import('three/examples/jsm/controls/OrbitControls.js').then(({ OrbitControls }) => {
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableDamping = true;
      controls.dampingFactor = 0.06;
      controls.rotateSpeed = 0.5;
      controls.enablePan = false;
      controls.minDistance = 1.5;
      controls.maxDistance = 8;
      controls.autoRotate = false;
      controls.target.set(2, 0, 0);
      controlsRef.current = controls;
    });

    // Scroll-based zoom control
    let scrollZoom = 0.5; // Start at middle zoom level
    const handleScroll = (event) => {
      event.preventDefault();
      event.stopPropagation();
      const delta = event.deltaY;
      scrollZoom = Math.max(0, Math.min(1, scrollZoom + delta * 0.002)); // More responsive zoom
    };

    // Add wheel event listener for zoom control
    const canvas = renderer.domElement;
    canvas.addEventListener('wheel', handleScroll, { passive: false });

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (controlsRef.current) {
        controlsRef.current.update();
      }

      // Apply scroll-based zoom to camera
      if (cameraRef.current) {
        const minDistance = 1.0; // Closer minimum
        const maxDistance = 6.0; // Further maximum
        const targetDistance = minDistance + (maxDistance - minDistance) * (1 - scrollZoom);
        
        // More responsive camera zoom
        const currentDistance = cameraRef.current.position.distanceTo(new THREE.Vector3(2, 0, 0));
        const newDistance = currentDistance + (targetDistance - currentDistance) * 0.2; // Faster response
        
        // Update camera position to maintain zoom
        const direction = cameraRef.current.position.clone().normalize();
        cameraRef.current.position.copy(direction.multiplyScalar(newDistance));
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      canvas.removeEventListener('wheel', handleScroll);
      window.removeEventListener('resize', handleResize);
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
      
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default PureThreeScene;
