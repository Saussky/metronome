import React from 'react';
import styles from './accent.module.css'; // Assuming you have the styles in this path

interface AccentButtonsProps {
    accentBeats: number[];
    setAccentBeats: React.Dispatch<React.SetStateAction<number[]>>;
}

const AccentButtons: React.FC<AccentButtonsProps> = ({ accentBeats, setAccentBeats }) => {
    const toggleAccentBeat = (beat: number) => {
        if (accentBeats.includes(beat)) {
            setAccentBeats((prev: number[]) => prev.filter(b => b !== beat));
        } else {
            setAccentBeats((prev: number[]) => [...prev, beat]);
        }
    }

    return (
        <div className={styles.accentButtonContainer}>
            {[1, 2, 3, 4].map(value => (
                <button
                    key={value}
                    className={`${styles.accentButton} ${accentBeats.includes(value) ? styles.active : ''}`}
                    onClick={() => toggleAccentBeat(value)}
                >
                    {value}
                </button>
            ))}
        </div>
    );
};

export default AccentButtons;
