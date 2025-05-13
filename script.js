const elemBottonLightDark = document.querySelector(".botton-light-dark");
const projects = document.getElementById("projects");

elemBottonLightDark.addEventListener("click", () => document.body.classList.toggle("light"));

const imgPaths = [
  "algorithms-and-programming",
  "computational-linear-algebra",
  "computer-architecture",
  "computer-networks",
  "data-structures",
  "database-systems",
  "digital-systems",
  "graph-theory",
  "high-performance-computing",
  "information-security",
  "knowledge-management",
  "logic-circuits",
  "machine-learning",
  "portfolio",
  "probability-and-statistics",
  "software-engineering",
  "software-quality",
  "spotify",
  "spotify-vanilla",
  "telecommunications",
];

imgPaths.forEach((imgPath) => {
  const imgName = imgPath.replaceAll("-", " ").replace(/\b\w/g, char => char.toUpperCase());
  const project = document.createElement("div");
  project.classList.add("project");
  const isPortuguese = document.body.classList.contains("portuguese");
  project.innerHTML = `
    <h3>${imgName}</h3>
    <img width="600" height="400" src="${isPortuguese ? './img/' : '../img/'}${imgPath}.png" alt="${isPortuguese ? 'Projeto ' : ''}${imgName} ${isPortuguese ? '' : 'Project'}" />
    <a target="_blank" href="https://github.com/lucas-inocencio/${imgPath}">${isPortuguese ? 'Clique aqui para acessar' : 'Click here to access'}</a>
  `;
  projects.appendChild(project);
});