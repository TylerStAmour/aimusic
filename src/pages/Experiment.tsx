import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {useState} from "react";
import submitGPTRequest from "../api/gpt/submitGPTRequest";

const validateInput = (value: string): string => {
    // GPT doesnt handle new lines or quotes very well
    return value.replaceAll("\n", "\\n").replaceAll('\"', "\\\"");
}

export default () => {
    const [ response, setResponse ] = useState("");
    const [ input, setInput ] = useState("");

    const submit = () => {
        submitGPTRequest(validateInput(input))
            .then(resp => {
                setResponse(resp);
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className={"flex flex-col bg-neutral-900 h-full"}>
            <Navigation />
            <div className={"flex flex-col items-center mb-16"}>
                <p className={"text-4xl text-white"}>Expérimenté avec GPT-3</p>
                <p className={"text-md text-gray-400 max-w-2xl text-center mt-2"}>Dévéloppée par OpenAI en 2020, GPT-3 est un réseau neuronal « transformeur. » Il fournit 4 modèles pré-entrainé pour produire du texte semblable à un humain. </p>
            </div>
            <div className={"flex justify-center grow"}>
                <div className={"flex flex-col max-w-3xl"}>
                    <p className={"text-md text-gray-400 max-w-3xl mb-2 2xl:mb-12"}>Ci-dessous vous pouvez entrer du texte et le soumettre à GPT-3 afin qu'il soit traité. Prendre en note que le texte doit être en anglais. Cette démonstration est seulement possible parce que GPT-3 est un réseau publique et open source. De plus, il fournit un API pour qu'on puisse intégré dans nos site web, comme on voit ici.</p>
                    <p className={"text-gray-400 text-sm text-center mb-2"}><span className={"text-secondary"}>Exemple:</span> Explain the concept of neural networks.</p>
                    <div className={"flex flex-col sm:grid sm:grid-cols-2 gap-4"}>
                        <textarea
                            className={"bg-neutral-200 placeholder:text-gray-400 w-full rounded h-36 2xl:h-48 p-2 mb-4 outline-none resize-none"}
                            onChange={(event) => setInput(event.currentTarget.value)}
                            placeholder={"Entrez du texte ici..."}
                        />
                        <div
                            className={"bg-neutral-200 flex flex-col w-full rounded h-36 2xl:h-48 mb-4 outline-none resize-none"}
                        >
                            <p className={`${response === "" ? "text-gray-400" : "text-black text-sm"} overflow-auto p-2`}>
                                {response !== "" ? response : "La réponse sera affichée ici..."}
                            </p>
                        </div>
                    </div>
                    <input
                        type={"submit"}
                        value={"Soumettre"}
                        onClick={submit}
                        className={"text-white w-min cursor-pointer bg-gradient-to-br from-[#5d0787] via-[#7e1dad] to-secondary transition hover:opacity-75 duration-300 pt-1 pb-1 pr-2 pl-2 rounded"}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    )
}