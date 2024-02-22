import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

function Read() {
  const [absence, setAbsence] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3003/absence/all")
      .then((response) => {
        setAbsence(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    
    <div>
      <h1>Liste des absence</h1>
      <table>
        <thead>
          <tr>
            <th>Nom</th>
            <th>Prenom</th>
            <th>Date</th>
            <th>Hrs</th>
            <th>Eleve ID</th>
          </tr>
        </thead>
        <tbody>
          {absence ?
            absence.map((absence, index) => (
            <tr key={index}>
              <td>{absence.nom}</td>
              <td>{absence.prenom}</td>
              <td>{absence.date}</td>
              <td>{absence.heures}</td>
              <td>{absence.id}</td>
              <td> <Link to="/Upt" state={{ 
                eleves_id: absence.id,
                nom:absence.nom,
                prenom: absence.prenom,
                date: absence.date,
                heures: absence.heures
               }}>modifier</Link></td>
              <td> <Link to="/Sup" >supprimer</Link></td>
            </tr>
          ))
        : null}
          <Link to="/Creer" >Create absence</Link>
        </tbody>
      </table>
    </div>
  );
}

export default Read;
