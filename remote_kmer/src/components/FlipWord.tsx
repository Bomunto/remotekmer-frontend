import React from "react";
import { FlipWords } from "@/components/ui/flip-words";

export function FlipWordsDemo() {
    const words = ["Developpeur", "Designer", "DevOps", "Community Manager"];

    return (
        <div className="h-[40rem] flex justify-center items-center px-4">
            <div className="text-4xl mx-auto font-normal text-white ">
                Vous êtes
                <FlipWords words={words} /> <br />
                websites with Aceternity UI
            </div>
        </div>
    );
}
