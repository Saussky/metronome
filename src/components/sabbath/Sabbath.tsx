"use client";
import { useEffect, useRef, useState } from "react";


const SabbathComponent: React.FC = () => {
    const RatSalad = useRef<HTMLAudioElement | null>(null);
    const [play, setPlay] = useState<boolean>(false);
    const audioCtx = new AudioContext();

    useEffect(() => {
        if (RatSalad.current) {
            const song = audioCtx.createMediaElementSource(RatSalad.current);
            song.connect(audioCtx.destination);
        }
    }, [])

    const handleClick = () => {
        // if (audioCtx.state == "suspended") audioCtx.resume();
        setPlay(!play);
    }

    useEffect(() => {
        if (RatSalad.current) {
            if (play) {
                RatSalad.current.play();
            } else {
                RatSalad.current.pause();
            }
        }
    }, [play])

    return (
        <div>
            <audio src="/RatSalad-BlackSabbath.mp3" ref={RatSalad}></audio>
            <button onClick={handleClick}>Play The Best Song</button>
        </div>
    )
}

export default SabbathComponent;