import './elements.css';

export default () => (
    <div className={"flex justify-center mb-14 text-white"}>
        <a href={"/accueil"} className={"navlink"}>
            Accueil
        </a>
        <a href={"/impacte"} className={"navlink"}>
            Impacte
        </a>
        <a href={"/experimente"} className={"navlink"}>
            Expérimente
        </a>
        <a href={"/technologie"} className={"navlink"}>
            Technologie
        </a>
    </div>
)