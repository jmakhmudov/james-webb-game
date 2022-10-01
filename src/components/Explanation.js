import React from "react";
import '../styles/Question.css';

export default function Explanation(props) {
    
    return (
        <div className="explanation-box">
            <div className="main-box">
                <p className="question">
                    {props.explanation}
                </p>

                <button className="play-btn" style={{marginTop: "25px"}}>
                    Next
                </button>
            </div>
        </div>
    )
}