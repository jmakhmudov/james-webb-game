import React from "react";
import '../styles/StartMission.css';
import { TypeAnimation } from 'react-type-animation';

export default function StartMission() {

    return (
        <div className="start-mission" style={{
            background: `url('${process.env.PUBLIC_URL}/images/bc23.png')`,
            backgroundPosition: "bottom center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"}}>
            <p className="start-btn">START MISSION</p>
            <p className="onegate">powered by <span>ONEGATE</span></p>
        </div>
    )
}