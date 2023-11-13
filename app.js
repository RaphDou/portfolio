const express = require('express');
const app = express();
const port = 3000;
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const errorController = require("./controllers/errorController");
const weatherController = require('./controllers/weatherController');

require('dotenv').config();

app.use('/', weatherController);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use(express.static('public'));

app.set('view engine', 'ejs');

// Route pour page accueil
app.get('/', function (req, res) {
  res.render('accueil.ejs');
});

app.get('/projet/:id', function (req, res) {
  const id = req.params.id;
  var projet = projets.find(p => p.id == id);
  if (projet) {
    res.render('pages/projet', { projet });
  } else {
    // Gérer le cas où aucun projet n'est trouvé pour l'ID donné.
    res.status(404).render('404.ejs');
  }
});

app.get('/contact', function (_req, res) {
  res.render('contact');
});

// Configuration du serveur SMTP pour Nodemailer
const mail_sender = 'your_email@example.com';

// Configuration serveur SMTP copié depuis Mailtrap
var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9d324a6591bd71",
    pass: "433f10fc2a1e69"
  }
});

// Fonction pour envoyer un courriel
const sendEmail = (title, message, recipient, boisson) => {
  const messageContent = `<p>${message}</p><p>Boisson préférée : ${boisson}</p>`;
  
  transport.sendMail({
    from: mail_sender,
    to: recipient,
    subject: title,
    html: messageContent
  }, function(err, info) {
    if (err) {
      console.log(err);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });
};

// Route pour traitement du formulaire de contact
app.post('/contact', function (req, res) {
  const nom = req.body.nom;
  const email = req.body.email;
  const message = req.body.message;
  const boisson = req.body.boisson; // Récupérer la boisson préférée

  sendEmail('Nouveau message de ' + nom, message, email, boisson);
  res.redirect('/');
});

app.use(function(req, res, next) {
  res.status(404).render('404.ejs');
});

// gestion des erreurs
app.use(errorController.logErrors);

// gestion des erreurs 404
app.use(errorController.get404);

