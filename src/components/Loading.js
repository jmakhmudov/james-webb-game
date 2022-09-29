import React from "react";
import CircleLoader from "react-spinners/CircleLoader";
import { TypeAnimation } from 'react-type-animation';
import '../styles/Loading.css';

export default function Loading() {

    const loadingHtml = (
        <div className='preloader'>
            <CircleLoader color="#ffffff" />
            <TypeAnimation
            sequence={[
                "Flying through interstellar space",
                5000
            ]}
            wrapper="div"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: '2vh', color: 'white', marginTop: "25px", fontWeight: "300" }}
            />
        </div>)


    return (
        <div className="preloader-box">
            {loadingHtml}
        </div>
    )
}