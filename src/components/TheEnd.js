import React from "react";
import photos from "../datas/photos";
import TypeAnim from "./TypeAnim";
import '../styles/TheEnd.css';
import { TypeAnimation } from 'react-type-animation';

export default function TheEnd(props) {
    let intNum
    intNum = Math.floor(Math.random() * (photos.length-0)) + 0

    return (
        <div className="end-box">
            <div className="info-box">
                {props.incorr<3 ? <div><h1>{photos[intNum].name}</h1>
                <p className="description">{photos[intNum].description}</p>
                <div className="info">
                    <TypeAnim thinText='Release date: ' boldText={photos[intNum].date} />
                    <TypeAnim thinText='Distance: ' boldText={photos[intNum].distance} />
                </div></div> : <TypeAnimation
            sequence={[
                "YOU LOST CONNECTION....",
                1000,
                "YOU LOST CONNECTION..",
                50,
                "YOU LOST CONNECTION....",
                50,
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '32px', color: 'white', marginTop: "25px", fontWeight: "300", fontFamily: "Chakra Petch" }}
            />}
                <button className="play-btn" onClick={() => window.location.reload()}>Try Again</button>
            </div>

            {props.incorr<3 ? <img src={process.env.PUBLIC_URL + `/images/jameswebb/${photos[intNum].img}`}/>: <div></div>}
        </div>
    )
}