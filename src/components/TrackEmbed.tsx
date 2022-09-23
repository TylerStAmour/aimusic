import React, {useEffect, useRef, useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faVolumeXmark, faVolumeHigh, faVolumeLow } from "@fortawesome/free-solid-svg-icons"
import {IconDefinition} from "@fortawesome/free-regular-svg-icons";
import { TransitionGroup, CSSTransition } from "react-transition-group";

interface Props {
    title: string;
    src: string;
    className: string;
}

const secondsToTimeFormat = (seconds: number) => {
    const secondsTime = Math.round(seconds % 60);
    return `${Math.floor(seconds / 60).toString()}:${secondsTime < 10 ? `0${secondsTime}` : secondsTime}`
}

export default ({ title, src, className }: Props) => {
    const [ isPlaying, setPlaying ] = useState(false);
    const [ volumeVisible, setVolumeVisible ] = useState(false);
    const [ progress, setProgress ] = useState(0);
    const [ max, setMax ] = useState(5);
    const [ audio, setAudio ] = useState<HTMLAudioElement>({} as HTMLAudioElement);
    const [ icon, setIcon ] = useState<IconDefinition>(faVolumeLow);

    const timeSlider = useRef<HTMLInputElement>({} as HTMLInputElement);

    const setVolume = (val: number) => {
        audio.volume = val;
        setIcon(audio.volume < 0.5 ? audio.volume == 0 ? faVolumeXmark : faVolumeLow : faVolumeHigh);
    }

    const setCurrentTime = (val: number) => {
        audio.currentTime = val;
    }

    useEffect(() => {
        setAudio(new Audio(src));
        audio.volume = 0.25;
        setIcon(audio.volume < 0.5 ? audio.volume == 0 ? faVolumeXmark : faVolumeLow : faVolumeHigh);
        setMax(audio.currentTime);
    }, []);

    useEffect(() => {
        setInterval(() => {
            setProgress((audio.currentTime / audio.duration) * 100)
            console.log(audio.currentTime + " " + audio.duration + " " + timeSlider.current.value)
        }, 1000);
    }, [ audio ]);


    const pauseOrPlay = () => {
        isPlaying ? audio.pause() : audio.play();
        setPlaying(!isPlaying);
    }

    return (
        <div className={className + " flex items-center w-[30rem] h-18 rounded pl-4 pb-3 pt-3 pr-3"}>
            <FontAwesomeIcon
                icon={isPlaying ? faPause : faPlay}
                color={"#9932CC"}
                size={"lg"}
                className={"cursor-pointer mr-4"}
                onClick={pauseOrPlay}
                fixedWidth
            />
            <div className={"flex flex-col w-full"}>
                <p className={"text-gray-300 text-[0.725rem] mb-2"}>{title}</p>
                <input
                    ref={timeSlider}
                    type={"range"}
                    min={0}
                    max={max}
                    value={audio.currentTime}
                    className={`bg-secondary pr-1 !w-full`}
                    onChange={(evt) => setCurrentTime(parseInt(evt.currentTarget.value))}
                />
                <p className={"text-gray-400 text-[0.7rem] text-end pt-1 pr-4"}>{secondsToTimeFormat(audio.currentTime)} / {secondsToTimeFormat(audio.duration)}</p>
            </div>
            <div onMouseEnter={() => setVolumeVisible(true)}
                 onMouseLeave={() => setVolumeVisible(false)}
                 className={"flex flex-row border rounded-xl ml-3 border-neutral-800 hover:border-neutral-900 hover:bg-neutral-900 p-1"}
            >
                <FontAwesomeIcon
                    icon={icon}
                    color={"#9932CC"}
                    size={"lg"}
                    className={"cursor-pointer"}
                    id={"volume"}
                />
                {volumeVisible &&
                    <input
                        type={"range"}
                        min={"0"}
                        max={"100"}
                        defaultValue={audio.volume}
                        className={`bg-secondary ml-2 pr-1`}
                        onChange={(evt) => setVolume(parseInt(evt.currentTarget.value) / 100)}
                    />
                }
            </div>
        </div>
    );
}