import Navigation from "../components/Navigation";
import Particles from "../components/Particles";

export default () => (
    <div>
        <Navigation />
        <Particles />
        <div className={"relative flex flex-col grow items-center z-10 mt-28"}>
            <p className={"text-white text-5xl font-bold"}>Page Non Trouvée</p>
            <p className={"text-gray-400 text-2xl"}>Erreur 404</p>
        </div>
    </div>
)