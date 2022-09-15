import Particles from "react-tsparticles";
import { useCallback } from "react";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

export default () => {
    const particlesInit = useCallback(async (engine: Engine) => {
       await loadFull(engine);
    }, []);

    return (
        <Particles
            id={"tsparticles"}
            init={particlesInit}
            options={{
                fpsLimit: 120,
                particles: {
                    color: {
                        value: "#9932CCFF",
                    },
                    collisions: {
                        enable: true,
                    },
                    move: {
                        direction: "top",
                        enable: true,
                        random: true,
                        speed: 2,
                        straight: true,
                    },
                    number: {
                        density: {
                            enable: true,
                            area: 800,
                        },
                    },
                    opacity: {
                        value: 0.4,
                    },
                    shape: {
                        type: "star",
                    },
                    size: {
                        value: {
                            min: 1,
                            max: 2,
                        },
                    },
                },
            }}
        />
    )
}