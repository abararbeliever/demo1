import React, {useState} from 'react';

export default function TextForm(props) {
    const [text,setText]=useState("place holder text");
    let clickhandle=()=>{
        console.log("change was done " + text);
        let newtext=text.toUpperCase();
       setText(newtext);
    }
    let changehandle=(bos)=> 
    {
        console.log("change");
        setText(bos.target.value);
    }
    let clickhandledown=()=> {
        console.log("change was done " + text);
        let newtext=text.toLowerCase();
       setText(newtext);
    }
    let cleartext=()=> {
        console.log("change was done " + text);
        let newtext=('');
       setText(newtext);
    }
    let handlecopy=()=>
    {
        let copytext=document.getElementById('mybox');
        copytext.select();
        navigator.clipboard.writeText(copytext.value);
    }
    const spacehandler=()=>
    {
        let newtext=text.split(/[ ]+/);
        setText(newtext.join(" "));
    }
   
  return (
   <>
    <div>
        <div className="container"> 
            <div className="mb-3"  >
            <h3 className='my-2'>{props.heading}</h3>
             <textarea className="form-control"  value={text}  id="mybox"  style={{backgroundColor : props.mode==='dark' ?'white':'dark',color:props.mode==='dark'?'white':'black'}} onChange={changehandle} rows="8"></textarea>
             <button type="button" className="btn btn-primary m-1" onClick={clickhandle} > TO UPPERCASE</button>
             <button type="button" className="btn btn-primary m-1" onClick={clickhandledown} > to lowercase</button>
             <button type="button" className="btn btn-primary m-1" onClick={cleartext} > Clear </button>
             <button type="button" className="btn btn-primary m-1" onClick={handlecopy} > Copy </button>
             <button type="button" className="btn btn-primary m-1" onClick={spacehandler} > Space handler </button>

        
            </div>
</div>
      
    </div>
    <div className="container">
            <h3 className='my-2'>Your text summary</h3>

            <p>{text.split(" ").length-1} number of words and {text.length} number of characters</p>
            <p>{text}</p>
            <p>{0.08 * text.split(" ").length} minutes to read</p>__
    </div>
    </>
  )
}
