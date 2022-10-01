import React from "react";
import TypeAnim from "./TypeAnim";
import missions from "../datas/missions";
import factsData from "../datas/factsData";
import '../styles/Question.css';

export default function Question() {
    const [count, setCount] = React.useState(0)
    let mission = missions[count]
    const rndInt = Math.floor(Math.random() * (factsData.length-1)) + 1
    let elements = factsData[rndInt].answers.map(answer => <button className="play-btn">{answer.description.replace('.', '')}</button>)
    return (
        <div className="question-box">
            <TypeAnim thinText='Mission: ' boldText={mission} />
            <div className="main-box">
                <p className="question">
                    {factsData[rndInt].question}
                </p>

                <div className="answers-box">
                    {elements}
                </div>
                <p className="onegate">powered by <span>ONEGATE</span></p>
            </div>

        </div>
    )
}