import { useEffect, useState } from 'react';

import { useLocation } from "react-router-dom";

function UpdateForm(props) {
  const location = useLocation();

  const [id, setId] = useState("");
  const [date, setDate] = useState("");
  const [heures, setHeures] = useState("");
  const [eleves_id, setEleves_id] = useState("");
  useEffect(()=>{
    console.log(location.state, " props");
    setId(location.state.eleves_id);
    setDate(location.state.date);
    setHeures(location.state.heures);
    setEleves_id(location.state.eleves_id);
        },[])
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3003/absence/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          'date': date, 
          'heures':heures, 
          'eleves_id': eleves_id 
        }),
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
        Date:
        <input
          type="text"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </label>
      <label>
        Heures:
        <input
          type="text"
          value={heures}
          onChange={(e) => setHeures(e.target.value)}
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