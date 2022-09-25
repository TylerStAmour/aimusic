import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import AnimatedCounter from "../components/AnimatedCounter";


export default () => (
    <div className={"flex flex-col bg-neutral-900"}>
        <Navigation />
        <div className={"flex flex-col items-center mb-48"}>
            <p className={"text-4xl text-white mb-2"}>Impacte sur la société</p>
            <p className={"text-md text-gray-400 max-w-3xl text-center"}>L'Intelligence artificiel, comme les réseaux neuronaux, on un impacte sur la society de plus en plus large. Mais voyons comment ils impacte la production de musique. </p>
        </div>
        <p className={"text-3xl text-white flex justify-center mb-4"}>
            Quelques Statistiques
        </p>
        <div className={"flex flex-col sm:grid sm:grid-cols-2 gap-6 ml-24 mr-24 mb-6"}>
            <div className={"flex flex-col items-center"}>
                <div className={"flex flex-row mb-1"}>
                    <AnimatedCounter value={62} time={5} decimalPlaces={2} showDecimals={true} className={"text-white font-semibold text-3xl"}/>
                    <p className={"text-gray-400 text-md flex items-end ml-2"}>Milliards</p>
                </div>
                <p className={"text-gray-400"}>
                    Valeur de l'industrie musicale
                </p>
            </div>
            <div className={"flex flex-col items-center"}>
                <div className={"flex flex-row mb-1"}>
                    <AnimatedCounter value={422.37} time={5} decimalPlaces={2} showDecimals={true} className={"text-white font-semibold text-3xl"}/>
                    <p className={"text-gray-400 text-md flex items-end ml-2"}>Milliards</p>
                </div>
                <p className={"text-gray-400"}>
                    Valeur de l'industrie IA
                </p>
            </div>
            <div className={"flex flex-col items-center"}>
                <div className={"flex flex-row mb-1"}>
                    <AnimatedCounter value={6.} time={5} decimalPlaces={2} showDecimals={true} className={"text-white font-semibold text-3xl"}/>
                    <p className={"text-gray-400 text-md flex items-end ml-2"}>%</p>
                </div>
                <p className={"text-gray-400"}>
                    Croissance expecté jusqu'à 2030
                </p>
            </div>
            <div className={"flex flex-col items-center"}>
                <div className={"flex flex-row mb-1"}>
                    <AnimatedCounter value={39.4} time={5} decimalPlaces={2} showDecimals={true} className={"text-white font-semibold text-3xl"}/>
                    <p className={"text-gray-400 text-md flex items-end ml-2"}>%</p>
                </div>
                <p className={"text-gray-400"}>
                    Croissance expecté jusqu'à 2028
                </p>
            </div>
            <div className={"flex flex-col items-center"}>
                <div className={"flex flex-row mb-1"}>
                    <AnimatedCounter value={350} time={5} decimalPlaces={2} showDecimals={true} className={"text-white font-semibold text-3xl"}/>
                    <p className={"text-gray-400 text-md flex items-end ml-2"}>Milles</p>
                </div>
                <p className={"text-gray-400"}>
                    Nombres d'emplois dans l'industrie musicale 
                </p>
            </div>
            <div className={"flex flex-col items-center"}>
                <div className={"flex flex-row mb-1"}>
                    <AnimatedCounter value={300.999} time={5} decimalPlaces={2} showDecimals={true} className={"text-white font-semibold text-3xl"}/>
                    <p className={"text-gray-400 text-md flex items-end ml-2"}>Milles</p>
                </div>
                <p className={"text-gray-400"}>
                    Nombre d'emplois dans l'industrie IA
                </p>
            </div>
        </div>
        <Footer/>
    </div>
)