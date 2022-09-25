import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnimatedCounter from "../components/AnimatedCounter";
import React from "react";


export default () => (
    <div className={"flex flex-col bg-neutral-900"}>
        <Navigation />
        <div className={"flex flex-col items-center mb-48"}>
            <p className={"text-4xl text-white mb-2"}>Impacte sur la société</p>
            <p className={"text-md text-gray-400 max-w-3xl text-center"}>L'Intelligence artificiel, comme les réseaux neuronaux, on un impacte sur la society de plus en plus large. Mais voyons comment ils impacte la production de musique. </p>
        </div>
        <p className={"text-3xl text-white flex justify-center mb-8"}>
            Quelques Statistiques
        </p>
        <div className={"flex justify-center"}>
            <div className={"flex flex-col sm:grid sm:grid-cols-2 gap-12 gap-x-32 mb-14"}>
                <div className={"flex flex-col items-center"}>
                    <div className={"flex flex-row mb-1"}>
                        <AnimatedCounter value={62} time={5} decimalPlaces={2} showDecimals={true} className={"font-semibold text-3xl"} colorGradient={"#9932CC"}/>
                        <p className={"text-gray-400 text-md flex items-end ml-2"}>Milliards</p>
                    </div>
                    <p className={"text-gray-400"}>
                        Valeur de l'industrie musicale
                    </p>
                </div>
                <div className={"flex flex-col items-center"}>
                    <div className={"flex flex-row mb-1"}>
                        <AnimatedCounter value={422.37} time={5} decimalPlaces={2} showDecimals={true} className={"text-white font-semibold text-3xl"} colorGradient={"#9932CC"}/>
                        <p className={"text-gray-400 text-md flex items-end ml-2"}>Milliards</p>
                    </div>
                    <p className={"text-gray-400"}>
                        Valeur de l'industrie IA
                    </p>
                </div>
                <div className={"flex flex-col items-center"}>
                    <div className={"flex flex-row mb-1"}>
                        <AnimatedCounter value={6.} time={5} decimalPlaces={2} showDecimals={true} className={"text-white font-semibold text-3xl"} colorGradient={"#9932CC"}/>
                        <p className={"text-gray-400 text-md flex items-end ml-1"}>%</p>
                    </div>
                    <p className={"text-gray-400"}>
                        Croissance expecté jusqu'à 2030
                    </p>
                </div>
                <div className={"flex flex-col items-center"}>
                    <div className={"flex flex-row mb-1"}>
                        <AnimatedCounter value={39.4} time={5} decimalPlaces={2} showDecimals={true} className={"text-white font-semibold text-3xl"} colorGradient={"#9932CC"}/>
                        <p className={"text-gray-400 text-md flex items-end ml-1"}>%</p>
                    </div>
                    <p className={"text-gray-400"}>
                        Croissance expecté jusqu'à 2028
                    </p>
                </div>
                <div className={"flex flex-col items-center"}>
                    <div className={"flex flex-row mb-1"}>
                        <AnimatedCounter value={350} time={5} decimalPlaces={2} showDecimals={true} className={"text-white font-semibold text-3xl"} colorGradient={"#9932CC"}/>
                        <p className={"text-gray-400 text-md flex items-end ml-2"}>Milles</p>
                    </div>
                    <p className={"text-gray-400"}>
                        Nombres d'emplois dans l'industrie musicale
                    </p>
                </div>
                <div className={"flex flex-col items-center"}>
                    <div className={"flex flex-row mb-1"}>
                        <AnimatedCounter value={300.999} time={5} decimalPlaces={2} showDecimals={true} className={"text-white font-semibold text-3xl"} colorGradient={"#9932CC"}/>
                        <p className={"text-gray-400 text-md flex items-end ml-2"}>Milles</p>
                    </div>
                    <p className={"text-gray-400"}>
                        Nombre d'emplois dans l'industrie IA
                    </p>
                </div>
            </div>
        </div>
        <hr className={"border border-solid border-dark"}/>
        <div className={"flex flex-col bg-neutral-800"}>
            <div className={"flex flex-col sm:grid sm:grid-cols-2 sm:gap-10 bg-neutral-800 pt-20 pl-10 sm:pl-20 pr-10 sm:pr-20 pb-24"}>
                <div className={"pb-12 sm:pb-0"}>
                    <p className={"text-white text-xl sm:text-2xl"}>Impacte sur les embauches</p>
                    <p className={"text-gray-400 mt-2"}>
                        Les intelligences artificielles, comme Jukebox, sont très utile pour la composition de musique. Tandis qu'ils ne sont pas parfait au moment, ils peuvent encore nous aider dans le processus. Alors, certaines embauches dans l'industrie de la musique vont disparaître en faveur de l'automation. Par exemple, un dévéloppeur indépendent n'aurais pas besoin d'embaucher un musicien pour la musique d'un jeu, plutôt, il pourra le genéré avec un réseau neuronal. Mais, lorsqu'il y a des embauches perdu, il y a toujours d'autres embauches créer. Donc on va continuer a observer la croissance des emplois concernent l'intelligence artificielle.                    </p>
                </div>
                <div className={"flex h-52 w-full pr-2 pl-2 sm:w-auto self-center justify-self-center bg-neutral-900 rounded-lg border-dark border-solid border-[1px]"}>
                    <img src={"/svg/graph.svg"} />
                </div>
            </div>
        </div>
        <div className={"flex flex-col sm:grid sm:grid-cols-2 sm:gap-10 bg-neutral-900 pt-24 2xl:pt-24 pl-10 sm:pl-20 pr-10 sm:pr-20 pb-12"}>
            <div className={"flex h-52 w-full sm:w-auto self-center justify-self-center bg-neutral-800 rounded-lg border-dark border-solid border-[1px]"}>
                <img src={"/svg/chip.svg"} />
            </div>
            <div className={"pb-12 sm:pb-0"}>
                <p className={"text-white text-xl sm:text-2xl"}>Impacte sur les conditions de travail</p>
                <p className={"text-gray-400 mt-2"}>
                    Avec l'innovation de Jukebox, Aiva, Boomy, Soundraw, et d'autres réseau neuronal, la tâche d'un musicien ou compositeur va devenir beaucoup plus simple. Ils vont dépensé plus de temps à écrire une description pour que l'IA puissent le transformé en musique. On pourra aussi utiliser les compositions genérer par un réseau comme modèle ou inspiration pour un autre oeuvre. Mais, la tâches des chanteurs ne changerait pas pour au moins quelques années parce que ces réseau ne sont pas capable de produire une voie humaine et compréhensible.
                </p>
            </div>
        </div>
        <Footer/>
    </div>
)