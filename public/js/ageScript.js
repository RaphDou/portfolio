document.addEventListener('DOMContentLoaded', function () {
  // Date de naissance (12 juillet 2001)
  var dateNaissance = new Date('2001-07-12T00:00:00');

  function updateAge() {
    // Date actuelle
    var dateActuelle = new Date();

    // Calcul de l'âge
    var age = dateActuelle.getFullYear() - dateNaissance.getFullYear();

    // Vérification si l'anniversaire est déjà passé cette année
    if (dateActuelle.getMonth() < dateNaissance.getMonth() || (dateActuelle.getMonth() === dateNaissance.getMonth() && dateActuelle.getDate() < dateNaissance.getDate())) {
      age--;
    }

    // Calcul du nombre de mois
    var mois = dateActuelle.getMonth() - dateNaissance.getMonth();
    if (mois < 0) {
      mois += 12;
    }

    // Calcul du nombre de jours
    var jours = dateActuelle.getDate() - dateNaissance.getDate();
    if (jours < 0) {
      // Si le jour de naissance est ultérieur à aujourd'hui dans le mois actuel,
      // ajustez les mois et jours en conséquence
      var dernierJourMoisPrecedent = new Date(dateActuelle.getFullYear(), dateActuelle.getMonth(), 0).getDate();
      mois--;
      jours += dernierJourMoisPrecedent;
    }

    var ageElement = document.getElementById('age');
    ageElement.textContent = 'I am ' + age + ' years old, ' + mois + ' months, and ' + jours + ' days';
  }

  // Appeler la fonction pour mettre à jour l'âge
  updateAge();
});