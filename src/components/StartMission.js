import React from "react";
import '../styles/StartMission.css';
import StartQuiz from "./StartQuiz";

export default function StartMission() {
    const [showStart, setShowStart] = React.useState(false)

    function handleClick() {
        setShowStart(true)
    }

    return (
        <div>
            {showStart ?
                <StartQuiz/>
                :
                <div className="start-mission" style={{
                    background: `url('${process.env.PUBLIC_URL}/images/bc23.png')`,
                    backgroundPosition: "bottom center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover"}}>
                    <p className="start-btn" onClick={handleClick}>START MISSION</p>
                    <p className="onegate">powered by <span>ONEGATE</span></p>
                </div>
            }
        </div>
    )
}