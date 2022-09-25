import Navigation from "../components/Navigation";
import Footer from "../components/Footer";


export default () => {
    return (
        <div className={"flex flex-col"}>
            <Navigation />
            <div className={"flex flex-col items-center mb-12"}>
                <p className={"text-4xl text-white"}>Expérimenté avec GPT-3</p>
                <p className={"text-md text-gray-400 max-w-xl text-center"}>Dévéloppée par OpenAI en 2020, GPT-3 est un réseau neuronal «transformeur.» Il fournit 4 modèles pré-entrainé pour produire du texte semblable à un humain. </p>
            </div>
            <Footer/>
        </div>
    )
}