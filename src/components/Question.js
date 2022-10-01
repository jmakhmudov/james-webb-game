import React from "react";
import TypeAnim from "./TypeAnim";
import factsData from "../datas/factsData";
import '../styles/Question.css';

export default function Question(props) {

    return (
        <div className="question-box">
            <TypeAnim thinText='Mission: ' boldText={props.mission} />
            <div className="main-box">
                <p className="question">
                    {factsData[props.rndInt].question}
                </p>

                <div className="answers-box">
                    {props.elements}
                </div>
            </div>

        </div>
    )
}