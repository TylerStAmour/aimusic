import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons"
import Particles from "../components/Particles";
import { Parallax, useParallax } from "react-scroll-parallax";

export default () => {

    return (
        <div className={"flex flex-col grow w-full"}>
            <div>
                <Particles/>
                <div className={"flex flex-col items-center"}>
                    <p className={"text-4xl text-white"}>
                        L'INTELLIGENCE DE LA MUSIQUE
                    </p>
                    <p className={"text-xl text-gray-400"}>
                        Les réseaux neuronal qui génère de la musique
                    </p>
                </div>
            </div>
            <div className={"flex flex-col mt-24 2xl:mt-36 items-center text-white"}>
                <p style={{ maxWidth: "48rem" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce imperdiet est in urna fringilla interdum. Cras quis tristique nisl. Sed ex nisl, convallis eget laoreet non, congue at quam. Sed porttitor lobortis aliquet. Aenean accumsan vel nibh pellentesque rutrum. Vivamus ultricies metus sapien, et dignissim nisl eleifend et. Quisque sed neque urna. Vestibulum congue ex ut diam placerat elementum.
                </p>
            </div>
            <div className={"flex flex-row justify-center items-end grow 2xl:bottom-12 text-white"}>
                <div className={"flex flex-col"}>
                    <div className={"flex justify-center items-end bg-gradient-to-b from-transparent to-black h-36 w-screen"}>
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
    )
}