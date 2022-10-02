import React from "react";
import '../styles/Header.css';
import TypeAnim from "./TypeAnim";
import Logo from "./Logo";


export default function Header() {
    const [statBar, setStatBar] = React.useState([])
    let temp = []

    statusBar()
    function statusBar() {
        for (let i = 1; i < 9; i++) {
            if(i!=8){
                temp.push(<div className="circle"><img src={process.env.PUBLIC_URL + `/images/statBar/${i}.png`} alt="" /></div>)
                temp.push(<hr/>)
            }
            else {
                temp.push(<div className="circle"><img src={process.env.PUBLIC_URL + `/images/statBar/${i}.png`} alt="" /></div>)
            }
        }

    }

    return (
        <div className="header">
            <Logo/>
            <div className="roadmap">
                {temp}
            </div>
            <TypeAnim thinText='Destination: ' boldText='Lagrange point L2' />
        </div>
    )
}