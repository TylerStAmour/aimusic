import Navigation from "../components/Navigation";
import Footer from "../components/Footer";
import {useState} from "react";
import submitGPTRequest from "../api/gpt/submitGPTRequest";

export default () => {
    const [ response, setResponse ] = useState("");
    const [ error, setError ] = useState("");
    const [ input, setInput ] = useState("");

    const submit = () => {
        submitGPTRequest(input)
            .then(resp => {
                setResponse(resp);
            })
            .catch(error => {
                setError(error);
            });
    };

    return (
        <div className={"flex flex-col bg-neutral-900"}>
            <Navigation />
            <div className={"flex flex-col items-center mb-16"}>
                <p className={"text-4xl text-white"}>Expérimenté avec GPT-3</p>
                <p className={"text-md text-gray-400 max-w-2xl text-center mt-2"}>Dévéloppée par OpenAI en 2020, GPT-3 est un réseau neuronal « transformeur. » Il fournit 4 modèles pré-entrainé pour produire du texte semblable à un humain. </p>
            </div>
            <div className={"flex justify-center"}>
                <div className={"flex flex-col max-w-3xl"}>
                    <p className={"text-md text-gray-400 max-w-3xl"}>Ci-dessous vous pouvez entrer du texte et le soumettre à GPT-3 afin qu'il soit traité. Prendre en note que le texte doit être en anglais. Cette démonstration est seulement possible parce que GPT-3 est un réseau publique et open source. De plus, il fournit un API pour qu'on puisse intégré dans nos site web, comme on voit ici.</p>
                        <textarea
                            className={"bg-neutral-200 w-full mt-4 rounded h-36 p-2 mb-2 outline-none resize-none"}
                            onChange={(event) => setInput(event.currentTarget.value)}
                        />
                        {response.length > 0 &&
                            <div
                                className={"bg-neutral-200 flex flex-col w-full mt-4 rounded h-36 mb-2 outline-none resize-none"}
                            >
                                <p className={"text-black font-semibold pt-1 pb-0.5 pl-2"}>GPT-3 Output</p>
                                <hr className={"w-full border border-solid border-neutral-700"}/>
                            </div>
                        }
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