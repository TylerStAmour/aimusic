import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnimatedCounter from "../components/AnimatedCounter";
import React from "react";

export default () => (
    <div className={"flex flex-col bg-neutral-900"}>
        <Navigation />
        <div className={"flex flex-col items-center mb-48"}>
            <p className={"text-4xl text-white mb-2"}>Les Réseaux Neuronaux</p>
            <p className={"text-md text-gray-400 max-w-3xl text-center"}>L'Intelligence artificiel, comme les réseaux neuronaux, on un impacte sur la society de plus en plus large. Mais voyons comment ils impacte la production de musique. </p>
        </div>
        <div className={"flex flex-col items-center"}>
            <p className={"text-3xl text-white flex justify-center mb-8"}>
                Quelques Statistiques
            </p>
            <p className={"text-white"}>(ignore the statistics for now, I'll be changing that later)</p>
        </div>
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
                    <p className={"text-white text-xl sm:text-2xl"}>Le fonctionnement d'un réseau neuronal</p>
                    <p className={"text-gray-400 mt-2"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra quam sed aliquet laoreet. Proin mollis luctus posuere. Curabitur venenatis malesuada odio at interdum. Nam a laoreet diam. Duis vitae fringilla urna. Pellentesque tincidunt ultrices efficitur. Ut in luctus neque. Fusce lorem velit, pharetra et porttitor ac, vulputate sed magna. Vivamus non varius purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ornare lorem eget est hendrerit accumsan. Nulla eget neque metus. Vestibulum non risus pharetra, vehicula dolor ac, porttitor dui. In at nisl at erat feugiat aliquet. Praesent fringilla, urna et pulvinar blandit, felis massa ornare sem, quis vestibulum urna mi eu enim.
                    </p>
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
                <p className={"text-white text-xl sm:text-2xl"}>Types de réseaux neuronaux</p>
                <p className={"text-gray-400 mt-2"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pharetra quam sed aliquet laoreet. Proin mollis luctus posuere. Curabitur venenatis malesuada odio at interdum. Nam a laoreet diam. Duis vitae fringilla urna. Pellentesque tincidunt ultrices efficitur. Ut in luctus neque. Fusce lorem velit, pharetra et porttitor ac, vulputate sed magna. Vivamus non varius purus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed ornare lorem eget est hendrerit accumsan. Nulla eget neque metus. Vestibulum non risus pharetra, vehicula dolor ac, porttitor dui. In at nisl at erat feugiat aliquet. Praesent fringilla, urna et pulvinar blandit, felis massa ornare sem, quis vestibulum urna mi eu enim.
                </p>
            </div>
        </div>
        <Footer/>
    </div>
)