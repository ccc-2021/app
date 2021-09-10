import React from "react";
import {IconStar} from "@/Components/Icons/IconStar";

export const RateStars: React.FC<{ rate: number }> = ({ rate }) => (
    <>
        {[...Array(5)].map((value, i) => (
            <IconStar key={i} {...(i >= rate ? {disable: true} : {})} />
        ))}
    </>
)
