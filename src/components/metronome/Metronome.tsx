"use client";
import React, { useState, useEffect } from 'react';
import styles from './metronome.module.css';
import { Synth, Transport, Loop } from 'tone';
import CircularSlider from '@fseehawer/react-circular-slider';

interface MetronomeProps {
    // Define props here
}

// TODO: Give the option to accent beats
// TODO: Pan slider, horizontal under tempo
// TODO: Volume control somewhere
const MetronomeComponent: React.FC<MetronomeProps> = (props) => {
    const [tempo, setTempo] = useState<number>(60);
    const [play, setPlay] = useState<boolean>(false);
    const [isDragging, setIsDragging] = useState<boolean>(false);

    const onTempoChange = (newTempo: number): void => {
        setTempo(newTempo);
    }

    const handlePlayClick = (): void => {
        setPlay(!play);
    }

    useEffect(() => {
        // If you don't create the synth in the useEffect it will go fickly 
        // after one full rotation in circle slider        
        const synth: Synth = new Synth({
            envelope: {
                attack: 0.001,
                decay: 0.1,
                sustain: 0,
                release: 0.1
            }
        }).toDestination();
        const loop = (time: number) => {
            synth.triggerAttackRelease("C5", "32n", time);
        };
    
        if (play && !isDragging) {
            Transport.bpm.value = tempo;
            Transport.scheduleRepeat(loop, "4n");
            Transport.start();
        }
    
        return () => {
            Transport.stop();
            Transport.cancel();
        };
    }, [tempo, play, isDragging]);


    return (
        <div className={styles.tempoContainer}>
            <div className={styles.tempoController}>
                <CircularSlider
                    label={'bpm'}
                    direction={1}
                    width={220}
                    min={20}
                    max={240}
                    knobPosition={'bottom'}
                    dataIndex={tempo - 20}
                    onChange={onTempoChange}
                    isDragging={(dragging: boolean) => setIsDragging(dragging)}
                />
            </div>

            <div className={styles.playButtonContainer}>
                <button className={styles.playButton} onClick={handlePlayClick}>
                    {!play ? 'Play' : 'Pause'}
                </button>
            </div>
        </div>
    );
};

export default MetronomeComponent;
