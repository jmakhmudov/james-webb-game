import React from "react";
import '../styles/StartQuiz.css';
import TypeAnim from "./TypeAnim";
import QuizMain from "./QuizMain";
import Logo from "./Logo";

export default function StartQuiz() {
    const [next, setNext] = React.useState(false)

    function handleClick() {
        setNext(true)
    }


    return (
        <div>
            {
                next ?
                <QuizMain/>
                :
                <div 
                    className="start-quiz" 
                    style={{background: `url('${process.env.PUBLIC_URL}/images/launch.png')`,
                    backgroundPosition: "top center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"}}
                >
                    <div className="logo-box">
                        <Logo/>
                    </div>

                    <div className="main-box">
                        <div className="mission-description">
                            <p>Answer questions to complete the mission</p>
                            <p className="main-mission">Your mission is to find the first galaxies that formed in the early universe and peer through dusty clouds to see stars forming planetary systems.</p>
                        </div>

                        <button className="play-btn" onClick={handleClick}>
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

            }
        </div>
    )
}