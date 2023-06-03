import React, { Suspense, useEffect, useState } from "react"
import { Canvas } from "@react-three/fiber"
import { OrbitControls, Preload, useGLTF } from "@react-three/drei"

import CanvasLoader from "../Loader"

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
       // position={isMobile ? [0, 0, 1] : [0, 0, 1]}
      />
    </mesh>
    // <mesh>
    //   <hemisphereLight intensity={0.2} groundColor="black" />
    //   <pointLight intensity={0.8} />
    //   <spotLight
    //     angle={0.6}
    //     penumbra={1}
    //     intensity={1}
    //     castShadow
    //     shadow-mapSize={1024}
    //   />
    //   <primitive
    //     object={reactLogo.scene}
    //     scale={isMobile ? 0.7 : 0.8}
    //     position={isMobile ? [0, -2, -2.2] : [0, -1, -2.5]}
    //   />
    // </mesh>
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
        // near: 0.1,
        // far: 200,
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
        />
        <ReactLogo isMobile={isMobile} />

        <Preload all />
      </Suspense>
    </Canvas>
    // <Canvas
    //   frameloop="always"
    //   shadows
    //   camera={{ position: [20, 10, 5], fov: 20 }}
    //   gl={{ preserveDrawingBuffer: true }}
    // >
    //   <Suspense fallback={<CanvasLoader />}>
    //     <OrbitControls
    //       enableZoom={false}
    //       maxPolarAngle={Math.PI / 2}
    //       minPolarAngle={Math.PI / 2}
    //       autoRotate
    //       autoRotateSpeed={9}
    //     />
    //     <ReactLogo isMobile={isMobile} />
    //     <Preload all />
    //   </Suspense>
    // </Canvas>
  )
}

export default ReactLogoCanvas

// const Earth = () => {
//   const earth = useGLTF("./react_logo/scene.gltf");

//   return (
//     <primitive object={earth.scene} scale={1} position-y={0} rotation-y={0} />
//   );
// };

// const EarthCanvas = () => {
//   return (
//     <Canvas
//       shadows
//       frameloop='demand'
//       dpr={[1, 2]}
//       gl={{ preserveDrawingBuffer: true }}
//       camera={{
//         fov: 45,
//         near: 0.1,
//         far: 200,
//         position: [-4, 3, 6],
//       }}
//     >
//       <Suspense fallback={<CanvasLoader />}>
//         <OrbitControls
//           autoRotate
//           enableZoom={false}
//           maxPolarAngle={Math.PI / 2}
//           minPolarAngle={Math.PI / 2}
//         />
//         <Earth />

//         <Preload all />
//       </Suspense>
//     </Canvas>
//   );
// };

// export default EarthCanvas;
