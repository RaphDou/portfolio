document.addEventListener("DOMContentLoaded", function () {
  const projets = [
    {
      id: 1,
      titre: "Memory Game",
      description:
        "JS programming project in duo to create a memory game.",
      image: "/images/cartes.jpg",
      technologies: ["JavaScript, HTML, CSS"],
      resultatsPersonnels:
        "First experience in JS programming and GitHub, not my best project lol!",
    },
    {
      id: 2,
      titre: "SAPAR",
      description:
        "Final graphic design work done using Figma to create a fictional company.",
      image: "/images/figma.jpg",
      technologies: ["Figma"],
      resultatsPersonnels:
        "Rewarding experience, showcasing creativity and interface design skills.",
    },
    {
      id: 3,
      titre: "Contract",
      description:
        "A team work of three on a fictional project of a service offer contract.",
      image: "/images/contrat.jpg",
      technologies: ["Word"],
      resultatsPersonnels:
        "Development of key skills in communication, negotiation, and teamwork.",
    },
    {
      id: 4,
      titre: "Projet Pokedex",
      description:
        "Next.js project with a link to an existing API to display a library of pokemon.",
      image: "/images/pokedex.jpg",
      technologies: ["Next.js"],
      resultatsPersonnels:
        "Good learning of Next.js, MUI library, and atomic design.",
    },
    {
      id: 5,
      titre: "Projet Snippets",
      description:
        "A project to manage code snippets and personal notes attached to tags.",
      image: "/images/snippets.png",
      technologies: ["JavaScript, HTML, CSS, node.js, express.js"],
      resultatsPersonnels:
        "First use of node.js and express!",
    },
    {
      id: 6,
      titre: "API and React",
      description:
        "Next.js project with an API to manage fictitious online product sales.",
      image: "/images/ventes.jpg",
      technologies: ["JavaScript"],
      resultatsPersonnels:
        "Good task management, time, and advanced functions with GitHub.",
    },
    {
      id: 7,
      titre: "Company's API Development",
      description: "Our team worked full-time to develop a real company's API for rebuilding their website.",
      image: "/images/qc.jpg",
      technologies: ["JavaScript, Node.js, Express.js, MongoDB"],
      resultatsPersonnels: "Valuable experience in full-time project development, gaining insights into real-world website rebuilding processes."
    },
    {
      id: 8,
      titre: "WordPress shop",
      description: "Building a WordPress website using WooCommerce to create a working e-commerce shop.",
      image: "/images/wordpress.png",
      technologies: ["WordPress, WooCommerce"],
      resultatsPersonnels: "Significant learning in CMS website building and leveraging plugins for enhanced functionality."
    },
        {
      id: 9,
      titre: "Future projects",
      description: "Who knows what awaits me!",
      image: "/images/idk.jpg",
      technologies: ["🤷"],
      resultatsPersonnels:
        "We'll see!",
    }
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
          <li><span class="title">Technologies used:</span> <span class="technologies">${projet.technologies.join(", ")}</span></li>
          <br>
          <li><span class="title">Personal results:</span> <span class="resultats-personnels">${projet.resultatsPersonnels}</span></li>
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
