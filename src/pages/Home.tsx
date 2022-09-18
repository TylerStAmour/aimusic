import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import Particles from "../components/Particles";

export default () => {

    return (
        <div>
            <div>
                <Particles />
                <div>
                    <div className={"flex flex-col items-center"}>
                        <p className={"text-4xl z-10 text-white"}>
                            L'INTELLIGENCE DE LA MUSIQUE
                        </p>
                        <p className={"text-xl z-10 text-gray-400"}>
                            Les réseaux neuronal qui génère de la musique
                        </p>
                    </div>
                </div>
                <div className={"flex flex-col mt-24 2xl:mt-36 items-center text-white"}>
                    <p className={"max-w-3xl z-10"}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet est in urna fringilla interdum. Cras quis tristique nisl. Sed ex nisl, convallis eget laoreet non, congue at quam. Sed porttitor lobortis aliquet. Aenean accumsan vel nibh pellentesque rutrum. Vivamus ultricies metus sapien, et dignissim nisl eleifend et. Quisque sed neque urna. Vestibulum congue ex ut diam placerat elementum.
                    </p>
                </div>
                <div className={"flex flex-row justify-center items-end grow text-white mt-28"}>
                    <div className={"flex grow flex-col"}>
                        <div className={"flex justify-center items-end bg-gradient-to-b from-neutral-900 to-black h-36"}>
                            <div className={"flex justify-center mb-6"}>
                                <a href={""} className={"flex flex-col items-center hover:opacity-75 hover:text-secondary hover:-translate-y-0.5 transition ease-in duration-100"}>
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
            <div className={"relative z-10"}>
                <div className={"h-24 bg-black"}/>
            </div>
        </div>
    )
}
