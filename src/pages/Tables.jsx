import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Read() {
  const [eleves, setEleves] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3003/eleves")
      .then((response) => {
        setEleves(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <h1>Liste des élèves</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Âge</th>
            <th>Mail</th>
            <th>Numéro</th>
          </tr>
        </thead>
        <tbody>
          {eleves ?
            eleves.map((eleves, index) => (
            <tr key={index}>
              <td>{eleves.id}</td>
              <td>{eleves.prenom}</td>
              <td>{eleves.nom}</td>
              <td>{eleves.age}</td>
              <td>{eleves.mail}</td>
              <td>{eleves.num}</td>
              <td> <Link to="/Update" state={{ 
                id:eleves.id, 
                nom:eleves.nom,
                prenom: eleves.prenom,
                age: eleves.age,
                mail: eleves.mail,
                num: eleves.num
               }}>modifier</Link></td>
              <td> <Link to="/Supp" >supprimer</Link></td>
            </tr>
            
          ))
        : null}
          <Link to="/" >Create eleves</Link>
        </tbody>
      </table>
    </div>
  );
}

export default Read;
