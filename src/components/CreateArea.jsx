import React, { useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';
function CreateArea(props) {
  const [isexpanded,setIsexpanded] = useState(false);
  const [note, setNote] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }
  function handleClick(event){
   event.preventDefault();
    props.onAdd(note);
    setNote({title:"",content:""});
  }
  function expand(){
    setIsexpanded(true);
  }
  return (
    <div>
      <form className="create-note">
        {
          isexpanded && (<input
          onChange={handleChange}
          value={note.title}
          name="title"
          placeholder="Shayar ki aawaz"
         />)
        }
        <textarea
          onChange={handleChange}
          onClick={expand}
          value={note.content}
          name="content"
          placeholder="Irshad..."
          rows={isexpanded ? 3 : 1}
        />
        <Zoom in={isexpanded}>
          <Fab onClick={handleClick}>
           <AddIcon/>
          </Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
