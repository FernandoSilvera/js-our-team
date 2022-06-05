let team = [
  {
      id: "Wayne Barnett",
      role: "Founder & CEO",
      image: "wayne-barnett-founder-ceo.jpg",
  },
  {
      id: "Angela Caroll",
      role: "Chief Editor",
      image: "./angela-caroll-chief-editor.jpg",
  },
  {
      id: "Walter Gordon",
      role: "Office Manager",
      image: "./walter-gordon-office-manager.jpg",
  },
  {
      id: "Angela Lopez",
      role: "Social Media Manager",
      image: "./angela-lopez-social-media-manager.jpg",
  },
  {
      id: "Scott Estrada",
      role: "Developer",
      image: "./scott-estrada-developer.jpg",
  },
  {
      id: "Barbara Ramos",
      role: "Graphic Designer",
      image: "./barbara-ramos-graphic-designer.jpg",
  }
];
const teamDiv = document.getElementById("team");

// Print team in console
console.table(Object.values(team));

// Create team cards in HTML
for (let i = 0; i < team.length; i++) {
  teamDiv.innerHTML +=
  `<div class="card">
    <img src="img/${team[i].image}" class="card-img-top" alt="${team[i].id}">
    <div class="card-body">
      <h3 class="card-title">${team[i].id}</h3>
      <p class="card-text">${team[i].role}</p>
    </div>
  </div>`;
}