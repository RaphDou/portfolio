document.addEventListener("DOMContentLoaded", function () {
  const projets = [
    {
      id: 1,
      titre: "Jeu de mémoire",
      description:
        "Projet de programmation JS en duo pour créer un jeu de mémoire.",
      image: "/images/cartes.jpg",
      technologies: ["JavaScript, HTML, CSS"],
      resultatsPersonnels:
        "Première expérience de programmation JS et de GitHub, pas mon meileur projet, mais bon!",
    },
    {
      id: 2,
      titre: "SAPAR",
      description:
        "Travail de conception graphique final réalisé en utilisant Figma pour créer une compagnie fictive.",
      image: "/images/figma.jpg",
      technologies: ["Figma"],
      resultatsPersonnels:
        "Expérience valorisante, mettant en valeur les compétences en créativité et en design d'interface.",
    },
    {
      id: 3,
      titre: "Prise de besoin",
      description:
        "Un travail en équipe de trois sur un projet fictif de contrat de prestation d'offre de service.",
      image: "/images/contrat.jpg",
      technologies: ["Word"],
      resultatsPersonnels:
        "Développement de compétences clés en communication, négociation et travail d'équipe.",
    },
    {
      id: 4,
      titre: "Projet Pokedex",
      description:
        "Projet Next.js avec une liaison à une API existante pour afficher des informations sur les Pokémon.",
      image: "/images/pokedex.jpg",
      technologies: ["Next.js"],
      resultatsPersonnels:
        "Bonne apprentisage de Next.js, de la bibliothèque MUI et du atomic design.",
    },
    {
      id: 5,
      titre: "Projet Snippets",
      description:
        "Un projet de gestion d'extraits de code et de notes personnel attachés à des étiquettes.",
      image: "/images/snippets.png",
      technologies: ["JavaScript, HTML, CSS, node.js, express.js"],
      resultatsPersonnels:
        "Première utilisation de node.js et d'express!",
    },
    {
      id: 6,
      titre: "API et React",
      description:
        "Un projet Next.js avec une API pour gérer les ventes de produits fictifs en ligne.",
      image: "/images/ventes.jpg",
      technologies: ["JavaScript"],
      resultatsPersonnels:
        "Bonne gestion des tâches, du temps et fonctions avancées avec GitHub",
    },
    {
      id: 7,
      titre: "À venir",
      description: "Qui sait ce que m'attend!",
      image: "/images/idk.jpg",
      technologies: ["🤷"],
      resultatsPersonnels:
        "Amélioration des compétences en résolution de problèmes et travail d'équipe.",
    },
  ];

  const swiperWrapper = document.querySelector(".swiper-wrapper");

  projets.forEach((projet, index) => {
    const slide = document.createElement("div");
    slide.className = "swiper-slide";
  
    const content = `
    <div class="card-body-carrousel">
      <div class="text-container">
        <h5 class="projet-titre">${projet.titre}</h5>
        <ul>
          <li><span class="title">Description:</span> <span class="description_project">${projet.description}</span></li>
          <br>
          <li><span class="title">Technologies utilisées:</span> <span class="technologies">${projet.technologies.join(", ")}</span></li>
          <br>
          <li><span class="title">Résultats personnels:</span> <span class="resultats-personnels">${projet.resultatsPersonnels}</span></li>
        </ul>
      </div>
      <div class="image-container">
        <img src="${projet.image}" alt="${projet.titre}" class="project-image">
      </div>
    </div>
  `;
  
  
    slide.innerHTML = content;
    swiperWrapper.appendChild(slide);
  });

  var swiper = new Swiper(".swiper-container", {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "2",
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 100,
      modifier: 2,
      slideShadows: true,
    },
    keyboard: {
      enabled: true,
    },
    spaceBetween: 90,
    loop: false,
    mousewheel: {
      enabled: true,
      releaseOnEdges: true,
      sensitivity: 1,
    },
  });
});
