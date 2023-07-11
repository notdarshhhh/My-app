import React, {useState} from 'react'


export default function TextForm(props) {
  
    function handleUpClick(){
        console.log("Hello");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to upper case","success");
    }

    const handleLowClick=()=>{
      let newText= text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to lower case","success");
    }

    const handleClear=()=>{
      let newText="";
      setText(newText);
      props.showAlert("Text cleared","success");
    }

    const handleReplace=()=>{
      let find=document.getElementById("find").value;
      
      let replace=document.getElementById('replace').value;

      setText(text.replaceAll(find,replace));
      props.showAlert("Text replaced","success");
    }

    function handleOnChange(event){
        console.log("On change");
        setText(event.target.value);
    }
    const [text,setText]=useState("Enter Text here");
  return (
    <>
    
    <div className='container'  style={{color:props.mode === "dark" ? "white" : "black"}}>
        <h1>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" value={text} onChange={handleOnChange} style={{background:props.mode === "dark" ? "grey" : "white",color:props.mode === "dark" ? "white" : "black"}}></textarea>

    <button className="btn btn-primary mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
    <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
    <button className="btn btn-primary mx-2" onClick={handleClear}>Clear Text</button>

    <br />
    <br />
    <input type="text" id='find' />
    <input type="text" id='replace' />
    <button className="btn btn-primary mx-2" onClick={handleReplace}>Replace Text</button>
   
  </div>
  </div>

  <div className="container" style={{color:props.mode === "dark" ? "white" : "black"}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(" ").length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").length} Minutes read</p>

    <p>Preview</p>
    <p>{text.length>0?text:"Enter text to preview"}</p>
  </div>
  </>
  )
}
