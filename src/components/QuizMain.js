import React from "react";
import '../styles/QuizMain.css';
import Header from "./Header";
import Explanation from "./Explanation";
import Question from "./Question";
import factsData from "../datas/factsData";
import missions from "../datas/missions";


export default function QuizMain() {
    const [next, setNext] = React.useState(false)
    const [elements, setElements] = React.useState([])
    const [ques, setQues] = React.useState([])
    const [count, setCount] = React.useState(0)
    const [data, setData] = React.useState({
        corr: false,
        explanation: "",
        img: 3,
        insert: true,
        rndInt: 0
    })
    let mission = missions[count]
    let intNum

    if (data.insert) {
        insertQuestion()
    }

    function insertQuestion() {
        
        do {
            
            intNum = Math.floor(Math.random() * (factsData.length-1)) + 1
            console.log(intNum)
        }
        while (ques.includes(intNum))

        
        
        setElements(factsData[intNum].answers.map(answer => <button className="play-btn" onClick={handleClick}>{answer.description}</button>))
        
        setData(prev=> {
            return {
                ...prev,
                rndInt: intNum}
        })
        console.log(data)
        console.log(intNum)
        setQues(prev => [...prev, intNum])
        setData(prev => {
            return {
                ...prev,
                insert: false
            }
        })
        console.log(ques)
    }

    function handleClick(event) {
       console.log('click')
       console.log(event.target.textContent)
       console.log(factsData[intNum].question)
        for (let i=0;i<factsData[intNum].answers.length;i++) {
            if (factsData[intNum].answers[i].description===event.target.textContent) {
                console.log("corr"+factsData[intNum].answers[i].correct)
                setData(prev => {
                    return {
                        corr: factsData[intNum].answers[i].correct,
                        explanation: factsData[intNum].explanation
                    }
                })
            }
        }
        setNext(true)
    }

    function nextQuestion() {
        insertQuestion()
        setNext(false)
    }

    return (
        <div className="quiz-main" style={{background: `url('${process.env.PUBLIC_URL}/images/bckg/${Math.floor(Math.random() * (5 - 1 + 1) + 1)}.png')`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"}}>

            <Header/>
            {
                next ?
                <Explanation data={data} handleClick={nextQuestion}/>
                :
                <Question 
                    handleClick={handleClick}
                    elements={elements} 
                    rndInt={data.rndInt}
                    mission={mission}
                />

            }
            <p className="onegate">powered by <span>ONEGATE</span></p>
        </div>
    )
}