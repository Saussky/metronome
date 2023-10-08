"use client";
import { useEffect, useRef, useState } from "react";
import * as Tone from 'tone';

const BeepComponent: React.FC = () => {
    const [play, setPlay] = useState<boolean>(false);

    useEffect(() => {

    }, [])

    const handleClick = () => {
        // if (audioCtx.state == "suspended") audioCtx.resume();
        setPlay(!play);
    }

    useEffect(() => {
        const synth = new Tone.Synth({
            envelope: {
                attack: 0.005,
                decay: 0.1,
                sustain: 0.3,
                release: 0.1
            }
        }).toDestination();

        if (play) {
            const loop = new Tone.Loop(time => {
                synth.triggerAttackRelease("C5", "64n", time);
            }, "4n").start(0);
            Tone.Transport.start()
        } if (!play) {
            Tone.Transport.stop();
        }
    }, [play])

    return (
        <div>
            <button onClick={handleClick}>Play The Beep Song</button>
        </div>
    )
};

export default BeepComponent;