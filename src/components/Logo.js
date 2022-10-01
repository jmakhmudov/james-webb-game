import React from "react";
import '../styles/Logo.css';

export default function Logo() {
    return (
        <div className="logo">
            <img className="logo-img" src={process.env.PUBLIC_URL + "/images/logo.png"} alt="" />
            <p>Webb Journey</p>
        </div>
    )
}