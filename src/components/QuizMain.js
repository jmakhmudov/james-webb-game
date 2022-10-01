import React from "react";
import '../styles/QuizMain.css';
import Header from "./Header";
import Question from "./Question";

export default function QuizMain() {


    return (
        <div className="quiz-main" style={{background: `url('${process.env.PUBLIC_URL}/images/bckg3.png')`,
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"}}>
            <Header/>
            <Question/>
        </div>
    )
}