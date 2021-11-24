import React from "react";

function Note(props) {
  function hundleDeleteClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note" style={{ backgroundColor: "#6D8299" }}>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={hundleDeleteClick}>Delete</button>
    </div>
  );
}
export default Note;
