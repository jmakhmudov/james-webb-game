import React from "react";
import '../styles/QuizMain.css';
import Header from "./Header";
import Explanation from "./Explanation";
import Question from "./Question";
import factsData from "../datas/factsData";
import missions from "../datas/missions";


export default function QuizMain() {
    const [next, setNext] = React.useState(false)
    let ques = []
    const [count, setCount] = React.useState(0)
    const [data, setData] = React.useState({
        corr: false,
        explanation: "",
    })
    let mission = missions[count]
    let rndInt = 0
    let elements

    insertQuestion()
    function insertQuestion() {
        do {
            rndInt = Math.floor(Math.random() * (factsData.length-1)) + 1 
        }
        while (ques.includes(rndInt))
        
        elements = factsData[rndInt].answers.map(answer => <button className="play-btn" onClick={handleClick}>{answer.description}</button>)
        ques.push(rndInt)
        console.log(ques)
    }

    function handleClick(event) {
       
        for (let i=0;i<factsData[rndInt].answers.length;i++) {
            if (factsData[rndInt].answers[i].description===event.target.textContent) {
                setData(prev => {
                    return {
                        corr: factsData[rndInt].answers[i].correct,
                        explanation: factsData[rndInt].explanation
                    }
                })
            }
        }
        setNext(true)
    }

    return (
        <div className="quiz-main" style={{background: `url('${process.env.PUBLIC_URL}/images/bckg3.png')`,
        backgroundPosition: "bottom center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"}}>

            <Header/>
            {
                next ?
                <Explanation correct={data.corr} explanation={data.explanation} />
                :
                <Question 
                    handleClick={handleClick}
                    elements={elements} 
                    rndInt={rndInt}
                    mission={mission}
                />

            }
            <p className="onegate">powered by <span>ONEGATE</span></p>
        </div>
    )
}