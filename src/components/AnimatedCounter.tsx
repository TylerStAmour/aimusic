import {useEffect, useState} from "react";

interface Props {
    value: number;
    time: number; // seconds
    className?: string;
    showDecimals?: boolean
}

export default ({ value, time, className, showDecimals }: Props) => {
    const [ count, setCount ] = useState(0);

    // Quadratic equation: y = (x)(x - 2(time))
    const increase = 0.01; // seconds
    const a = value / (time * (time - 2 * time));
    const max = a * time * (time - 2 * time)

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            const x = i * increase;
            const newCount = a * x * (x - 2 * x);
            setCount(value * (newCount / max))
            console.log((value * (newCount / max)) + " " + (newCount / max))
            i++;
            if (i >= (time / increase)) {
                setCount(value); // avoid any issues with floating point calculations
                clearTimeout(interval);
            }
        }, increase * 1000)
    }, [ setCount ])

    return (
        <p className={className}>{showDecimals ? count : Math.trunc(count)}</p>
    )
}