"use client";
import React, { useState, useEffect } from 'react';
import styles from './metronome.module.css';
import { Synth, Transport, Loop, Gain, Volume } from 'tone';
import CircularSlider from '@fseehawer/react-circular-slider';
import AccentButtons from '../accent/AccentButtons';

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
    const [accentBeats, setAccentBeats] = useState<number[]>([]);

    const onTempoChange = (newTempo: number): void => {
        setTempo(newTempo);
    }

    const handlePlayClick = (): void => {
        setPlay(!play);
    }

    useEffect(() => {
        let beatCounter = 0;
        const volume = new Volume().toDestination();

        const synth = new Synth({
            envelope: {
                attack: 0.001,
                decay: 0.1,
                sustain: 0,
                release: 0.1,
            }
        }).connect(volume);

        const loop = (time: number) => {
            beatCounter++;
            const currentBeat = beatCounter % 4 === 0 ? 4 : beatCounter % 4;
            if (accentBeats.includes(currentBeat)) {
                console.log('hi');
                volume.volume.setValueAtTime(-5, Transport.immediate());
            } else {
                volume.volume.setValueAtTime(-12, Transport.immediate());
            }
            synth.triggerAttackRelease("C5", "32n", time);
        };

        if (play && !isDragging) {
            beatCounter = 0;
            Transport.bpm.value = tempo;
            Transport.scheduleRepeat(loop, "4n");
            Transport.start();
        }

        return () => {
            Transport.stop();
            Transport.cancel();
        };
    }, [tempo, play, isDragging, accentBeats]);


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

                <AccentButtons accentBeats={accentBeats} setAccentBeats={setAccentBeats} />
            </div>
        </div>
    );
};

export default MetronomeComponent;
