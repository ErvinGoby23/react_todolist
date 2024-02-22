import { useEffect, useState } from 'react';

import { useLocation } from "react-router-dom";

function UpdateForm(props) {

  const location = useLocation();
  
  const [id, setId] = useState("");
  const [sujet, setSujet] = useState("");
  const [notes, setNotes] = useState("");
  const [eleves_id, setEleves_id] = useState("");
  useEffect(()=>{
    console.log(location.state, " props");
    setId(location.state.id);
    setSujet(location.state.sujet);
    setNotes(location.state.notes);
    setEleves_id(location.state.eleves_id);
        },[])
  const handleUpdate = async (e) => {
    
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3003/bulletin/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          'id':id, 
          'sujet': sujet, 
          'notes':notes, 
          'eleves_id': eleves_id }),
      });
      const data = await response.json();
      console.log(data);
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <form onSubmit={handleUpdate}>
      <label>
        Sujet:
        <input
          type="text"
          value={sujet}
          onChange={(e) => setSujet(e.target.value)}
        />
      </label>
      <label>
        Notes:
        <input
          type="text"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </label>
      <label>
        Eleves id:
        <input
          type="number"
          value={eleves_id}
          onChange={(e) => setEleves_id(e.target.value)}
        />
      </label>
      <button type="submit">Modifier</button>
    </form>
  );
}

export default UpdateForm;