const db = require("../config/database");

exports.createContact = async (req, res) => {
    const nome = req.body.nome;
    const celular = req.body.celular;
    console.log(nome,celular)
    const { rows } = await db.query(
      "INSERT INTO contacts (nome, celular) VALUES ($1, $2)",
      [nome, celular]
    );
  
    res.status(201).send({
      message: "Contact added successfully!",
      body: {
        contact: { nome, celular }
      },
    });
  };