import Particles from "react-tsparticles";
import React, { RefObject, useCallback } from "react";
import { loadFull } from "tsparticles";
import { Engine } from "tsparticles-engine";
import { loadParallaxMover } from "tsparticles-move-parallax";

export default () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadParallaxMover(engine)
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
                parallax: {
                    enable: true,
                    force: 60,
                    smooth: 10,
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
                        value: 0.3,
                    },
                    links: {
                        enable: true,
                        distance: 125,
                        color: "#9932CCFF",
                        opacity: 0.6,
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

