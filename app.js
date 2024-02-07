const express = require("express");
const app = express();
const cors = require("cors");
const port = 3000;
const bodyParser = require("body-parser");
const errorController = require("./controllers/errorController");
const weatherController = require("./controllers/weatherController");
const projets = require("./public/js/projects");

require("dotenv").config();

app.use(express.static("public"));
app.use(cors());
app.use("/", weatherController);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  res.render("accueil.ejs", { projets: projets });
});

// Autres routes

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

// Gestion des erreurs
app.use(function (req, res, next) {
  res.status(404).render("404.ejs");
});

app.use(errorController.logErrors);
app.use(errorController.get404);
