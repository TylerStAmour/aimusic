import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import Particles from "../components/Particles";
import React, { useRef } from "react";
import Navigation from "../components/Navigation";
import TrackEmbed from "../components/TrackEmbed";
import Footer from "../components/Footer";

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
                                L'intelligence artificiel a une influence sur notre vie qui devient de plus en plus large à chaque jour. Il est présent dans nos voiture, nos jeux vidéos, nos cellulaires, nos télévisions, ainsi qu'une longue liste d'autre appareil. Mais voyons comment l'IA à créer un chemin dans le domain de musique.
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
                <p ref={viewMoreRef} className={"bg-neutral-900 text-white text-3xl pt-12 xl:pt-18 flex justify-center"}>
                    Les Réseaux Neuronaux
                </p>
                <div className={"flex flex-col sm:grid sm:grid-cols-2 sm:gap-10 bg-neutral-900 pt-20 pl-10 sm:pl-20 pr-10 sm:pr-20 pb-24"}>
                    <div className={"pb-12 sm:pb-0"}>
                        <p className={"text-white text-xl sm:text-2xl"}>C'est quoi un réseau neuronal?</p>
                        <p className={"text-gray-400 mt-2"}>
                            Les réseaux neuronaux sont des systèmes informatiques qui fonctionnent de manière similaire au cerveau humain. Ils sont généralement constitués de plusieurs modules et couches, afin de simuler plus précisément les neurones et le processus de réflexion du cerveau humain. Le premier réseau neuronal a été inventé en 1943 par Walter Pitts et Warren McCulloch. Leur objectif était de créer un système capable de résoudre des problèmes comme le cerveau humain.
                        </p>
                    </div>
                    <div className={"flex h-52 w-full sm:w-auto self-center justify-self-center bg-neutral-800 rounded-lg border-dark border-solid border-[1px]"}>
                        <img src={"/svg/neuralnetwork.svg"} />
                    </div>
                </div>
                <hr className={"border border-dark border-solid"} />
                <div className={"flex flex-col sm:grid sm:grid-cols-2 sm:gap-10 bg-neutral-800 pt-24 2xl:pt-32 pl-10 sm:pl-20 pr-10 sm:pr-20 pb-12"}>
                    <div className={"flex h-52 w-full sm:w-auto self-center justify-self-center bg-neutral-900 rounded-lg border-dark border-solid border-[1px]"}>
                        <img src={"/svg/soundwave.svg"} />
                    </div>
                    <div className={"pb-12 sm:pb-0"}>
                        <p className={"text-white text-xl sm:text-2xl"}>Influence sur la musique</p>
                        <p className={"text-gray-400 mt-2"}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet est in urna fringilla interdum. Cras quis tristique nisl. Sed ex nisl, convallis eget laoreet non, congue at quam. Sed porttitor lobortis aliquet. Aenean accumsan vel nibh pellentesque rutrum. Vivamus ultricies metus sapien, et dignissim nisl eleifend et. Quisque sed neque urna. Vestibulum congue ex ut diam placerat elementum.
                        </p>
                    </div>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg"
                     version="1.1"
                     viewBox="0 0 2880 200"
                     className={"bg-neutral-900"}
                >
                    <path className={"w-full"} fill={"rgb(38 38 38)"} d={"M 0 0 V 200 c 1440 -200 2880 0 2880 0 V 0"} />
                </svg>
                <div className={"flex flex-col items-center bg-neutral-900 pt-24"}>
                    <p className={"text-3xl text-white "}>
                        OpenAI Jukebox
                    </p>
                    <div className={"text-gray-400 pt-16 pb-12"}>
                        <p className={"max-w-2xl ml-4 mr-4"}>
                            Jukebox est un réseau neuronal crée en 2020 par OpenAI, fondé par Elon Musk parmi d'autres investisseurs. Cette forme d'intélligence artificiel est capable de générée des lyriques, des parole et des chants instrumentales, tout ensemble. Ce qui rend ce réseau neuronal unique est le fait qu'il est capable de créer des chansons nouvelles dans le style d'un autre artiste et genre. Les chansons ci-dessus n'ont pas été chanté par des humains, mais sont plutôt le produit de cette IA.
                        </p>
                    </div>
                    <div className={"flex flex-col sm:grid sm:grid-cols-2 sm:gap-6 mb-36"}>
                        <TrackEmbed
                            className={"bg-neutral-800 mb-4 sm:mb-0"}
                            title={"Jazz, in the style of Frank Sinatra & Ella Fitzgerald"}
                            src={"audio/track-frank-sinatra.mp3"}/>
                        <TrackEmbed
                            className={"bg-neutral-800 mb-4 sm:mb-0"}
                            title={"Classic Pop, in the style of Frank Sinatra"}
                            src={"audio/track-frank-sinatra.mp3"}/>
                        <TrackEmbed
                            className={"bg-neutral-800 mb-4 sm:mb-0"}
                            title={"Rock, in the style of Elvis Presley"}
                            src={"audio/track-elvis-presley.mp3"}/>
                        <TrackEmbed
                            className={"bg-neutral-800 mb-4 sm:mb-0"}
                            title={"Pop, in the style of Céline Dion"}
                            src={"audio/track-celine-dion.mp3"}/>
                    </div>
                </div>
            </div>
            <hr className={"border border-dark border-solid"} />
            <div className={"flex flex-col jusitfy-center items-center bg-neutral-900 pt-20"}>
                <p className={"text-3xl text-white mb-12 z-10"}>Plus d'information</p>
                <div className={"flex flex-col sm:grid sm:grid-cols-2 text-xl sm:gap-10 mb-28 text-white"}>
                    <a href={"/accueil"} className={"navlink w-full !ml-0 !mr-0 flex justify-center"}>
                        Accueil
                    </a>
                    <a href={"/impacte"} className={"navlink w-full !ml-0 !mr-0 flex justify-center"}>
                        Impacte
                    </a>
                    <a href={"/experimente"} className={"navlink !ml-0 !mr-0 w-full flex justify-center"}>
                        Expérimente
                    </a>
                    <a href={"/technologie"} className={"navlink !ml-0 !mr-0 w-full flex justify-center"}>
                        Technologie
                    </a>
                </div>
            </div>
            <Footer />
        </div>
    )
}
