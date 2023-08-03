import React , {useState}from 'react'

const TextForm = (props) => {
  const handleUpClick = () =>{
    console.log("Uppercase was clicked" + text) ;
    let newText = text.toUpperCase() ;  
    setText(newText) ; 
    props.showAlert("Converted to uppercase","success") ; 
  } 

  const handleLowClick = () =>{
    console.log("Uppercase was clicked" + text) ;
    let newText = text.toLowerCase() ;  
    setText(newText) ; 
    props.showAlert("Converted to Lowercase","success") ; 
  } 
  const clearText = (event) =>{
    console.log(event.target.value) ;
    setText("") ; 
    props.showAlert("Text is cleared","success") ; 
  }  

  const handleCopy = () =>{
      var text = document.getElementById("mybox") ; 
      text.select() ; 
      navigator.clipboard.writeText(text.value) ;
      props.showAlert("Copied","success") ;  
  }
  
  const handleOnChange = (event) =>{
    console.log("On change") ; 
    setText(event.target.value) 
  }

  const [text , setText] = useState('') ; 
  return (
    <>
    <div className = "container" style = {{color : props.mode === 'dark' ? 'white' : '#042743'}}>

     
      <h1>{props.heading} </h1>
      <div classsName = "mb-3">
        <textarea className = "form-control" value = {text} style = {{backgroundColor : props.mode === 'dark' ? 'grey' : 'white' , color : props.mode === 'dark' ? 'white' : '#042743' }} onChange={handleOnChange} id="mybox" rows = "8"></textarea>     
      </div>
      
      <div className = "container my-3">
            <button className = "btn btn-primary mx-2" onClick={handleUpClick}>Convert to Upper case</button>
            <button className = "btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lower case</button>
            <button className = "btn btn-primary mx-2" onClick={clearText}>Clear text</button>
            <button className = "btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
      </div>
     </div>
   

     <div className = "container" my-3  style = {{color : props.mode === 'dark' ? 'white' : '#042743'}}>
          <h2>Your text summary</h2>
          <p>{text.split(" ").length-1} words and {text.length} characters</p>
          <p>{0.008 * text.split(" ").length} Minutes read</p>
          <h2>Preview</h2>
          <p>{text}</p>
     </div>


     </>
  )
}

export default TextForm
