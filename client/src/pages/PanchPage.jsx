import React, { useState, useEffect, useRef } from "react";
import {
  Zap,
  Box,
  Wrench,
  Recycle,
  Clock,
  Maximize,
  Shield,
  Activity,
  Check,
  Minimize,
} from "lucide-react";
import * as THREE from "three";
import Contact from "../Contact";

const PanchPage = () => {
  const [animatedItems, setAnimatedItems] = useState([]);
  const [hoveredFeature, setHoveredFeature] = useState(null);
  const canvasRef = useRef(null);
  const sceneRef = useRef(null);
  const modelRef = useRef(null);
  const frameIdRef = useRef(null);
  const headingRef = useRef(null);

  const features = [
    {
      title: "Zero Back Pressure",
      icon: <Zap size={24} />,
      description:
        "Ensures optimal engine performance without hindering exhaust flow",
    },
    {
      title: "No By-Product Generation",
      icon: <Box size={24} />,
      description: "Environmentally friendly with no additional waste creation",
    },
    {
      title: "Low Maintenance",
      icon: <Wrench size={24} />,
      description: "Minimal servicing requirements save time and money",
    },
    {
      title: "Self-Clean Technology",
      icon: <Recycle size={24} />,
      description: "Advanced system that keeps itself clear of deposits",
    },
    {
      title: "Endurance Tested",
      icon: <Clock size={24} />,
      description:
        "Rigorously tested for long-term reliability in harsh conditions",
    },
    {
      title: "Custom Design",
      icon: <Maximize size={24} />,
      description: "Tailored solutions to meet specific requirements",
    },
    {
      title: "No Movable Parts",
      icon: <Shield size={24} />,
      description: "Improved reliability with simplified mechanical design",
    },
    {
      title: "Long Device Life",
      icon: <Activity size={24} />,
      description: "Designed for extended operational lifespan",
    },
    {
      title: "High Efficiency",
      icon: <Check size={24} />,
      description: "Superior performance with optimized emission reduction",
    },
    {
      title: "Compact Design",
      icon: <Minimize size={24} />,
      description:
        "Space-saving solution for easy installation in limited areas",
    },
  ];

  // Initialize Three.js scene
  useEffect(() => {
    // Animate items sequentially on load
    const timer = setTimeout(() => {
      const interval = setInterval(() => {
        setAnimatedItems((prev) => {
          if (prev.length >= features.length) {
            clearInterval(interval);
            return prev;
          }
          return [...prev, prev.length];
        });
      }, 100);

      return () => clearInterval(interval);
    }, 300);

    // 3D Animation Setup
    if (!canvasRef.current) return;

    // Setup ThreeJS Scene
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Create camera
    const camera = new THREE.PerspectiveCamera(
      45,
      canvasRef.current.clientWidth / canvasRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.z = 5;

    // Setup renderer
    const renderer = new THREE.WebGLRenderer({
      canvas: canvasRef.current,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(
      canvasRef.current.clientWidth,
      canvasRef.current.clientHeight
    );
    renderer.setClearColor(0x000000, 0);

    // Add lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xfff0dd, 1);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    const pointLight = new THREE.PointLight(0xff9500, 1);
    pointLight.position.set(-5, 3, 3);
    scene.add(pointLight);

    // Create stylized emission control device
    const geometry = new THREE.CylinderGeometry(0.8, 0.8, 2, 32);

    // Create core cylinder
    const coreMaterial = new THREE.MeshStandardMaterial({
      color: 0x555555,
      metalness: 0.8,
      roughness: 0.3,
    });
    const core = new THREE.Mesh(geometry, coreMaterial);

    // Create outer casing
    const outerGeometry = new THREE.CylinderGeometry(1, 1, 1.8, 32);
    const outerMaterial = new THREE.MeshStandardMaterial({
      color: 0xff9500,
      metalness: 0.7,
      roughness: 0.2,
      transparent: true,
      opacity: 0.8,
    });
    const outerCasing = new THREE.Mesh(outerGeometry, outerMaterial);

    // Create caps
    const capGeometry = new THREE.CylinderGeometry(0.4, 0.6, 0.5, 32);
    const capMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      metalness: 0.9,
      roughness: 0.1,
    });

    const topCap = new THREE.Mesh(capGeometry, capMaterial);
    topCap.position.y = 1.2;

    const bottomCap = new THREE.Mesh(capGeometry, capMaterial);
    bottomCap.rotation.x = Math.PI;
    bottomCap.position.y = -1.2;

    // Create inlet and outlet
    const pipeGeometry = new THREE.CylinderGeometry(0.2, 0.2, 0.6, 16);
    const pipeMaterial = new THREE.MeshStandardMaterial({
      color: 0x999999,
      metalness: 0.8,
      roughness: 0.2,
    });

    const inlet = new THREE.Mesh(pipeGeometry, pipeMaterial);
    inlet.rotation.z = Math.PI / 2;
    inlet.position.set(-1.2, 0.5, 0);

    const outlet = new THREE.Mesh(pipeGeometry, pipeMaterial);
    outlet.rotation.z = Math.PI / 2;
    outlet.position.set(1.2, -0.5, 0);

    // Create decorative rings
    const ringGeometry = new THREE.TorusGeometry(1, 0.05, 16, 100);
    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0xff9500,
      metalness: 0.7,
      roughness: 0.3,
    });

    const topRing = new THREE.Mesh(ringGeometry, ringMaterial);
    topRing.position.y = 0.7;
    topRing.rotation.x = Math.PI / 2;

    const bottomRing = new THREE.Mesh(ringGeometry, ringMaterial);
    bottomRing.position.y = -0.7;
    bottomRing.rotation.x = Math.PI / 2;

    // Group all parts
    const emissionDevice = new THREE.Group();
    emissionDevice.add(core);
    emissionDevice.add(outerCasing);
    emissionDevice.add(topCap);
    emissionDevice.add(bottomCap);
    emissionDevice.add(inlet);
    emissionDevice.add(outlet);
    emissionDevice.add(topRing);
    emissionDevice.add(bottomRing);
    emissionDevice.rotation.x = Math.PI / 10;

    scene.add(emissionDevice);
    modelRef.current = emissionDevice;

    // Create particle effect for exhaust
    const particleCount = 100;
    const particleGeometry = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleSizes = new Float32Array(particleCount);

    for (let i = 0; i < particleCount; i++) {
      const i3 = i * 3;
      // Position particles at outlet
      particlePositions[i3] = 1.5 + Math.random() * 2;
      particlePositions[i3 + 1] = -0.5 + (Math.random() * 0.4 - 0.2);
      particlePositions[i3 + 2] = Math.random() * 0.4 - 0.2;

      // Random sizes
      particleSizes[i] = Math.random() * 0.05;
    }

    particleGeometry.setAttribute(
      "position",
      new THREE.BufferAttribute(particlePositions, 3)
    );
    particleGeometry.setAttribute(
      "size",
      new THREE.BufferAttribute(particleSizes, 1)
    );

    const particleMaterial = new THREE.PointsMaterial({
      color: 0x88aaff,
      size: 0.05,
      transparent: true,
      opacity: 0.6,
      sizeAttenuation: true,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    scene.add(particles);

    // Mouse interaction
    const handleMouseMove = (event) => {
      const rect = canvasRef.current.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
      const y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

      if (modelRef.current) {
        modelRef.current.rotation.y = x * 0.5;
        modelRef.current.rotation.x = Math.PI / 10 + y * 0.2;
      }
    };

    canvasRef.current.addEventListener("mousemove", handleMouseMove);

    // Animation loop
    const animate = () => {
      frameIdRef.current = requestAnimationFrame(animate);

      // Rotate model
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.002;
      }

      // Animate particles
      if (particles) {
        const positions = particles.geometry.attributes.position.array;

        for (let i = 0; i < particleCount; i++) {
          const i3 = i * 3;

          // Move particles outward from the outlet
          positions[i3] += 0.01;

          // Reset particles that go too far
          if (positions[i3] > 4) {
            positions[i3] = 1.5;
            positions[i3 + 1] = -0.5 + (Math.random() * 0.4 - 0.2);
            positions[i3 + 2] = Math.random() * 0.4 - 0.2;
          }
        }

        particles.geometry.attributes.position.needsUpdate = true;
      }

      renderer.render(scene, camera);
    };

    animate();

    // Handle window resize
    const handleResize = () => {
      if (!canvasRef.current) return;

      camera.aspect =
        canvasRef.current.clientWidth / canvasRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        canvasRef.current.clientWidth,
        canvasRef.current.clientHeight
      );
    };

    window.addEventListener("resize", handleResize);

    // Clean up
    return () => {
      window.removeEventListener("resize", handleResize);
      canvasRef.current?.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameIdRef.current);

      // Dispose geometries and materials
      geometry.dispose();
      coreMaterial.dispose();
      outerGeometry.dispose();
      outerMaterial.dispose();
      capGeometry.dispose();
      capMaterial.dispose();
      pipeGeometry.dispose();
      pipeMaterial.dispose();
      ringGeometry.dispose();
      ringMaterial.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();

      renderer.dispose();
    };
  }, []);

  

  return (
    <>
    <div className="min-h-screen bg-gray-900 py-16 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Animated title section */}
        <div className="text-center mb-8 relative">
          <div className="inline-block relative">
            {/* Improved heading with 3D hover effect */}
            <h1
              
              className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 cursor-default transition-transform duration-300"
              style={{
                color: "#FF9500",
                transformStyle: "preserve-3d",
                backfaceVisibility: "hidden",
              }}
            >
              Retrofit Emission Control Device
            </h1>

            {/* Modified decorative line with a thinner height */}
            <div className="w-32 h-0.5 bg-orange-500 mx-auto mt-4 relative">
              <div className="absolute -top-1 left-1/2 w-3 h-3 bg-orange-600 rounded-full transform -translate-x-1/2 animate-ping"></div>
            </div>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Advanced technology designed to reduce harmful emissions while
              maintaining optimal engine performance.
            </p>
          </div>
        </div>

        {/* Animated feature grid with hover effects */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-16">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group bg-white border border-gray-200 rounded-lg p-6 shadow-sm
                      hover:shadow-xl hover:border-orange-300 transition-all duration-500 transform
                      ${
                        animatedItems.includes(index)
                          ? "translate-y-0 opacity-100"
                          : "translate-y-8 opacity-0"
                      }
                      ${hoveredFeature === index ? "scale-105 z-10" : ""} 
                      relative overflow-hidden`}
              onMouseEnter={() => setHoveredFeature(index)}
              onMouseLeave={() => setHoveredFeature(null)}
              style={{
                transitionDelay: `${index * 50}ms`,
              }}
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-500/5 to-orange-200/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

              <div className="flex flex-col items-center relative z-10">
                {/* Animated icon with glow effect */}
                <div
                  className="w-16 h-16 flex items-center justify-center rounded-full
                            bg-orange-100 text-orange-500 mb-4
                            group-hover:bg-orange-500 group-hover:text-white
                            transition-all duration-500 relative"
                >
                  {feature.icon}
                  <span className="absolute inset-0 rounded-full bg-orange-400 opacity-0 group-hover:opacity-30 group-hover:animate-ping"></span>
                </div>

                {/* Title with hover effect */}
                <h3 className="text-sm md:text-base font-medium text-gray-800 text-center group-hover:text-orange-600 transition-colors duration-300 mb-2">
                  {feature.title}
                </h3>

                {/* Description that appears on hover */}
                <p className="text-xs text-gray-500 text-center mt-1 opacity-0 max-h-0 group-hover:max-h-20 group-hover:opacity-100 transition-all duration-500 overflow-hidden">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
<Contact/>

    </>
  );
};

export default PanchPage;
