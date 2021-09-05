import React from "react";
import {StarIcon} from "@/components/Atomic/Atoms/StarIcon";

export const RateStars: React.FC<{ rate: number }> = ({ rate, }) => (
    <>
        {[...Array(rate)].map((value, i) => (
            <StarIcon key={i}/>
        ))}

        {[...Array(5 - rate)].map((value, i) => (
            <StarIcon key={`disable-${i}`} disable={true}/>
        ))}
    </>
)
