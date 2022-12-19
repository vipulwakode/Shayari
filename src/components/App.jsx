import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);
  function addNote(Note) {
    setNotes((prevNote) => {
      return [...prevNote, Note];
    });
  }
  function deleteNote(id){
    setNotes((prevNote) => {
      return prevNote.filter((item,index)=>{
        return index !== id;
      })
    })
  }
  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {  notes.map((note,index) => {
         return <Note onDelete={deleteNote} key={index} noteId={index} title={note.title} content={note.content} />;
         })
      }

      <Footer />
    </div>
  );
}

export default App;
