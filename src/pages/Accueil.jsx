import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const CreateForm = () => {
  const [eleves, seteleves] = useState({
    id: "",
    prenom: "",
    nom: "",
    age: "",
    mail: "",
    num: ""
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
      .post("http://localhost:3003/eleves/add", eleves)
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
      <h2>Ajouter un élève</h2>
      {succes && <p>L'élève a été ajouté avec succès.</p>}
      {error && <p>Une erreur est survenue. Veuillez réessayer.</p>}
      <form onSubmit={handleSubmit}>
        <label htmlFor="id">ID :</label>
        <input type="text" id="id" name="id" value={eleves.id} onChange={handleChange} />
        <label htmlFor="prenom">Prénom :</label>
        <input type="text" id="prenom" name="prenom" value={eleves.prenom} onChange={handleChange} />
        <label htmlFor="nom">Nom :</label>
        <input type="text" id="nom" name="nom" value={eleves.nom} onChange={handleChange} />
        <label htmlFor="age">Âge :</label>
        <input type="text" id="age" name="age" value={eleves.age} onChange={handleChange} />
        <label htmlFor="mail">E-mail :</label>
        <input type="text" id="mail" name="mail" value={eleves.mail} onChange={handleChange} />
        <label htmlFor="num">Numéro de téléphone :</label>
        <input type="text" id="num" name="num" value={eleves.num} onChange={handleChange} />
        <button type="submit">Ajouter</button>
      </form>
      <Link to="/Tables" >Tables</Link>
      <br></br>
      <Link to="/Create" >Create bulletin</Link>
      <br></br>
      <Link to="/Creer" >Create absence</Link>
    </div>
  );
};

export default CreateForm;