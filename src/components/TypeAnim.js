import React from "react";
import { TypeAnimation } from 'react-type-animation';

export default function TypeAnim(props) {
    const [show, setShow] = React.useState(false)

    React.useEffect(() => {
        setTimeout(() => {
            setShow(true)
        }, 1500)
    },[])

    return (
        <div className="anim-text">
            <TypeAnimation
                sequence={[
                    props.thinText,
                    1500
                ]}
                wrapper="div"
                cursor={false}
                repeat={Infinity}
                style={{ fontSize: '16px', color: '#767676', fontWeight: "500", fontFamily: 'Chakra Petch', display: 'inline' }}
            />

            {show ?

                <TypeAnimation
                    sequence={[
                        props.boldText,
                        1500
                    ]}
                    wrapper="div"
                    cursor={false}
                    repeat={Infinity}
                    style={{ fontSize: '16px', color: 'white', fontWeight: "600", fontFamily: 'Chakra Petch', display: 'inline' }}
                />
                :
                <div></div>
            
            }

        </div>
    )
}