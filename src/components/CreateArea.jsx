import React, { useState } from "react";

function CreateArea(props) {
  const [newNote, setNewNote] = useState({
    title: "",
    content: ""
  });

  function inputNote(event) {
    const { value, name } = event.target;

    setNewNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(newNote);
    setNewNote({ title: "", content: "" });

    event.preventDefault();
  }

  return (
    <div>
      <form>
        <input
          onChange={inputNote}
          name="title"
          placeholder="Title"
          value={newNote.title}
        />
        <textarea
          onChange={inputNote}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={newNote.content}
        />
        <button onClick={submitNote}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
