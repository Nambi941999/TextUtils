import React, {useState} from 'react'

export default function TextForm(props) {

    const [text,setText] = useState("");
    // text = "hdshjg"; wrong way to change the vlaue of text
    // setText("here"); correct way to change the text;

    const  handleUpChange = () =>{
        console.log("Uppercase is clicked "+text);
        let upperText = text.toUpperCase();
        setText(upperText);
        props.showAlert("UpperCase Converted ","success");
    }
    const handleOnChange = (event) => {
        console.log("onChanged");
        setText(event.target.value);
    }

    const handleLoChange = () => {
        let lowerText = text.toLowerCase();
        setText(lowerText);
        props.showAlert("LowerCase Converted ","success");

    }

    const handleClearText = () => {
        let clearText = '';
        setText(clearText);
        props.showAlert("TextCleared","success");

    }

    const handleCopy = () => {
       var text = document.getElementById("myBox")
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copyied to clipboard ","success");

    }

    let setStyle = {
        color: props.mode === 'dark'?'White':'black',
        backgroundColor: props.mode === 'light'?'white':'grey'
    }

    

    return (
        <>
        
        <div className='container' style={{color: props.mode !=='light'?'#6d6d6e':'white'}}>
            <h1>{props.heading}</h1> 
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'#13466e':'white', color: props.mode ==='dark'?'white':'#042743'}} id="myBox" rows="8"></textarea>
            </div>                                                                                                                                                                 
            <button disabled={text.length===0} className="button btn btn btn-primary mx-2 my-2" onClick={handleUpChange}>Convert To Uppercase</button>
            <button disabled={text.length===0} className="button btn btn btn-primary mx-2 my-2" onClick={handleLoChange}>Convert To LowerCase</button>
            <button disabled={text.length===0} className="button btn btn btn-primary mx-2 my-2" onClick={handleClearText}>Clear Text</button>
            <button disabled={text.length===0} className="button btn btn btn-primary mx-2 my-2" onClick={handleCopy}>Copy Text</button>

        </div>

        <div className="container my-3" style={{color: props.mode !=='light'?'#6d6d6e':'white'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length !==0}).length}words and {text.length} characters</p>
            <p>{0.008 * text.split("").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:'Enter Your Text to Preview'}</p>
        </div>

        </>
    )
}
