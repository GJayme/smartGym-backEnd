const express = require("express");

const server = express();

// plugin para o express poder receber json
server.use(express.json());

// variável membros
const members = ["Priscila", "Carmelita"];

// rota de todos os alunos
server.get("/members", (req, res) => {
  return res.json(members);
});

// rota de aluno por index
server.get("/members/:index", (req, res) => {
  const { index } = req.params;

  return res.json(members[index]);
});

// rota de cadastro de alunos
server.post("/members", (req, res) => {
  const { nome } = req.body;
  const { sobrenome } = req.body;
  const { email } = req.body;
  const { telefone } = req.body;

  members.push(nome);
  members.push(sobrenome);
  members.push(email);
  members.push(telefone);

  return res.json(members);
});

// rota de alteração de alunos
server.put("/members/:index", (req, res) => {
  const { index } = req.params;
  const { name } = req.body;

  members[index] = name;

  return res.json(members);
});

// rota deletar alunos
server.delete("/members/:index", (req, res) => {
  const { index } = req.params;

  members.splice(index, 1);

  return res.json(members);
});

server.listen(3000);
