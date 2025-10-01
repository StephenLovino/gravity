import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const PureThreeScene = ({ onReady }) => {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const modelRef = useRef(null);
  const controlsRef = useRef(null);
  const isFullscreenFallbackRef = useRef(false);

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
    const updateRendererSize = () => {
      const container = mountRef.current;
      if (!container) return;
      const width = container.clientWidth || window.innerWidth;
      const height = container.clientHeight || window.innerHeight;
      renderer.setSize(width, height);
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      // Cap pixel ratio lower on small screens for performance
      const isSmallScreen = width <= 768;
      const maxDPR = isSmallScreen ? 1.5 : 2;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, maxDPR));
    };

    updateRendererSize();
    renderer.setClearColor(0x000000, 0); // Transparent background
    // Improve color/brightness rendering
    renderer.outputEncoding = THREE.sRGBEncoding;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    rendererRef.current = renderer;

    mountRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x404040, 1.0);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(2, 2, 3);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xffffff, 0.8);
    pointLight.position.set(-2, -1, 2);
    scene.add(pointLight);

    const spotLight = new THREE.SpotLight(0xffffff, 0.9);
    spotLight.position.set(0, 3, 2);
    spotLight.angle = 0.3;
    spotLight.penumbra = 0.5;
    scene.add(spotLight);

    // Soft sky/ground fill light to lift dark faces
    const hemiLight = new THREE.HemisphereLight(0xffffff, 0x404040, 0.6);
    hemiLight.position.set(0, 3, 0);
    scene.add(hemiLight);

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
      controls.enableZoom = true;
      controls.enablePan = false;
      controls.minDistance = 1.5;
      controls.maxDistance = 8;
      controls.autoRotate = false;
      controls.target.set(2, 0, 0);
      controlsRef.current = controls;

      // Expose an API for the parent to trigger fullscreen rear-view
      if (typeof onReady === 'function') {
        onReady({
          enterFullscreenRearView: async () => {
            const canvas = rendererRef.current?.domElement;
            const container = mountRef.current;
            if (!canvas || !container) return;

            // Try native Fullscreen API first
            try {
              if (canvas.requestFullscreen) {
                await canvas.requestFullscreen();
              } else if (canvas.webkitRequestFullscreen) {
                await canvas.webkitRequestFullscreen();
              } else {
                // Fallback to CSS-based fullscreen
                isFullscreenFallbackRef.current = true;
                container.style.position = 'fixed';
                container.style.inset = '0px';
                container.style.width = '100vw';
                container.style.height = '100vh';
                container.style.zIndex = '100';
              }
            } catch (_) {
              // Fallback on error
              isFullscreenFallbackRef.current = true;
              container.style.position = 'fixed';
              container.style.inset = '0px';
              container.style.width = '100vw';
              container.style.height = '100vh';
              container.style.zIndex = '100';
            }

            // Rotate camera around target by 180° to show rear
            if (cameraRef.current && controlsRef.current) {
              const target = controlsRef.current.target.clone();
              const cam = cameraRef.current;
              const offset = cam.position.clone().sub(target);
              offset.x *= -1;
              offset.z *= -1;
              cam.position.copy(target.clone().add(offset));
              controlsRef.current.update();
            }
          }
        });
      }
    });

    // Ensure pointer gestures are captured by the canvas for OrbitControls
    const canvas = renderer.domElement;
    canvas.style.touchAction = 'none';

    // Animation loop
    const animate = () => {
      requestAnimationFrame(animate);

      if (controlsRef.current) {
        controlsRef.current.update();
      }

      // No custom camera zooming; rely on OrbitControls default behavior

      renderer.render(scene, camera);
    };

    animate();

    // Handle window/container resize
    const handleResize = () => updateRendererSize();
    window.addEventListener('resize', handleResize);
    let resizeObserver;
    if (typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => updateRendererSize());
      resizeObserver.observe(mountRef.current);
    }

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeObserver) resizeObserver.disconnect();
      
      if (mountRef.current && renderer.domElement) {
        mountRef.current.removeChild(renderer.domElement);
      }
      
      if (controlsRef.current) {
        controlsRef.current.dispose();
      }
      
      renderer.dispose();
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
};

export default PureThreeScene;
