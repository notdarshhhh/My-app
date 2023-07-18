import React, {useState} from 'react'


export default function TextForm(props) {

    function handleUpClick(){
        console.log("Hello");
        let newText= text.toUpperCase();
        setText(newText);
        props.showAlerts("Converted to upper case","success");
    }

    const handleLowClick=()=>{
      let newText= text.toLowerCase();
      setText(newText);
      props.showAlerts("Converted to lower case","success");
    }

    const handleClear=()=>{
      let newText="";
      setText(newText);
      props.showAlerts("Text cleared","success");
    }

    const handleCopy=()=>{
      navigator.clipboard.writeText(text);
      props.showAlerts("Text copied","success");
    }

    const handleReplace=()=>{
      let find=document.getElementById("find").value;
      
      let replace=document.getElementById('replace').value;

      setText(text.replaceAll(find,replace));
      props.showAlerts("Text replaced","success");
    }

    function handleOnChange(event){
        console.log("On change");
        setText(event.target.value);
    }
    const [text,setText]=useState("Enter Text here");
  return (
    <>
    
    <div className='container'  style={{color:props.mode === "dark" ? "white" : "black"}}>
        <h1 className='mb-2'>{props.heading}</h1>
  <div className="mb-3">
    <textarea className="form-control" id="exampleFormControlTextarea1" rows="7" value={text} onChange={handleOnChange} style={{background:props.mode === "dark" ? "#13466e" : "white",color:props.mode === "dark" ? "white" : "black"}}></textarea>

    <button disabled={text.length===0} className={`btn ${document.body.className==="bg-primary"?"btn-danger":"btn-primary"} mx-2 my-2`} onClick={handleUpClick}>Convert to Uppercase</button>
    <button disabled={text.length===0}  className={`btn ${document.body.className==="bg-primary"?"btn-danger":"btn-primary"} mx-2 my-2`} onClick={handleLowClick}>Convert to Lowercase</button>
    <button disabled={text.length===0}  className={`btn ${document.body.className==="bg-primary"?"btn-danger":"btn-primary"} mx-2 my-2`} onClick={handleClear}>Clear Text</button>

    <button disabled={text.length===0}  className={`btn ${document.body.className==="bg-primary"?"btn-danger":"btn-primary"} mx-2 my-2`} onClick={handleCopy}>Copy Text</button>

    <br />
    <br />
    <input type="text" id='find' className='mx-2 my-2' />
    <input type="text" id='replace' className='mx-2 my-2' />
    <button disabled={text.length===0} className={`btn ${document.body.className==="bg-primary"?"btn-danger":"btn-primary"} mx-2 my-2`}onClick={handleReplace}>Replace Text</button>
   
  </div>
  </div>

  <div className="container" style={{color:props.mode === "dark" ? "white" : "black"}}>
    <h1>Your Text Summary</h1>
    <p>{text.split(/\s+/).filter((element)=>{
return element.length!==0
    }).length} words and {text.length} characters</p>
    <p>{0.008*text.split(" ").filter((element)=>{
return element.length!==0
    }).length} Minutes read</p>

    <p>Preview</p>
    <p>{text.length>0?text:"Nothing to preview"}</p>
  </div>
  </>
  )
  }
