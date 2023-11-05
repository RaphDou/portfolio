const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();
const port = 3000;
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');

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

// Route pour page portfolio
app.get('/portfolio', function (req, res) {
  res.render('portfolio', { projets });
});

const projets = [
  {
    id: 1,
    titre: 'Jeu de mémoire',
    description: 'Projet de programmation JS en duo pour créer un jeu de mémoire, renforçant les compétences en résolution de problèmes et en travail d\'équipe.',
    image: '/images/cartes.jpg'
  },
  {
    id: 2,
    titre: 'Travail final Figma',
    description: 'Travail de conception graphique final réalisé en utilisant Figma pour créer une compagnie fictive. Expérience valorisante de conception, mettant en valeur les compétences en créativité et en design d\'interface utilisateur.',
    image: '/images/figma.jpg'
  },
  {
    id: 3,
    titre: 'Contrat d\'offre de service',
    description: 'Un travail en équipe de trois sur un projet fictif de contrat de prestation d\'offre de service, valorisant le développement de compétences clés en communication, négociation et travail d\'équipe.',
    image: '/images/contrat.jpg'
  },
  {
    id: 4,
    titre: 'Premier travail pratique en intégration web',
    description: 'Un travail assez basique qui comporte des éléments HTML et CSS de bas niveau, accompagné de couleurs pouvant laisser à désirer.',
    image: '/images/epicerie.jpg'
  },
  {
    id: 5,
    titre: 'Projet Pokedex',
    description: 'Projet Next.js avec une liaison à une API existante pour afficher des informations sur les Pokémon.',
    image: '/images/pokedex.jpg'
  },
  {
    id: 6,
    titre: 'Projet Snippets',
    description: 'Un projet de gestion de code snippets pour les développeurs.',
    image: '/images/snippets.png'
  },
  {
    id: 7,
    titre: 'Projet Ventes de Produits',
    description: 'Un projet Next.js avec une API pour gérer les ventes de produits fictifs en ligne.',
    image: '/images/ventes.jpg'
  }
];


app.get('/portfolio/:id', function (req, res) {
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
const sendEmail = (title, content, recipient) => {
  transport.sendMail({
    from: mail_sender,
    to: recipient,
    subject: title,
    html: content
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
  sendEmail('Nouveau message de ' + nom, '<p>' + message + '</p>', email);
  res.redirect('/');
});

app.use(function(req, res, next) {
  res.status(404).render('404.ejs');
});