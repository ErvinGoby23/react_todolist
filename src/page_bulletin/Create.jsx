import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateForm = () => {
  const [eleves, seteleves] = useState({
    id: "",
    sujet: "",
    notes: "",
    eleves_id: ""
  });

  const [succes, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    seteleves((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    axios
      .post("http://localhost:3003/bulletin/add", eleves)
      .then((response) => {
        setSuccess(true);
        setError(false);
      })
      .catch((error) => {
        console.log(error);
        setSuccess(false);
        setError(true);
      });
  };

  return (
    <div>
      <h2>Ajouter un bulletin</h2>
      {succes && <p>bulletin a été ajouté avec succès.</p>}
      {error && <p>Une erreur est survenue. Veuillez réessayer.</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID :</label>
        <input type="text" id="id" name="id" value={eleves.id} onChange={handleChange} />
        <label htmlFor="sujet">Sujet :</label>
        <input type="text" id="sujet" name="sujet" value={eleves.sujet} onChange={handleChange} />
        <label htmlFor="notes">Notes :</label>
        <input type="text" id="notes" name="notes" value={eleves.notes} onChange={handleChange} />
        <label htmlFor="eleves_id">eleves_id :</label>
        <input type="text" id="eleves_id" name="eleves_id" value={eleves.eleves_id} onChange={handleChange} />
        <button type="submit">Ajouter</button>
      </form>
      <Link to="/Read" >Read</Link>
      <br></br>
      <Link to="/Creer" >Create absence</Link>      
      <br></br>
      <Link to="/" >create eleve</Link>
    </div>
  );
};

export default CreateForm;