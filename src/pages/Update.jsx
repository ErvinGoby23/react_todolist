import { useEffect, useState } from 'react';

import { useLocation } from "react-router-dom";
function UpdateForm(props) {
  const location = useLocation();

  const [id, setId] = useState("");
  const [prenom, setPrenom] = useState("");
  const [nom, setNom] = useState("");
  const [age, setAge] = useState("");
  const [mail, setMail] = useState("");
  const [num, setNum] = useState("");
  useEffect(()=>{
    console.log(location.state, " props");
    setId(location.state.id);
    setPrenom(location.state.prenom);
    setNom(location.state.nom);
    setAge(location.state.age);
    setMail(location.state.mail);
    setNum(location.state.num);
        },[])
  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://localhost:3003/eleves/update/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          'prenom': prenom,
          'nom': nom,
          'age': age,
          'mail': mail,
          'num': num 
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
        ID:
        <input
          type="text"
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
      </label>
      <label>
        Prenom:
        <input
          type="text"
          value={prenom}
          onChange={(e) => setPrenom(e.target.value)}
        />
      </label>
      <label>
        Nom:
        <input
          type="text"
          value={nom}
          onChange={(e) => setNom(e.target.value)}
        />
      </label>
      <label>
        Age:
        <input
          type="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </label>
      <label>
        Mail:
        <input
          type="text"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
        />
      </label>
      <label>
        Numéro:
        <input
          type="text"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </label>
      <button type="submit">Modifier</button>
    </form>
  );
}

export default UpdateForm;
