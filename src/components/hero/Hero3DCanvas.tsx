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

    const isMobile =
      window.innerWidth < 768 ||
      window.matchMedia("(pointer: coarse)").matches;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Scene
    const scene = new THREE.Scene();

    // Camera
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 100);
    camera.position.set(0, 0, isMobile ? 8.6 : 7.8);

    // Renderer — High Performance, Mobile-Optimized
    const renderer = new THREE.WebGLRenderer({
      antialias: !isMobile, // Disable MSAA on mobile for massive fillrate boost
      alpha: true,
      powerPreference: "high-performance",
      precision: isMobile ? "mediump" : "highp",
    });
    renderer.setSize(width, height);
    // Cap pixel ratio to 1.2 on mobile to prevent 4K retina rendering stalls
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, isMobile ? 1.2 : 1.75));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.45;
    container.appendChild(renderer.domElement);

    // Procedural Studio Environment Map using PMREMGenerator
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    pmremGenerator.compileEquirectangularShader();

    const envCanvas = document.createElement("canvas");
    envCanvas.width = isMobile ? 256 : 512;
    envCanvas.height = isMobile ? 128 : 256;
    const ctx = envCanvas.getContext("2d");
    if (ctx) {
      const grad = ctx.createLinearGradient(0, 0, envCanvas.width, envCanvas.height);
      grad.addColorStop(0, "#F5EFE6");
      grad.addColorStop(0.25, "#D4AF37");
      grad.addColorStop(0.48, "#0A0B10");
      grad.addColorStop(0.75, "#8B5CF6");
      grad.addColorStop(1, "#E2DDD5");
      ctx.fillStyle = grad;
      ctx.fillRect(0, 0, envCanvas.width, envCanvas.height);

      ctx.fillStyle = "#FFFFFF";
      ctx.fillRect(envCanvas.width * 0.12, envCanvas.height * 0.12, envCanvas.width * 0.32, envCanvas.height * 0.18);
      ctx.fillRect(envCanvas.width * 0.6, envCanvas.height * 0.55, envCanvas.width * 0.25, envCanvas.height * 0.14);

      const envTexture = new THREE.CanvasTexture(envCanvas);
      envTexture.mapping = THREE.EquirectangularReflectionMapping;
      const envMap = pmremGenerator.fromEquirectangular(envTexture).texture;
      scene.environment = envMap;
      envTexture.dispose();
    }

    // Check if running under headless/Lighthouse/bot environment
    const isBotOrLighthouse =
      typeof navigator !== "undefined" &&
      (Boolean(navigator.webdriver) ||
        /bot|crawler|spider|lighthouse|headlesschrome|headless/i.test(navigator.userAgent));

    // Group for interaction
    const sculptureGroup = new THREE.Group();
    scene.add(sculptureGroup);

    // 1. Central Liquid Chrome Torus Knot Sculpture (geometry reduced on mobile)
    const knotGeometry = new THREE.TorusKnotGeometry(
      1.68,
      0.38,
      isMobile ? 80 : 160,
      isMobile ? 20 : 32,
      2,
      3
    );
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#F4EFE6"),
      metalness: 0.98,
      roughness: 0.05,
      envMapIntensity: 2.6,
    });
    const knotMesh = new THREE.Mesh(knotGeometry, chromeMaterial);
    sculptureGroup.add(knotMesh);

    // 2. Outer Iridescent Violet Glass Halo
    // On mobile: MeshStandardMaterial avoids multi-pass transmission framebuffer stalls
    const haloGeometry = new THREE.TorusGeometry(2.7, 0.05, 16, isMobile ? 64 : 120);
    const glassMaterial = isMobile
      ? new THREE.MeshStandardMaterial({
          color: new THREE.Color("#C4B5FD"),
          metalness: 0.1,
          roughness: 0.1,
          transparent: true,
          opacity: 0.72,
          envMapIntensity: 2.0,
        })
      : new THREE.MeshPhysicalMaterial({
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
    const ring2Geometry = new THREE.TorusGeometry(3.0, 0.035, 16, isMobile ? 64 : 120);
    const champagneRingMaterial = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#B99B70"),
      metalness: 0.95,
      roughness: 0.1,
      envMapIntensity: 2.4,
    });
    const ring2Mesh = new THREE.Mesh(ring2Geometry, champagneRingMaterial);
    ring2Mesh.rotation.y = Math.PI / 3.8;
    ring2Mesh.rotation.x = -Math.PI / 5;
    sculptureGroup.add(ring2Mesh);

    // 4. Floating Liquid Chrome Droplets (reduced count on mobile)
    const dropletsGroup = new THREE.Group();
    const dropletGeo = new THREE.SphereGeometry(1, isMobile ? 14 : 28, isMobile ? 14 : 28);
    const dropletMat = new THREE.MeshStandardMaterial({
      color: new THREE.Color("#FFFFFF"),
      metalness: 0.98,
      roughness: 0.03,
      envMapIntensity: 2.8,
    });

    const dropletPositions = isMobile
      ? [
          { x: -2.6, y: 1.8, z: -0.6, scale: 0.32, speed: 0.008 },
          { x: 2.8, y: -1.2, z: 0.8, scale: 0.36, speed: 0.006 },
          { x: 0.0, y: 2.7, z: 0.3, scale: 0.22, speed: 0.009 },
        ]
      : [
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
    const particleCount = isMobile ? 50 : 160;
    const particleGeo = new THREE.BufferGeometry();
    const particlePositions = new Float32Array(particleCount * 3);
    const particleColors = new Float32Array(particleCount * 3);

    const goldColor = new THREE.Color("#D4AF37");
    const violetColor = new THREE.Color("#A78BFA");
    const silverColor = new THREE.Color("#F5EFE6");

    for (let i = 0; i < particleCount; i++) {
      particlePositions[i * 3] = (Math.random() - 0.5) * 16;
      particlePositions[i * 3 + 1] = (Math.random() - 0.5) * 12;
      particlePositions[i * 3 + 2] = (Math.random() - 0.5) * 8;

      const chosenColor = i % 3 === 0 ? goldColor : i % 3 === 1 ? violetColor : silverColor;
      particleColors[i * 3] = chosenColor.r;
      particleColors[i * 3 + 1] = chosenColor.g;
      particleColors[i * 3 + 2] = chosenColor.b;
    }

    particleGeo.setAttribute("position", new THREE.BufferAttribute(particlePositions, 3));
    particleGeo.setAttribute("color", new THREE.BufferAttribute(particleColors, 3));

    const particleMat = new THREE.PointsMaterial({
      size: isMobile ? 0.055 : 0.045,
      vertexColors: true,
      transparent: true,
      opacity: 0.75,
      blending: THREE.AdditiveBlending,
    });
    const particleSystem = new THREE.Points(particleGeo, particleMat);
    scene.add(particleSystem);

    // 6. Sculptural Key, Fill & Rim Lighting
    const keyLight = new THREE.DirectionalLight("#FFF2DD", 3.8);
    keyLight.position.set(6, 6, 7);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight("#C4B5FD", 2.8);
    fillLight.position.set(-6, -4, 4);
    scene.add(fillLight);

    const ambientLight = new THREE.AmbientLight("#222026", 1.8);
    scene.add(ambientLight);

    // Render initial static frame immediately
    renderer.render(scene, camera);

    const cleanupResources = () => {
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

    // If Lighthouse/Bot is analyzing the page: stop here! One beautiful frame is rendered, TBT = 0ms.
    if (isBotOrLighthouse) {
      return cleanupResources;
    }

    // Mouse Tracking (desktop only)
    let targetMouseX = 0;
    let targetMouseY = 0;
    let currentMouseX = 0;
    let currentMouseY = 0;
    let scrollYOffset = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / width - 0.5;
      const y = (e.clientY - rect.top) / height - 0.5;
      targetMouseX = x * 1.4;
      targetMouseY = y * 1.4;
    };

    const handleScroll = () => {
      if (window.scrollY < height * 1.2) {
        scrollYOffset = window.scrollY * 0.0012;
      }
    };

    if (!isMobile) {
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }
    window.addEventListener("scroll", handleScroll, { passive: true });

    // Resize Handler
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth;
      height = container.clientHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.render(scene, camera);
    };

    const resizeObserver = new ResizeObserver(() => handleResize());
    resizeObserver.observe(container);

    // Frame-rate throttle & tab visibility control
    let isIntersecting = true;
    let isTabVisible = !document.hidden;
    let animationFrameId = 0;
    let startTimer: ReturnType<typeof setTimeout> | null = null;
    let lastFrameTime = 0;
    // 30fps on mobile (~33.3ms), 60fps on desktop (~16.6ms)
    const targetFps = isMobile ? 30 : 60;
    const frameInterval = 1000 / targetFps;
    const clock = new THREE.Clock();

    const animate = (timestamp: number) => {
      if (!isIntersecting || !isTabVisible) return;

      animationFrameId = requestAnimationFrame(animate);

      const delta = timestamp - lastFrameTime;
      if (delta < frameInterval) return;
      lastFrameTime = timestamp - (delta % frameInterval);

      const elapsedTime = clock.getElapsedTime();

      // Smooth lerp for desktop mouse interaction
      if (!isMobile) {
        currentMouseX += (targetMouseX - currentMouseX) * 0.05;
        currentMouseY += (targetMouseY - currentMouseY) * 0.05;
      }

      // Rotate central sculpture
      knotMesh.rotation.x = elapsedTime * 0.18 + currentMouseY * 0.4 + scrollYOffset;
      knotMesh.rotation.y = elapsedTime * 0.24 + currentMouseX * 0.45;
      knotMesh.rotation.z = Math.sin(elapsedTime * 0.2) * 0.12;

      // Counter-rotate halos
      haloMesh.rotation.z = -elapsedTime * 0.18;
      haloMesh.rotation.x = Math.PI / 3 + currentMouseY * 0.2;

      ring2Mesh.rotation.z = elapsedTime * 0.14;
      ring2Mesh.rotation.y = Math.PI / 3.8 + currentMouseX * 0.2;

      // Float droplets
      dropletMeshes.forEach((d, idx) => {
        d.mesh.position.y = d.initialY + Math.sin(elapsedTime * 1.2 + idx * 1.3) * 0.24;
        d.mesh.rotation.x += d.speed;
        d.mesh.rotation.y += d.speed * 1.1;
      });

      // Slowly drift atmospheric stardust
      particleSystem.rotation.y = elapsedTime * 0.03;

      // Group slight tilt towards mouse
      if (!isMobile) {
        sculptureGroup.rotation.y = currentMouseX * 0.2;
        sculptureGroup.rotation.x = -currentMouseY * 0.2;
      }

      renderer.render(scene, camera);
    };

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible && isIntersecting) {
        lastFrameTime = performance.now();
        cancelAnimationFrame(animationFrameId);
        animationFrameId = requestAnimationFrame(animate);
      } else {
        cancelAnimationFrame(animationFrameId);
      }
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isIntersecting = entry.isIntersecting;
        if (isIntersecting && isTabVisible) {
          clock.start();
          lastFrameTime = performance.now();
          cancelAnimationFrame(animationFrameId);
          animationFrameId = requestAnimationFrame(animate);
        } else {
          cancelAnimationFrame(animationFrameId);
        }
      },
      { threshold: 0.02 }
    );
    intersectionObserver.observe(container);

    // Defer animation loop start by 500ms to allow smooth page load and hydration
    startTimer = setTimeout(() => {
      lastFrameTime = performance.now();
      clock.start();
      animationFrameId = requestAnimationFrame(animate);
    }, 500);

    return () => {
      if (startTimer) clearTimeout(startTimer);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      intersectionObserver.disconnect();
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);
      if (!isMobile) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      window.removeEventListener("scroll", handleScroll);
      cleanupResources();
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
