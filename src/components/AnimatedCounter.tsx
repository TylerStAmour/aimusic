import {useEffect, useState} from "react";
import hexRgb from "hex-rgb";

interface Props {
    value: number;
    time: number; // seconds
    className?: string;
    showDecimals?: boolean;
    decimalPlaces?: number;
    colorGradient?: string; // only hex at the moment
}

interface Variables {
    count: number;
    color: string;
}

const increaseColor = (color: string, baseColor: string, percentage: number): string => {
    const rgb = hexRgb(color);
    const base = hexRgb(baseColor);
    return `rgb(${base.red * (1 - percentage) + rgb.red * percentage}, 
    ${base.green * (1 - percentage) + rgb.green * percentage}, 
    ${base.blue * (1 - percentage) + rgb.blue * percentage})`
}

export default ({ value, time, className, showDecimals, decimalPlaces, colorGradient }: Props) => {
    const [ variables, setVariables ] = useState<Variables>({ count: 0, color: "white"});

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
            if (i >= (time / increase)) {
                clearTimeout(interval);
            }
            i++;
            setVariables({
                count: value * (newCount / max),
                color: colorGradient !== undefined ? increaseColor(colorGradient, "#FFFFFF", newCount / max) : "",
            });

        }, increase * 1000)
    }, [ setVariables ])

    return (
        <p className={className} style={{ color: variables.color }}>
            {showDecimals ? decimalPlaces !== undefined ? variables.count.toFixed(decimalPlaces) : variables.count : Math.trunc(variables.count)}
        </p>
    )
}