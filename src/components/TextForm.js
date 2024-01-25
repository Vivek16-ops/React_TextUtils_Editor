import React, { useState } from 'react'

export default function TextForm(props) {
    const [text, setText] = useState("")
    // text = "Changing the text" //Wrong way to change the variable
    // setText("Text Variable is changed") //Right way to change the text

    let changetoUpper = () => {
        console.log("UpperCase Function Invoked User Entered: " + text)
        // let newText = text.toUpperCase();
        setText(text.toUpperCase())
        props.showAlert("Text Converted Into Upper Case","success")
    }
    
    let changetoLower = () => {
        console.log("LowerCase Function invoked User Entered: " + text)
        setText(text.toLowerCase())
        props.showAlert("Text Converted Into Lower Case","success")
    }
    
    let clearText = () => {
        console.log("Clear Function Invoked");
        setText("");
        props.showAlert("All text has been cleared","danger")
    }
    
    let reverseWord = () => {
        console.log("Reverse Function Initiated")
        let newText = text.split(" ");
        let modifiedSentence = "";
        for (let i = newText.length - 1; i >= 0; i--) {
            modifiedSentence = modifiedSentence + newText[i] + " ";
        }
        setText(modifiedSentence)
        props.showAlert("Your Sentence has been revered","warning")
    }

    let copyText = () => {
        console.log("Copy Text Function Initiated")
        let ToCopyText = document.getElementById("myBox")
        ToCopyText.select();
        navigator.clipboard.writeText(ToCopyText.value)
        props.showAlert("Congrats text has been copied","success")

    }

    let changeHandler = (event) => {
        console.log("OnChange Handler Invoked")
        setText(event.target.value)
    }


    return (
        <>
            <div className='container my-3' style={{ color: props.mode === "dark" ? "white" : "black" }}>
                <h1 className='text-center text-bold text-decoration-underline'>{props.title}</h1>
                <div className="mb-3">
                    <textarea className="form-control text-bold py-2 px-3" value={text} onChange={changeHandler} id="myBox" rows="12" style={{ backgroundColor: props.mode === "dark" ? "gray" : "white", color:props.mode === "dark" ? "white" : "black" }}></textarea>
                </div>
                <div className="buttons d-flex gap-2">
                    <button onClick={changetoUpper} className="btn btn-success">UpperCase</button>
                    <button onClick={changetoLower} className="btn btn-primary">LowerCase</button>
                    <button onClick={reverseWord} className='btn btn-warning'>Reverse</button>
                    <button onClick={copyText} className='btn btn-info'>CopyToClipBoard</button>
                    <button onClick={clearText} className='btn btn-danger'>Clear</button>
                </div>
            </div>

            {/* Adding Some More logics also this is style of commenting in react js */}
            <div className="container my-3" style={{color:props.mode==="dark"?"white":"black"}}>
                <h2>Text Summary</h2>
                <p>{text.split(" ").length - 1} words and {text.length} character</p>
                <p>{0.008 * text.split(" ").length} minutes read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Enter the text in above box for previews"}</p>
            </div>
        </>
    )
}
