const express = require('express');
const app = express();
const cors = require('cors');  // Adding CORS middleware
const port = 3000;
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const errorController = require("./controllers/errorController");
const weatherController = require('./controllers/weatherController');

require('dotenv').config();

app.use(express.static('public'));

// CORS Middleware
app.use(cors());

app.use('/', weatherController);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

app.use(express.static('public'));

app.set('view engine', 'ejs');

// Route for homepage
app.get('/', function (req, res) {
  res.render('accueil.ejs');
});

app.get('/project/:id', function (req, res) {
  const id = req.params.id;
  var project = projects.find(p => p.id == id);
  if (project) {
    res.render('pages/project', { project });
  } else {
    // Handle case where no project is found for the given ID.
    res.status(404).render('404.ejs');
  }
});

app.get('/contact', function (_req, res) {
  res.render('contact');
});

// SMTP server configuration for Nodemailer
const mail_sender = 'your_email@example.com';

// SMTP server configuration copied from Mailtrap
var transport = nodemailer.createTransport({
  host: "sandbox.smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "9d324a6591bd71",
    pass: "433f10fc2a1e69"
  }
});

// Function to send an email
const sendEmail = (title, message, recipient, drink) => {
  const messageContent = `<p>${message}</p><p>Favorite Drink: ${drink}</p>`;
  
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

// Route for handling contact form submission
app.post('/contact', function (req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;
  const drink = req.body.drink; // Get favorite drink

  sendEmail('New message from ' + name, message, email, drink);
  res.redirect('/');
});

app.use(function(req, res, next) {
  res.status(404).render('404.ejs');
});

// Error handling
app.use(errorController.logErrors);

// 404 error handling
app.use(errorController.get404);