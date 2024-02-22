import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Read() {
  const [bulletin, setBulletin] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3003/bulletin/all")
      .then((response) => {
        setBulletin(response.data);
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
            <th>Nom</th>
            <th>Prenom</th>
            <th>Sujet</th>
            <th>Notes</th>
            <th>Eleve ID</th>
          </tr>
        </thead>
        <tbody>
    
          {bulletin ?
          bulletin.map((bulletin, index) => (
            <tr key={index}>
              <td>{bulletin.nom}</td>
              <td>{bulletin.prenom}</td>
              <td>{bulletin.sujet}</td>
              <td>{bulletin.notes}</td>
              <td>{bulletin.id}</td>
              <td> <Link to="/Modifi" state={{ 
                id:bulletin.id, 
                nom:bulletin.nom,
                prenom: bulletin.prenom,
                sujet: bulletin.sujet,
                notes: bulletin.notes,
                eleves_id: bulletin.id
               }}>modifie
              r</Link></td>
              <td> <Link to="/Delt" >supprimer</Link></td>
            </tr>
          ))
        : null}
          <Link to="/Create" >Create bulletin</Link>
        </tbody>
      </table>
    </div>
  );
}

export default Read;
