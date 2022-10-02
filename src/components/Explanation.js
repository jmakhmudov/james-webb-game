import React from "react";
import '../styles/Question.css';
import factsData from "../datas/factsData";

export default function Explanation(props) {
    let res
    console.log(props.data.corr)
    res = props.data.corr ? "Correct" : "Incorrect"
    
    return (
        <div className="explanation-box">
            <div className="main-box">
                <p style={{marginTop: '20px'}}>{res} answer!</p>
                <p className="question">
                    {props.data.explanation}
                </p>

                <button className="play-btn" onClick={props.handleClick} style={{marginTop: "25px"}}>
                    Next
                </button>
            </div>
        </div>
    )
}