import React, { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from "../Loader"
import { motion } from "framer-motion"

const ReactLogo = ({ isMobile }) => {
  const reactLogo = useGLTF("./react_logo/scene.gltf")

  return (
    <mesh>
      <hemisphereLight intensity={0.2} groundColor="black" />
      <pointLight intensity={0.8} />
      <spotLight
        angle={0.6}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
      <primitive
        object={reactLogo.scene}
        scale={isMobile ? 0.4 : 0.55}
        position-y={-1}
        rotation-y={0}
        position={[0,10,0]}

      />
    </mesh>

  )
}

const ReactLogoCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 500px)")
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener("change", handleMediaQueryChange)

    return () => {
      mediaQuery.removeEventListener("change", handleMediaQueryChange)
    }
  }, [])

  return (
   
    <Canvas
      shadows
      frameloop="always"
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 80,
        position: [0, 0, 3],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls
          autoRotate
          autoRotateSpeed={9}
          enableZoom={false}
          maxPolarAngle={Math.PI / 2}
          minPolarAngle={Math.PI / 2}
          enableRotate={false}
        />
        <ReactLogo isMobile={isMobile} />

        <Preload all />
      </Suspense>
    </Canvas>
  )
}

export default ReactLogoCanvas

