"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import styles from "./header.module.css";

const HeaderComponent: React.FC = () => {
    return (
        <React.Fragment>
            <div className={styles.topHeaderContainer}>
                <Marquee direction={"left"} autoFill={true} loop={6}>
                    <div className={styles.topHeader}>
                        Metronome{'\t'}
                    </div>
                </Marquee>
            </div>

            <Marquee direction={"right"} loop={6}>
                <div className={styles.middleHeader}>
                        Metronome
                </div>
            </Marquee>

            <div className={styles.bottomHeaderContainer}>
                <Marquee direction={"left"} autoFill={true} loop={6}>
                    <div className={styles.bottomHeader}>
                        Metronome
                    </div>
                </Marquee>
            </div>
        </React.Fragment>
    )
};

export default HeaderComponent;