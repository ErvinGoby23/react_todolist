
const express = require("express");
const app = express();
app.use(express.json());
const mysql = require('mysql');
const cors = require('cors');
app.use(cors());

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'Viner23032004*',
    database : 'efrei_1'
})

connection.connect((err) => {
if (!err)
console.log('succéss');
else
console.log('erreur');
})

/*
c'est un crud de la table eleves
*/

/*
c'est une fonction read
*/

app.get("/eleves", (req, res)=>{
    connection.query("SELECT * FROM eleves;", (err,result)=>{
        if (err) return res.send(err)
        return res.json(result)
    })
})

app.get("/eleves/:id", (req, res)=>{
    connection.query("SELECT * FROM eleves WHERE id = '"+req.params.id+"'", (err,result)=>{
        if (err) return res.send(err)
        return res.json(result)
    })
})
/*<a
c'est une fonction create
*/
app.post("/eleves/add", (req, res)=>{
    connection.query("INSERT INTO eleves (id,prenom,nom,age,mail,num) VALUES ('"+req.body.id+"','"+req.body.prenom+"','"+req.body.nom+"','"+req.body.age+"','"+req.body.mail+"','"+req.body.num+"')" ,(err,result)=>{
        if (err) return res.send(err)
        return res.send("élève a été ajouté avec succès")
    })
})
/*
c'est une fonction update
*/
app.put("/eleves/update/:id", (req, res)=>{
    console.log(req.body);
    console.log(req.params)
    connection.query("UPDATE eleves SET prenom = '"+req.body.prenom+"', nom = '"+req.body.nom+"', age = '"+req.body.age+"', mail = '"+req.body.mail+"', num = '"+req.body.num+"' WHERE id = '"+parseInt(req.params.id)+"'", (err,result)=>{
        if (err) return res.send(err)
        return res.send("élève a été modifié avec succès")
    })
  })
/*
c'est une fonction delete
*/
  app.delete("/eleves/delete/:id", (req, res)=>{
    connection.query("DELETE FROM eleves WHERE id = '"+req.params.id+"'", (err,result)=>{
        if (err) return res.send(err)
        return res.send("élève a été supprimé avec succès")
    })
  })




/*
c'est un crud de la table bulletin
*/

/*
 Bulletins avec les noms et prenoms de la tables eleves jointure
*/

app.get("/bulletin/all", (req, res)=>{
    connection.query("SELECT e.id, e.nom, e.prenom, b.sujet, b.notes FROM eleves e INNER JOIN bulletin b ON  e.id = b.eleves_id;", (err,result)=>{
        if (err) return res.send(err)
        return res.json(result)
    })
})

/*
 Bulletins avec les noms et prenoms de la tables eleves par id jointure
*/




app.get("/bulletin/eleve/:id", (req, res)=>{
    connection.query("SELECT e.nom, e.prenom, b.sujet, b.notes FROM eleves e INNER JOIN bulletin b ON  e.id = b.eleves_id WHERE e.id = '"+req.params.id+"'", (err,result)=>{
        if (err) return res.send(err)
        return res.json(result)
    })
})

/*
c'est une fonction read
*/

app.get("/bulletin/:id", (req, res)=>{
    connection.query("SELECT * FROM bulletin WHERE id = '"+req.params.id+"'", (err,result)=>{
        if (err) return res.send(err)
        return res.json(result)
    })
})


app.get("/bulletin", (req, res)=>{
    connection.query("SELECT * from bulletin;", (err,result)=>{
        if (err) return res.send(err)
        return res.json(result)
    })
})

/*
c'est une fonction create
*/

app.post("/bulletin/add", (req, res)=>{
    connection.query("INSERT INTO bulletin (id,sujet,notes,eleves_id) VALUES ('"+req.body.id+"','"+req.body.sujet+"','"+req.body.notes+"','"+req.body.eleves_id+"')" ,(err,result)=>{
        if (err) return res.send(err)
        return res.send("bulletin a été ajouté avec succès")
    })
})

/*
c'est une fonction update
*/


app.put("/bulletin/update/:id", (req, res)=>{
    connection.query("UPDATE bulletin SET `sujet` = '"+req.body.sujet+"', `notes` = '"+req.body.notes+"', `eleves_id` = '"+req.body.eleves_id +"' WHERE `id` = '"+req.params.id+"'", (err,result)=>{
        if (err) return res.send(err)
        return res.send("bulletin a été modifié avec succès")
    })
  })

/*
c'est une fonction delete
*/


  app.delete("/bulletin/delete/:id", (req, res)=>{
    connection.query("DELETE FROM bulletin WHERE id = '"+req.params.id+"'", (err,result)=>{
        if (err) return res.send(err)
        return res.send("bulletin a été supprimé avec succès")
    })
  })




/*
c'est un crud de la table absence 
*/

 /*
 absence avec les noms et prenoms de la tables eleves jointure
*/


app.get("/absence/all", (req, res)=>{
    connection.query("SELECT e.nom, e.prenom, a.date, a.heures, e.id FROM eleves e INNER JOIN absence a ON  e.id = a.eleves_id;", (err,result)=>{
        if (err) return res.send(err)
        return res.json(result)
    })
})

/*
 absence avec les noms et prenoms de la tables eleves par id jointure
*/


app.get("/absence/eleve/:id", (req, res)=>{
    connection.query("SELECT e.nom, e.prenom, a.date, a.heures FROM eleves e INNER JOIN absence a ON  e.id = a.eleves_id WHERE e.id = '"+req.params.id+"'", (err,result)=>{
        if (err) return res.send(err)
        return res.json(result)
    })
})
 
/*
c'est une fonction read
*/


app.get("/absence", (req, res)=>{
    connection.query("SELECT * from absence;", (err,result)=>{
        if (err) return res.send(err)
        return res.json(result)
    })
})

app.get("/absence/:id", (req, res)=>{
    connection.query("SELECT * FROM absence WHERE id = '"+req.params.id+"'", (err,result)=>{
        if (err) return res.send(err)
        return res.json(result)
    })
})

/*
c'est une fonction create
*/


app.post("/absence/add", (req, res)=>{
    connection.query("INSERT INTO absence (id,date,heures,eleves_id) VALUES ('"+req.body.id+"','"+req.body.date+"','"+req.body.heures+"','"+req.body.eleves_id+"')" ,(err,result)=>{
        if (err) return res.send(err)
        return res.send("absence a été ajouté avec succès")
    })
})



/*
c'est une fonction update
*/

app.put("/absence/update/:id", (req, res)=>{
    console.log(req.body);
    console.log(req.params)
    connection.query("UPDATE absence SET date = '"+req.body.date+"', heures = '"+req.body.heures+"', eleves_id = '"+req.body.eleves_id +"' WHERE id = '"+req.params.id+"'", (err,result)=>{
        if (err) return res.send(err)
        return res.send("absence a été modifié avec succès")
    })
  })


  
/*
c'est une fonction delete
*/


  app.delete("/absence/delete/:id", (req, res)=>{
    connection.query("DELETE FROM absence WHERE id = '"+req.params.id+"'", (err,result)=>{
        if (err) return res.send(err)
        return res.send("absence a été supprimé avec succès")
    })
  })



app.listen(3003)