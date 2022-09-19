import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import Particles from "../components/Particles";
import React, { useRef } from "react";
import Navigation from "../components/Navigation";

export default () => {
    const viewMoreRef = useRef<HTMLInputElement>(null);
    const height = window.innerHeight;

    const handleClick = () => {
        viewMoreRef.current?.scrollIntoView({ behavior: 'smooth' });
    }

    return (
        <div>
            <div className={"flex flex-col"} style={{ height: `${height}px` }}>
                <Navigation />
                <Particles />
                <div className={"flex flex-col grow space-between"}>
                    <div>
                        <div className={"flex flex-col items-center"}>
                            <p className={"text-xl sm:text-4xl z-10 text-white"}>
                                L'INTELLIGENCE DE LA MUSIQUE
                            </p>
                            <p className={"text-md sm:text-xl z-10 text-gray-400"}>
                                Les réseaux neuronal qui génère de la musique
                            </p>
                        </div>
                        <div className={"flex flex-col mt-24 2xl:mt-36 items-center text-white"}>
                            <p className={"max-w-3xl z-10 pl-4 pr-4"}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet est in urna fringilla interdum. Cras quis tristique nisl. Sed ex nisl, convallis eget laoreet non, congue at quam. Sed porttitor lobortis aliquet. Aenean accumsan vel nibh pellentesque rutrum. Vivamus ultricies metus sapien, et dignissim nisl eleifend et. Quisque sed neque urna. Vestibulum congue ex ut diam placerat elementum.
                            </p>
                        </div>
                    </div>
                    <div className={"flex flex-row justify-center items-end grow text-white"}>
                        <div className={"flex grow flex-col"}>
                            <div className={"flex justify-center items-end bg-gradient-to-b from-neutral-900 to-dark h-24 xl:h-48"}>
                                <div className={"flex justify-center mb-6"}>
                                    <a onClick={handleClick} style={{ cursor: 'pointer' }} className={"flex flex-col items-center hover:opacity-75 hover:text-secondary hover:-translate-y-0.5 transition ease-in duration-100"}>
                                        <p className={"text-xl !text-gray-300"}>
                                            Voir Plus
                                        </p>
                                        <FontAwesomeIcon
                                            className={"!opacity-100"}
                                            icon={faChevronDown}
                                            size={"xl"}
                                        />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={"relative z-10"}>
                <div className={"h-52 bg-dark"}/>
                <div className={"h-36 bg-gradient-to-b from-dark to-neutral-900"}/>
                <p className={"bg-neutral-900 text-white text-3xl pt-12 xl:pt-18 flex justify-center"}>
                    Les Réseaux Neuronales
                </p>
                <div className={"flex flex-col sm:grid sm:grid-cols-2 sm:gap-10 bg-neutral-900 pt-20 pl-10 sm:pl-20 pr-10 sm:pr-20 pb-24"}>
                    <div ref={viewMoreRef} className={"pb-12 sm:pb-0"}>
                        <p className={"text-white text-xl sm:text-2xl"}>C'est quoi un réseau neuronal?</p>
                        <p className={"text-gray-400 mt-2"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet est in urna fringilla interdum. Cras quis tristique nisl. Sed ex nisl, convallis eget laoreet non, congue at quam. Sed porttitor lobortis aliquet. Aenean accumsan vel nibh pellentesque rutrum. Vivamus ultricies metus sapien, et dignissim nisl eleifend et. Quisque sed neque urna. Vestibulum congue ex ut diam placerat elementum.
                        </p>
                    </div>
                    <div className={"flex h-52 w-full sm:w-auto self-center justify-self-center bg-neutral-800 rounded-lg"}>
                        <img src={"/svg/neuralnetwork.svg"} />
                    </div>
                </div>
                <hr className={"border border-dark border-solid"} />
                <div className={"bg-neutral-800 pt-24"}>

                </div>
            </div>
        </div>
    )
}
