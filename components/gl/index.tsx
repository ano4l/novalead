import { Effects } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Particles } from "./particles";
import { VignetteShader } from "./shaders/vignetteShader";

type GLProps = {
  hovering: boolean;
  quality?: "medium" | "high";
};

export const GL = ({ hovering, quality = "medium" }: GLProps) => {
  const isHighQuality = quality === "high";
  const speed = 1.0;
  const focus = 3.8;
  const aperture = 1.62;
  const size = isHighQuality ? 384 : 320;
  const noiseScale = 0.48;
  const noiseIntensity = isHighQuality ? 0.34 : 0.28;
  const timeScale = 0.84;
  const pointSize = isHighQuality ? 7.1 : 6.2;
  const opacity = isHighQuality ? 0.52 : 0.44;
  const planeScale = 10.0;
  const vignetteDarkness = 1.52;
  const vignetteOffset = 0.48;
  const useManualTime = false;
  const manualTime = 0;

  return (
    <div id="webgl">
      <Canvas
        dpr={isHighQuality ? [1, 1.4] : [1, 1.15]}
        gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
        camera={{
          position: [
            1.2629783123314589, 2.664606471394044, -1.8178993743288914,
          ],
          fov: 50,
          near: 0.01,
          far: 300,
        }}
      >
        <color attach="background" args={["#081947"]} />
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
