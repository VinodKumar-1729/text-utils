import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = ()=>{
        //console.log("Uppercase was Clicked!" + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!","success");
    }
    const handleLoClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!","success");
    }
    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces have been removed!","success");
    }
    const handleCopy = () =>{
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Text copied successfully!","success");
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert("Text cleared successfully!","success");
    }
    const handleOnChange = (event) => {
        //console.log("OnChange");
        setText(event.target.value);
    }
    const [ text, setText ] = useState("");
    return (
        <>
        <div className='container' style={{backgroundColor : props.mode==='dark'?'#394050':'white',color: props.mode==='dark'?'white':'#00163e'}}>
            <div className="mob-3">
                <h2>{props.heading}</h2>
                <textarea className="form-control" id="myBox" value={text} placeholder='Type Something' style={{backgroundColor : props.mode==='dark'?'#394050':'white',color: props.mode==='dark'?'white':'#00163e'}} onChange={handleOnChange} cols="30" rows="10"></textarea>
                <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpClick} >Convert to Uppercase</button>
                <button disabled= {text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick} >Convert to Lowercase</button>
                <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick} >Clear Text</button>
                <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces} >Remove Extra Spaces</button>
                <button disabled= {text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy} >Copy Text</button>
            </div>
        </div>
        <div className="container my-3" style={{color: props.mode==='dark'?'white':'#00163e'}}>
            <h2>Your text Summary</h2>
            <p>your text contains <b> {text.split(/\s+/).filter((element) => {return element.length!==0}).length} words </b> and <b> {text.length} characters </b>.</p>
            <p> The above text can be read in 
                {0.008 * text.split(" ").filter((element) => {return element.length!==0}).length} Mins.
            </p>
            <h2>Preview</h2>
            <p>
                {text.length>0?text:"Enter something in the textbox to preview here!"}
            </p>
        </div>
        </>
    )
};
// style={{color: props.mode==='dark'?'white':'black'}}