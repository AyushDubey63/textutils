import React, { useState } from "react";
import "../assets/css/style.css";

export default function Textform(props) {
  const handleUpClick = () => {
    // console.log("upper case was clicked"+ text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to UppperCase","success");
  };
  const handleLowClick = () => {
    // console.log("upper case was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to LowerCase","success");
  };
  const handleClearClick = () => {
    // console.log("upper case was clicked"+ text);
    let newText = "";
    setText(newText);
    props.showAlert("Field is Cleared","success");
  };
  const handleOnChange = (event) => {
    // console.log("on change");
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter text here");

  return (
    <>
      <div className="container" style={{backgroundColor:props.mode===`dark`?`gray`:`white`}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            style={{backgroundColor:props.mode===`dark`?`grey`:`white`}}
          ></textarea>
        </div>
        <button className="b1 my-2 mx-2" onClick={handleUpClick}>Convert Uppercase</button>
        {/* <button className="btn btn-primary mx-2" onClick={handleUpClick}>
          Convert Uppercase
        </button> */}
        <button className="b1 my-2 mx-2" onClick={handleLowClick}>
          Convert Lowercase
        </button>
        <button className="b1 my-2 mx-2" onClick={handleClearClick}>
          Clear
        </button>
      </div>
      <div className="container my-2" style={{backgroundColor:props.mode===`dark`?`gray`:`white`}}>
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").length} words & {text.length} characters
        </p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
