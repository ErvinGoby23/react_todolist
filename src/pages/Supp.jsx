import React, { useState } from 'react';
import axios from 'axios';

const DeleteForm = () => {
  const [id, setId] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.delete(`http://localhost:3003/eleves/delete/${id}`);
      alert("L'élève a été supprimé avec succès !");
    } catch (err) {
      console.error(err);
      alert(`Une erreur est survenue : ${err.message}`);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>ID :</label>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} required />
      <button>Supprimer</button>
    </form>
  );
};

export default DeleteForm;

