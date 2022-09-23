import './elements.css';
import {tsParticles} from "tsparticles-engine";

export default () => (
    <div className={"grid grid-cols-2 gap-3 sm:flex sm:justify-center mb-14 text-white pt-8"} id={"navbar"}>
        <a href={"/"} className={"navlink w-min flex justify-self-center"}>
            Accueil
        </a>
        <a href={"/impacte"} className={"navlink w-min flex justify-self-center"}>
            Impacte
        </a>
        <a href={"/experimente"} className={"navlink w-min flex justify-self-center"}>
            Expérimente
        </a>
        <a href={"/technologie"} className={"navlink w-min flex justify-self-center"}>
            Technologie
        </a>
    </div>
)