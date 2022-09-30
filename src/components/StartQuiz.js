import React from "react";
import '../styles/StartQuiz.css';
import TypeAnim from "./TypeAnim";

export default function StartQuiz() {


    return (
        <div 
            className="start-quiz" 
            style={{background: `url('${process.env.PUBLIC_URL}/images/stephansQuintet.png')`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"}}
        >
            <div className="logo">
                <p>Webb Game</p>
            </div>

            <div className="main-box">
                <div className="mission-description">
                    <p>Answer questions to complete rhe mission</p>
                    <p className="main-mission">Your mission is to find the first galaxies that formed in the early universe and peer through dusty clouds to see stars forming planetary systems.</p>
                </div>

                <button className="play-btn">
                    Play
                </button>
            </div>

            <div className="footer">
                <div className="launch-data">
                    <TypeAnim thinText='Launch date: ' boldText='December 25, 2021' />
                    <TypeAnim thinText='Location: ' boldText="Europe's Spaceport in French Guiana" />
                    <TypeAnim thinText='Launch vehicle: ' boldText='Ariane 5' />
                </div>
                <p className="onegate-quiz">powered by <span>ONEGATE</span></p>
            </div>

        </div>
    )
}