import Particles from "react-tsparticles";
import React, { RefObject, useCallback } from "react";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";

export default () => {
    const particlesInit = useCallback(async (engine: Engine) => {
       await loadFull(engine);
    }, []);

    return (
        <Particles
            init={particlesInit}
            options={{
                fpsLimit: 60,
                detectRetina: true,
                fullScreen: {
                    enable: true,
                    zIndex: 1,
                },
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
                        speed: 1.5,
                        straight: true,
                    },
                    opacity: {
                        value: 0.4,
                    },
                    links: {
                        enable: true,
                        distance: 125,
                        color: "#9932CCFF",
                        opacity: 0.75,
                    },
                    size: {
                        value: {
                            min: 1,
                            max: 3,
                        },
                    },
                },
            }}
        />
    )
}

