"use client";

import React, { useEffect, useRef, useState } from "react";
import * as THREE from "three";

export default function Hero3DCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [webGLSupported, setWebGLSupported] = useState(true);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check WebGL availability
    try {
      const canvasTest = document.createElement("canvas");
      const gl = canvasTest.getContext("webgl") || canvasTest.getContext("experimental-webgl");
      if (!gl) {
        setWebGLSupported(false);
        return;
      }
    } catch {
      setWebGLSupported(false);
      return;
    }

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, 7.8);

    // High Performance Renderer
    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      alpha: true,
      powerPreference: "high-performance",
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.45;
    container.appendChild(renderer.domElement);

    // Procedural Studio Environment Map using PMREMGenerator
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const envCanvas = document.createElement("canvas");
    envCanvas.width = 512;
    envCanvas.height = 256;
    const ctx = envCanvas.getContext("2d");
    if (ctx) {
      // Dynamic gradient: Champagne gold top, dark obsidian horizon, iridescent violet base
      const grad = ctx.createLinearGradient(0, 0, 512, 256);
      grad.addColorStop(0, "#F5EFE6");
      grad.addColorStop(0.25, "#D4AF37");
      grad.addColorStop(0.48, "#0A0B10");
      grad.addColorStop(0.75, "#8B5CF6");
      grad.addColorStop(1, "#E2DDD5");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, 512, 256);

      // Studio specular softbox stripes for brilliant liquid chrome reflections
      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(60, 30, 160, 45);
      ctx.fillRect(310, 140, 130, 35);
      ctx.fillRect(200, 90, 80, 25);

      const envTexture = new THREE.CanvasTexture(envCanvas);
      envTexture.mapping = THREE.EquirectangularReflectionMapping;
      const envMap = pmremGenerator.fromEquirectangular(envTexture).texture;
      scene.environment = envMap;
      envTexture.dispose();
    }

    // Group for mouse interaction
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // 1. Central Liquid Chrome Torus Knot Sculpture
    const knotGeometry = new THREE.TorusKnotGeometry(1.68, 0.38, 180, 36, 2, 3);
    const chromeMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#F4EFE6"),
      metalness: 0.98,
      roughness: 0.04,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      reflectivity: 1.0,
      envMapIntensity: 2.8,
    });
    const knotMesh = new THREE.Mesh(knotGeometry, chromeMaterial);
    sculptureGroup.add(knotMesh);

    // 2. Outer Iridescent Violet Glass Halo
    const haloGeometry = new THREE.TorusGeometry(2.7, 0.05, 32, 140);
    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#C4B5FD"),
      metalness: 0.08,
      roughness: 0.08,
      transmission: 0.95,
      thickness: 0.9,
      transparent: true,
      opacity: 0.88,
      ior: 1.54,
      envMapIntensity: 2.0,
    });
    const haloMesh = new THREE.Mesh(haloGeometry, glassMaterial);
    haloMesh.rotation.x = Math.PI / 3;
    sculptureGroup.add(haloMesh);

    // 3. Second Intersecting Muted Champagne Gold Ring
    const ring2Geometry = new THREE.TorusGeometry(3.0, 0.035, 32, 140);
    const champagneRingMaterial = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#B99B70"),
      metalness: 0.95,
      roughness: 0.1,
      clearcoat: 1.0,
      envMapIntensity: 2.4,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geometry, champagneRingMaterial);
    ring2Mesh.rotation.y = Math.PI / 3.8;
    ring2Mesh.rotation.x = -Math.PI / 5;
    sculptureGroup.add(ring2Mesh);

    // 4. Floating Liquid Chrome & Glass Droplets
    const dropletsGroup = new THREE.Group();
    const dropletGeo = new THREE.SphereGeometry(1, 32, 32);
    const dropletMat = new THREE.MeshPhysicalMaterial({
      color: new THREE.Color("#FFFFFF"),
      metalness: 0.98,
      roughness: 0.02,
      clearcoat: 1.0,
      envMapIntensity: 3.0,
    });

    const dropletPositions = [
      { x: -3.3, y: 1.9, z: -0.6, scale: 0.38, speed: 0.008 },
      { x: 3.5, y: -1.3, z: 0.9, scale: 0.44, speed: 0.006 },
      { x: 2.7, y: 2.3, z: -1.4, scale: 0.28, speed: 0.01 },
      { x: -2.9, y: -2.1, z: 0.5, scale: 0.32, speed: 0.007 },
      { x: 0.0, y: 3.2, z: 0.3, scale: 0.24, speed: 0.009 },
      { x: -1.8, y: 2.6, z: 0.8, scale: 0.18, speed: 0.011 },
    ];

    const dropletMeshes: { mesh: THREE.Mesh; initialY: number; speed: number }[] = [];

    dropletPositions.forEach((dp) => {
      const mesh = new THREE.Mesh(dropletGeo, dropletMat);
      mesh.position.set(dp.x, dp.y, dp.z);
      mesh.scale.setScalar(dp.scale);
      dropletsGroup.add(mesh);
      dropletMeshes.push({ mesh, initialY: dp.y, speed: dp.speed });
    });
    sculptureGroup.add(dropletsGroup);

    // 5. Atmospheric Stardust Particle System
    const particleCount = 200;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color("#D4AF37");
    const violetColor = new THREE.Color("#A78BFA");
    const silverColor = new THREE.Color("#F5EFE6");

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 18;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 14;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 10;

      const chosenColor = i % 3 === 0 ? goldColor : i % 3 === 1 ? violetColor : silverColor;
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 6. Sculptural Key, Fill & Rim Lighting
    const keyLight = new THREE.DirectionalLight("#FFF2DD", 4.2);
    keyLight.position.set(6, 6, 7);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight("#C4B5FD", 3.2);
    fillLight.position.set(-6, -4, 4);
    scene.add(fillLight);

    const rimLight = new THREE.DirectionalLight("#FFFFFF", 4.5);
    rimLight.position.set(0, 8, -6);
    scene.add(rimLight);

    const ambientLight = new THREE.AmbientLight("#222026", 1.5);
    scene.add(ambientLight);

    const coreLight = new THREE.PointLight("#B99B70", 2.5, 9);
    coreLight.position.set(0, 0, 0);
    scene.add(coreLight);

    // Mouse & Scroll Tracking with high-precision damping
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let scrollYOffset = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      targetMouseX = x * 1.6;
      targetMouseY = y * 1.6;
    };

    const handleScroll = () => {
      scrollYOffset = window.scrollY * 0.0012;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // Animation Loop
    const clock = new THREE.Clock();
    let animationFrameId: number;

    const animate = () => {
      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp
      currentMouseX += (targetMouseX - currentMouseX) * 0.05;
      currentMouseY += (targetMouseY - currentMouseY) * 0.05;

      // Rotate central sculpture
      knotMesh.rotation.x = elapsedTime * 0.18 + currentMouseY * 0.4 + scrollYOffset;
      knotMesh.rotation.y = elapsedTime * 0.26 + currentMouseX * 0.5;
      knotMesh.rotation.z = Math.sin(elapsedTime * 0.2) * 0.15;

      // Counter-rotate halos
      haloMesh.rotation.z = -elapsedTime * 0.2;
      haloMesh.rotation.x = Math.PI / 3 + currentMouseY * 0.25;

      ring2Mesh.rotation.z = elapsedTime * 0.16;
      ring2Mesh.rotation.y = Math.PI / 3.8 + currentMouseX * 0.25;

      // Float droplets
      dropletMeshes.forEach((d, idx) => {
        d.mesh.position.y = d.initialY + Math.sin(elapsedTime * 1.3 + idx * 1.4) * 0.28;
        d.mesh.rotation.x += d.speed;
        d.mesh.rotation.y += d.speed * 1.2;
      });

      // Slowly drift atmospheric stardust
      particleSystem.rotation.y = elapsedTime * 0.035;
      particleSystem.rotation.x = Math.sin(elapsedTime * 0.06) * 0.08;

      // Subtle breathing scale
      const breath = 1 + Math.sin(elapsedTime * 0.8) * 0.02;
      sculptureGroup.scale.set(breath, breath, breath);

      // Group slight tilt towards mouse
      sculptureGroup.rotation.y = currentMouseX * 0.25;
      sculptureGroup.rotation.x = -currentMouseY * 0.25;

      renderer.render(scene, camera);
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      pmremGenerator.dispose();
      knotGeometry.dispose();
      haloGeometry.dispose();
      ring2Geometry.dispose();
      dropletGeo.dispose();
      particleGeo.dispose();
      chromeMaterial.dispose();
      glassMaterial.dispose();
      champagneRingMaterial.dispose();
      dropletMat.dispose();
      particleMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 pointer-events-none z-10 flex items-center justify-center overflow-hidden"
      aria-hidden="true"
    >
      {!webGLSupported && (
        <div className="w-96 h-96 rounded-full bg-gradient-to-tr from-[#B99B70]/20 via-[#A78BFA]/15 to-transparent blur-3xl animate-pulse-glow" />
      )}
    </div>
  );
}
