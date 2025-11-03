import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const FourPage = () => {
  const mountRef = useRef(null);
  const [activeFeature, setActiveFeature] = useState(0);
  const [isInteracting, setIsInteracting] = useState(false);

  const features = [
    {
      title: "Low Pressure Drop",
      description: "Ensures minimal impact on the DG set's performance.",
      icon: "gauge",
      color: "#4cd137",
    },
    {
      title: "Compact & Durable",
      description:
        "Easy installation without modifications to your genset's footprint.",
      icon: "compact",
      color: "#e84118",
    },
    {
      title: "Continuous Passive Regeneration",
      description: "Delivers consistent, uninterrupted performance.",
      icon: "cycle",
      color: "#00a8ff",
    },
    {
      title: "Environmentally Friendly",
      description:
        "Helps you comply with stringent emission standards effortlessly.",
      icon: "leaf",
      color: "#20bf6b",
    },
  ];

  useEffect(() => {
    // Animation timing for auto-cycling through features
    const interval = setInterval(() => {
      if (!isInteracting) {
        setActiveFeature((prev) => (prev + 1) % features.length);
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isInteracting]);

  useEffect(() => {
    // Scene setup
    const currentMount = mountRef.current;
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xf0f2f5);

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      currentMount.clientWidth / currentMount.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 5);

    // Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
    });
    renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;
    currentMount.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(5, 5, 5);
    directionalLight.castShadow = true;
    scene.add(directionalLight);

    // Spotlight to highlight RECD device
    const spotlight = new THREE.SpotLight(0xffffff, 1.5);
    spotlight.position.set(3, 3, 3);
    spotlight.angle = Math.PI / 6;
    spotlight.penumbra = 0.3;
    spotlight.castShadow = true;
    spotlight.target.position.set(2, 0, 0); // Point at RECD
    scene.add(spotlight);
    scene.add(spotlight.target);

    // Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 1;

    // Detect user interaction to pause auto-cycling
    controls.addEventListener("start", () => setIsInteracting(true));
    controls.addEventListener("end", () => {
      setTimeout(() => setIsInteracting(false), 3000); // Resume after 3 seconds of inactivity
    });

    // Create a simplified diesel generator model
    const gensetGroup = new THREE.Group();
    scene.add(gensetGroup);

    // Base platform
    const baseGeometry = new THREE.BoxGeometry(4, 0.2, 2);
    const baseMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 0.8,
    });
    const baseMesh = new THREE.Mesh(baseGeometry, baseMaterial);
    baseMesh.position.y = -1;
    baseMesh.castShadow = true;
    baseMesh.receiveShadow = true;
    gensetGroup.add(baseMesh);

    // Generator body
    const genBodyGeometry = new THREE.BoxGeometry(3, 1, 1.5);
    const genBodyMaterial = new THREE.MeshStandardMaterial({
      color: 0x3498db,
      roughness: 0.5,
      metalness: 0.2,
    });
    const genBodyMesh = new THREE.Mesh(genBodyGeometry, genBodyMaterial);
    genBodyMesh.position.y = -0.4;
    genBodyMesh.castShadow = true;
    genBodyMesh.receiveShadow = true;
    gensetGroup.add(genBodyMesh);

    // Engine block
    const engineGeometry = new THREE.BoxGeometry(1.5, 0.8, 1.2);
    const engineMaterial = new THREE.MeshStandardMaterial({
      color: 0x333333,
      roughness: 0.7,
      metalness: 0.4,
    });
    const engineMesh = new THREE.Mesh(engineGeometry, engineMaterial);
    engineMesh.position.set(-0.5, -0.3, 0);
    engineMesh.castShadow = true;
    engineMesh.receiveShadow = true;
    gensetGroup.add(engineMesh);

    // Exhaust pipe
    const exhaustPipeGeometry = new THREE.CylinderGeometry(0.1, 0.1, 1, 16);
    const exhaustPipeMaterial = new THREE.MeshStandardMaterial({
      color: 0x666666,
      roughness: 0.3,
      metalness: 0.8,
    });
    const exhaustPipeMesh = new THREE.Mesh(
      exhaustPipeGeometry,
      exhaustPipeMaterial
    );
    exhaustPipeMesh.position.set(1.5, 0, 0);
    exhaustPipeMesh.rotation.z = Math.PI / 2;
    exhaustPipeMesh.castShadow = true;
    exhaustPipeMesh.receiveShadow = true;
    gensetGroup.add(exhaustPipeMesh);

    // RECD device (highlighted part)
    const recdGeometry = new THREE.CylinderGeometry(0.25, 0.25, 0.8, 16);
    const recdMaterial = new THREE.MeshStandardMaterial({
      color: features[activeFeature].color,
      roughness: 0.2,
      metalness: 0.9,
      emissive: new THREE.Color(features[activeFeature].color),
      emissiveIntensity: 0.2,
    });
    const recdMesh = new THREE.Mesh(recdGeometry, recdMaterial);
    recdMesh.position.set(2, 0, 0);
    recdMesh.rotation.z = Math.PI / 2;
    recdMesh.castShadow = true;
    recdMesh.receiveShadow = true;
    gensetGroup.add(recdMesh);

    // Add glow effect around RECD
    const addGlowEffect = () => {
      const glowGeometry = new THREE.SphereGeometry(0.35, 16, 16);
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: features[activeFeature].color,
        transparent: true,
        opacity: 0.2,
        side: THREE.BackSide,
      });
      const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
      glowMesh.position.copy(recdMesh.position);
      glowMesh.scale.set(1.5, 1.5, 1.5);
      gensetGroup.add(glowMesh);
      return glowMesh;
    };

    const glowEffect = addGlowEffect();

    // Add emission particles
    const createParticleSystem = (position, color, direction) => {
      const particleCount = 100;
      const particleGeometry = new THREE.BufferGeometry();
      const particlePositions = new Float32Array(particleCount * 3);
      const particleSizes = new Float32Array(particleCount);

      for (let i = 0; i < particleCount; i++) {
        const i3 = i * 3;
        particlePositions[i3] = position.x + (Math.random() - 0.5) * 0.1;
        particlePositions[i3 + 1] = position.y + (Math.random() - 0.5) * 0.1;
        particlePositions[i3 + 2] = position.z + (Math.random() - 0.5) * 0.1;
        particleSizes[i] = 0.03 + Math.random() * 0.05;
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
        color: color,
        size: 0.05,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending,
        sizeAttenuation: true,
      });

      const particles = new THREE.Points(particleGeometry, particleMaterial);
      particles.userData = {
        direction,
        originalPositions: [...particlePositions],
      };
      scene.add(particles);

      return particles;
    };

    // Create smoke particles before RECD (dirty exhaust)
    const dirtyParticles = createParticleSystem(
      new THREE.Vector3(1.7, 0, 0),
      0x444444,
      new THREE.Vector3(0.3, 0.05, 0)
    );

    // Create clean particles after RECD
    const cleanParticles = createParticleSystem(
      new THREE.Vector3(2.3, 0, 0),
      0x99ffff,
      new THREE.Vector3(0.3, 0.02, 0)
    );

    // Create installation indicators
    const createInstallationPoint = (position, color) => {
      const pointGeometry = new THREE.SphereGeometry(0.05, 16, 16);
      const pointMaterial = new THREE.MeshBasicMaterial({ color });
      const point = new THREE.Mesh(pointGeometry, pointMaterial);
      point.position.copy(position);
      point.userData = {
        originalY: position.y,
        phase: Math.random() * Math.PI * 2,
      };
      gensetGroup.add(point);
      return point;
    };

    // Create installation points around the RECD
    const installationPoints = [
      createInstallationPoint(new THREE.Vector3(2, 0.3, 0), 0x4cd137),
      createInstallationPoint(new THREE.Vector3(2, -0.3, 0), 0x4cd137),
      createInstallationPoint(new THREE.Vector3(2, 0, 0.3), 0x4cd137),
      createInstallationPoint(new THREE.Vector3(2, 0, -0.3), 0x4cd137),
    ];

    // Create connecting lines
    const createConnectionLines = () => {
      const lineMaterial = new THREE.LineBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.5,
      });

      const lines = [];
      for (let i = 0; i < installationPoints.length; i++) {
        const lineGeometry = new THREE.BufferGeometry();
        const linePoints = [
          installationPoints[i].position,
          new THREE.Vector3(
            installationPoints[i].position.x - 0.3,
            installationPoints[i].position.y,
            installationPoints[i].position.z
          ),
        ];
        lineGeometry.setFromPoints(linePoints);
        const line = new THREE.Line(lineGeometry, lineMaterial);
        gensetGroup.add(line);
        lines.push({ line, points: linePoints });
      }

      return lines;
    };

    const connectionLines = createConnectionLines();

    // Create Text Labels
    const createCanvasLabel = (text, size = 128) => {
      const canvas = document.createElement("canvas");
      canvas.width = size;
      canvas.height = size / 4;
      const context = canvas.getContext("2d");
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
      context.font = "24px Arial";
      context.fillStyle = "#000000";
      context.textAlign = "center";
      context.textBaseline = "middle";
      context.fillText(text, canvas.width / 2, canvas.height / 2);

      const texture = new THREE.CanvasTexture(canvas);
      texture.needsUpdate = true;
      return texture;
    };

    // Add "RECD" label
    const addLabel = () => {
      const texture = createCanvasLabel("RECD Device");
      const material = new THREE.SpriteMaterial({
        map: texture,
        transparent: true,
        opacity: 0.9,
      });
      const sprite = new THREE.Sprite(material);
      sprite.position.set(2, 0.5, 0);
      sprite.scale.set(0.8, 0.2, 1);
      gensetGroup.add(sprite);
      return sprite;
    };

    const labelSprite = addLabel();

    // Animation function
    const clock = new THREE.Clock();
    const animate = () => {
      requestAnimationFrame(animate);
      const elapsedTime = clock.getElapsedTime();

      // Update RECD material color
      recdMesh.material.color.set(features[activeFeature].color);
      recdMesh.material.emissive.set(features[activeFeature].color);
      recdMesh.material.emissiveIntensity =
        0.2 + Math.sin(elapsedTime * 3) * 0.1;

      // Update glow effect
      glowEffect.material.color.set(features[activeFeature].color);
      glowEffect.material.opacity = 0.2 + Math.sin(elapsedTime * 2) * 0.1;
      glowEffect.scale.set(
        1.5 + Math.sin(elapsedTime) * 0.1,
        1.5 + Math.sin(elapsedTime) * 0.1,
        1.5 + Math.sin(elapsedTime) * 0.1
      );

      // Update spotlight color
      spotlight.color.set(features[activeFeature].color);
      spotlight.intensity = 1.5 + Math.sin(elapsedTime * 1.5) * 0.3;

      // Animate dirty particles
      const dirtyPositions = dirtyParticles.geometry.attributes.position.array;
      const dirtyDirection = dirtyParticles.userData.direction;
      const dirtyOriginal = dirtyParticles.userData.originalPositions;

      for (let i = 0; i < dirtyPositions.length / 3; i++) {
        const i3 = i * 3;

        // Move particles
        dirtyPositions[i3] += dirtyDirection.x * (0.01 + Math.random() * 0.01);
        dirtyPositions[i3 + 1] +=
          dirtyDirection.y * (0.01 + Math.random() * 0.01);
        dirtyPositions[i3 + 2] +=
          dirtyDirection.z * (0.01 + Math.random() * 0.01);

        // Reset particles that have traveled too far
        if (dirtyPositions[i3] > 1.9) {
          dirtyPositions[i3] = dirtyOriginal[i3] + (Math.random() - 0.5) * 0.1;
          dirtyPositions[i3 + 1] =
            dirtyOriginal[i3 + 1] + (Math.random() - 0.5) * 0.1;
          dirtyPositions[i3 + 2] =
            dirtyOriginal[i3 + 2] + (Math.random() - 0.5) * 0.1;
        }
      }
      dirtyParticles.geometry.attributes.position.needsUpdate = true;

      // Animate clean particles
      const cleanPositions = cleanParticles.geometry.attributes.position.array;
      const cleanDirection = cleanParticles.userData.direction;
      const cleanOriginal = cleanParticles.userData.originalPositions;

      for (let i = 0; i < cleanPositions.length / 3; i++) {
        const i3 = i * 3;

        // Move particles with slight upward drift to show cleaner emissions
        cleanPositions[i3] += cleanDirection.x * (0.01 + Math.random() * 0.01);
        cleanPositions[i3 + 1] +=
          cleanDirection.y * (0.01 + Math.random() * 0.02) + 0.002;
        cleanPositions[i3 + 2] +=
          cleanDirection.z * (0.01 + Math.random() * 0.01);

        // Reset particles that have traveled too far
        if (cleanPositions[i3] > 2.8) {
          cleanPositions[i3] = cleanOriginal[i3] + (Math.random() - 0.5) * 0.1;
          cleanPositions[i3 + 1] =
            cleanOriginal[i3 + 1] + (Math.random() - 0.5) * 0.1;
          cleanPositions[i3 + 2] =
            cleanOriginal[i3 + 2] + (Math.random() - 0.5) * 0.1;
        }
      }
      cleanParticles.geometry.attributes.position.needsUpdate = true;

      // Animate installation points
      installationPoints.forEach((point, index) => {
        // Pulse effect
        point.scale.set(
          1 + Math.sin(elapsedTime * 2 + index) * 0.2,
          1 + Math.sin(elapsedTime * 2 + index) * 0.2,
          1 + Math.sin(elapsedTime * 2 + index) * 0.2
        );

        // Gentle float movement
        point.position.y =
          point.userData.originalY +
          Math.sin(elapsedTime + point.userData.phase) * 0.05;
      });

      // Update connection lines
      connectionLines.forEach((lineData, index) => {
        const point = installationPoints[index];
        const linePoints = [
          point.position.clone(),
          new THREE.Vector3(
            point.position.x - 0.3,
            point.position.y,
            point.position.z
          ),
        ];

        lineData.line.geometry.dispose();
        lineData.line.geometry = new THREE.BufferGeometry().setFromPoints(
          linePoints
        );
      });

      controls.update();
      renderer.render(scene, camera);
    };

    animate();

 

    // Handle resize
    const handleResize = () => {
      camera.aspect = currentMount.clientWidth / currentMount.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(currentMount.clientWidth, currentMount.clientHeight);
    };

    window.addEventListener("resize", handleResize);

    // Cleanup
    return () => {
      window.removeEventListener("resize", handleResize);

      if (currentMount.contains(renderer.domElement)) {
        currentMount.removeChild(renderer.domElement);
      }

      scene.traverse((object) => {
        if (object.geometry) object.geometry.dispose();
        if (object.material) {
          if (Array.isArray(object.material)) {
            object.material.forEach((material) => material.dispose());
          } else {
            object.material.dispose();
          }
        }
      });

      renderer.dispose();
    };
  }, [activeFeature, isInteracting]);

  // Feature icon components
  const renderIcon = (iconName) => {
    switch (iconName) {
      case "gauge":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        );
      case "compact":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        );
      case "cycle":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        );
      case "leaf":
        return (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
            />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-orange-600 mb-4">
              Easy Installation & Compatibility
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The RECD is designed for seamless integration with existing diesel
              genset setups, requiring no alterations to the installation
              footprint.
            </p>
          </div>

          {/* Swapped the order of columns */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center mb-16">
            {/* Feature Description - now on the left */}
            <div className="p-6">
              <h2 className="text-3xl font-bold text-orange-600 mb-6">
                Key Features of Our RECD
              </h2>

              <div className="space-y-8">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={`p-6 rounded-lg transition-all duration-300 cursor-pointer ${
                      activeFeature === index
                        ? "bg-white shadow-lg transform translate-x-2"
                        : "bg-gray-100 hover:bg-white hover:shadow-md"
                    }`}
                    onClick={() => setActiveFeature(index)}
                  >
                    <div className="flex items-start">
                      <div
                        className={`p-3 rounded-full mr-4 transition-colors duration-300`}
                        style={{
                          backgroundColor: feature.color + "20",
                          color: feature.color,
                        }}
                      >
                        {renderIcon(feature.icon)}
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Added interactive help text */}
              <div className="mt-6 text-sm text-gray-500 italic">
                Click on any feature to highlight it in the 3D model or interact
                directly with the model on the right.
              </div>
            </div>

            {/* 3D Visualization - now on the right */}
            <div className="bg-white rounded-xl  overflow-hidden h-[80%] transform transition-all duration-500 hover:shadow-xl">
              <div ref={mountRef} className="w-full h-full" />

              {/* Added interaction overlay */}
              <div className="absolute bottom-4 right-4 bg-black bg-opacity-70 text-white px-3 py-2 rounded-lg text-xs">
                Drag to rotate | Zoom to explore
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FourPage;
