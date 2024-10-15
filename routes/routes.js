const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.render('home', {css: "home.css"})
});

router.get('/cad', (req, res) => {
  res.render('formCadastro', {css: "cad.css"})
})



module.exports = router;
