import { Effects } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Particles } from "./particles";
import { VignetteShader } from "./shaders/vignetteShader";

export const GL = ({ hovering }: { hovering: boolean }) => {
  const speed = 1.0;
  const focus = 3.8;
  const aperture = 1.62;
  const size = 512;
  const noiseScale = 0.48;
  const noiseIntensity = 0.34;
  const timeScale = 0.84;
  const pointSize = 7.4;
  const opacity = 0.44;
  const planeScale = 10.0;
  const vignetteDarkness = 1.75;
  const vignetteOffset = 0.52;
  const useManualTime = false;
  const manualTime = 0;

  return (
    <div id="webgl">
      <Canvas
        camera={{
          position: [
            1.2629783123314589, 2.664606471394044, -1.8178993743288914,
          ],
          fov: 50,
          near: 0.01,
          far: 300,
        }}
      >
        <color attach="background" args={["#000"]} />
        <Particles
          speed={speed}
          aperture={aperture}
          focus={focus}
          size={size}
          noiseScale={noiseScale}
          noiseIntensity={noiseIntensity}
          timeScale={timeScale}
          pointSize={pointSize}
          opacity={opacity}
          planeScale={planeScale}
          useManualTime={useManualTime}
          manualTime={manualTime}
          introspect={hovering}
        />
        <Effects multisamping={0} disableGamma>
          <shaderPass
            args={[VignetteShader]}
            uniforms-darkness-value={vignetteDarkness}
            uniforms-offset-value={vignetteOffset}
          />
        </Effects>
      </Canvas>
    </div>
  );
};
