import React from "react";
import '../styles/Header.css';
import TypeAnim from "./TypeAnim";
import Logo from "./Logo";


export default function Header() {

    return (
        <div className="header">
            <Logo/>
            <TypeAnim thinText='Destination: ' boldText='Lagrange point L2' />
        </div>
    )
}