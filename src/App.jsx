import React from 'react';
import { Canvas } from '@react-three/fiber';
import { VRButton, ARButton, XR, Interactive } from '@react-three/xr';
import { Box } from '@react-three/drei';

function App() {
  return (
    <>
      <VRButton />
      <ARButton />
      <Canvas>
        <XR>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <Interactive>
            <Box position={[0, 0, -1]} scale={0.2}>
              <meshStandardMaterial color="hotpink" />
            </Box>
          </Interactive>
        </XR>
      </Canvas>
    </>
  );
}

export default App;
