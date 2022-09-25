import {useEffect, useState} from "react";

interface Props {
    value: number;
    time: number; // seconds
    className?: string;
    showDecimals?: boolean;
    decimalPlaces?: number;
}

export default ({ value, time, className, showDecimals, decimalPlaces }: Props) => {
    const [ count, setCount ] = useState(0);

    if (decimalPlaces !== undefined) {
        showDecimals = true;
    }

    // Quadratic equation: y = a(x)(x - 2(time))
    const increase = 0.01; // seconds
    const a = value / (time * (time - 2 * time));
    const max = a * time * (time - 2 * time)

    useEffect(() => {
        let i = 0;
        const interval = setInterval(() => {
            const x = i * increase;
            const newCount = a * x * (x - 2 * x);
            setCount(value * (newCount / max))
            if (i >= (time / increase)) {
                clearTimeout(interval);
            }
            i++;
        }, increase * 1000)
    }, [ setCount ])

    return (
        <p className={className}>
            {showDecimals ? decimalPlaces !== undefined ? count.toFixed(decimalPlaces) : count : Math.trunc(count)}
        </p>
    )
}