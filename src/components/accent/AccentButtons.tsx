import React from 'react';
import styles from './accent.module.css'; // Assuming you have the styles in this path

interface AccentButtonsProps {
    accentBeat: number;
    setAccentBeat: (value: number) => void;
}

const AccentButtons: React.FC<AccentButtonsProps> = ({ accentBeat, setAccentBeat }) => {
    return (
        <div className={styles.accentButtonContainer}>
            {[0, 1, 2, 3, 4].map(value => (
                <button
                    key={value}
                    className={`${styles.accentButton} ${accentBeat === value ? styles.active : ''}`}
                    onClick={() => setAccentBeat(value)}
                >
                    {value}
                </button>
            ))}
        </div>
    );
};

export default AccentButtons;
