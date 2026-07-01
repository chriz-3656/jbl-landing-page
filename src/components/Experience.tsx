"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, ContactShadows, Float, useGLTF } from "@react-three/drei";
import { Suspense, useEffect, useRef } from "react";
import * as THREE from "three";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function HeadphoneModel() {
  const { scene } = useGLTF("/source/jbl-tune-720bt-black-android-ar-asset.glb");
  const modelRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!modelRef.current) return;

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".main-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1,
      },
    });

    // Section 2: Intro
    tl.to(modelRef.current.rotation, { y: Math.PI / 2, ease: "power1.inOut" }, 0)
      .to(modelRef.current.position, { x: 2, z: 1, ease: "power1.inOut" }, 0)
    
    // Section 3: Zoom to ear cushion
    .to(modelRef.current.position, { x: 0, y: -2, z: 4, ease: "power1.inOut" }, 1)
    .to(modelRef.current.rotation, { x: Math.PI / 8, y: Math.PI, ease: "power1.inOut" }, 1)

    // Section 4: Materials
    .to(modelRef.current.position, { x: -2, y: 0, z: 1, ease: "power1.inOut" }, 2)
    .to(modelRef.current.rotation, { x: 0, y: Math.PI * 1.5, ease: "power1.inOut" }, 2)

    // Section 5 & 6: Noise Cancellation & Battery
    .to(modelRef.current.rotation, { y: Math.PI * 2.5, ease: "power1.inOut" }, 3)
    .to(modelRef.current.position, { x: 0, y: 0, z: 0, ease: "power1.inOut" }, 3)
    
    // Bottom sections (Gallery, Specs, Footer): Scale down the model so it doesn't block text
    .to(modelRef.current.rotation, { y: Math.PI * 4, ease: "power1.inOut" }, 4)
    .to(modelRef.current.scale, { x: 0, y: 0, z: 0, ease: "power2.inOut" }, 4);

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <group ref={modelRef} dispose={null} scale={25} position={[0, -2.5, 0]}>
      <Float speed={0.8} rotationIntensity={0.1} floatIntensity={0.1}>
        <primitive object={scene} />
      </Float>
    </group>
  );
}

useGLTF.preload("/source/jbl-tune-720bt-black-android-ar-asset.glb");

export default function Experience() {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-10">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
      >
        <ambientLight intensity={1.5} />
        <directionalLight position={[0, 5, 10]} intensity={2.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={1} castShadow />
        <spotLight position={[-10, -10, -10]} angle={0.15} penumbra={1} intensity={2} color="#FF5A00" />
        <Suspense fallback={null}>
          <HeadphoneModel />
          <Environment preset="city" />
          <ContactShadows position={[0, -2.5, 0]} opacity={0.5} scale={10} blur={2} far={4} />
        </Suspense>
      </Canvas>
    </div>
  );
}
