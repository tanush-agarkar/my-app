import React, { useState } from "react";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper Case", "success");
  };

  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower Case", "success");
  };

  const WhiteSpace = () => {
    let updated_text = text.replace(/\s/g, "");
    setText(updated_text);
    props.showAlert("Removed White Spaces", "success");
  };

  const [text, setText] = useState("");
  return (
    <>
      <div
        className="container "
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <label for="myBox" class="form-label">
            Example textarea
          </label>
          <textarea
            class="form-control"
            value={text}
            id="myBox"
            rows="8"
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "grey" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>

          <button className="btn btn-primary mx-2" onClick={handleUpClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={handleLoClick}>
            Convert to Uppercase
          </button>
          <button className="btn btn-primary mx-2" onClick={WhiteSpace}>
            Remove White space
          </button>
        </div>
      </div>

      <div
        className="container"
        style={{
          color: props.mode === "dark" ? "white" : "#042743",
        }}
      >
        <h1>Your Text summery</h1>
        {/* <p>
          {text.split(" ").length - 1} words and {text.length} character
        </p> */}
        <p>
          {text.split(" ").length > 1 ? text.split(" ").length - 1 : 0} words
          and {text.length} charecters{" "}
        </p>
        <p>
          {text.trim() === "" ? 0 : text.match(/\S+/g).length} words and{" "}
          {text.replace(/\s+/g, "").length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}
