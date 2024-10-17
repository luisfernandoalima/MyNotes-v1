const express = require("express");
const router = express.Router();

const Posts = require("../models/posts");

router.get("/", (req, res) => {
  Posts.findAll({ order: [["id", "DESC"]] })
    .then((posts) => {
      res.render("home", { css: "home.css", posts: posts });
    })
    .catch((err) => {
      res.send(err);
    });
});

router.get("/cad", (req, res) => {
  res.render("formCadastro", { css: "cad.css" });
});

router.post("/add", (req, res) => {
  Posts.create({
    titulo: req.body.titulo,
    conteudo: req.body.conteudo,
  })
    .then(() => {
      res.redirect("/");
    })
    .catch((err) => {
      res.send(err);
    });
});

module.exports = router;
