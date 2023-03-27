import React, { useState } from "react";
import PropTypes from "prop-types";

export default function Textform(props) {
  const handleUpClick = () => {
    setText(text.toUpperCase());
  };

  const handleLowClick = () => {
    setText(text.toLowerCase());
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const handleClearText = (event) => {
    setText("");
  };

  const stringWithoutSpaces = () => {
    // Remove multiple spaces between words from a string
    const stringWithMultipleSpaces = text;
    const stringWithSingleSpaces = stringWithMultipleSpaces.replace(
      /\s+/g,
      " "
    );
    setText(stringWithSingleSpaces);
  };

  const handleCopyText = () => {
    const textToCopy = text;

    const tempTextarea = document.createElement("textarea");
    tempTextarea.value = textToCopy;

    document.body.appendChild(tempTextarea);

    document.execCommand("copy");

    document.body.removeChild(tempTextarea);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container">
        <div className="mb-3 my-4">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h3>{props.title}</h3>
          </label>
          <textarea
            value={text}
            onChange={handleOnChange}
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button onClick={handleUpClick} className="btn btn-primary mx-2 my-2">
          Convert to Uppercase
        </button>
        <button onClick={handleLowClick} className="btn btn-primary mx-2 my-2">
          Convert to Lowercase
        </button>
        <button onClick={handleClearText} className="btn btn-primary mx-2 my-2">
          Clear Text
        </button>
        <button onClick={handleCopyText} className="btn btn-primary mx-2 my-2">
          Copy Text
        </button>
        <button
          onClick={stringWithoutSpaces}
          className="btn btn-primary mx-2 my-2"
        >
          Remove Spaces
        </button>
      </div>
      <div className="container my-4">
        <h3>Your Text Summary</h3>
        <p>
          {text.trim() === "" ? 0 : text.match(/\S+/g).length} Words and{" "}
          {text.length} Characters
        </p>
      </div>
      <div className="container my-4">
        <h3>Preview</h3>
        <p>{text}</p>
      </div>
    </>
  );
}

Textform.protoTypes = {
  title: PropTypes.string.isRequired,
};

Textform.defaultProps = {
  title: "Set Heading Here",
};
