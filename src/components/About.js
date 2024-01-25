// Manually Setting the Dark and Light Mode

import React, { useState } from 'react'

export default function About() {

    const [mystyle, setMyStyle] = useState({
        background: "white",
        color: "black"
    });

    const [btnclass,setbtnclass] = useState("btn btn-dark my-3 mx-2")

    const [setText , textChange] = useState("Enable Dark Mode")

    const toggleStyle = () => {

        // Note: Generally we use triple equal to compare stuffs in React 
        if (mystyle.color === "black") {
            //changing About Style
            setMyStyle({
                background: "black",
                color: "white",
                border: "1px solid white",
            })

            //changing button appearence
            setbtnclass("btn btn-light my-3 mx-2")

            //changing button text
            textChange("Enable light Mode")
        }
        else {
            setMyStyle({
                background: "white",
                color: "black"
            })

            setbtnclass("btn btn-dark my-3 mx-2")

            textChange("Enable Dark Mode")
        }
    }

    return (
        <>
            <div className='container my-3'>
                <h1 className='text-center'>About Software</h1>
                <div className="accordion" id="accordionExample" style={mystyle}>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button style={mystyle} className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Careers
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                About
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button style={mystyle} className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Services
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={mystyle}>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <button onClick={toggleStyle} className={btnclass}>{setText}</button>
                </div>
            </div>
        </>
    )
}
