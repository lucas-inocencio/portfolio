const elemBottonLightDark = document.querySelector(".botton-light-dark");
const projects = document.getElementById("projects");

elemBottonLightDark.addEventListener("click", () => document.body.classList.toggle("light"));

const imgPaths = [
  "algorithms-and-programming",
  "computational-linear-algebra",
  "database-systems",
  "graph-theory",
  "high-performance-computing",
  "information-security",
  "knowledge-management",
  "machine-learning",
  "portfolio",
  "software-engineering",
  "software-quality",
  "spotify",
  "spotify-vanilla"
];

imgPaths.forEach((imgPath) => {
  const imgName = imgPath.replaceAll("-", " ");
  const project = document.createElement("div");
  project.classList.add("project");
  project.innerHTML = `
    <h3>${imgName}</h3>
    <img width="600" height="400" src="./img/${imgPath}.png" alt="Projeto ${imgName}" />
    <a target="_blank" href="https://github.com/lucas-inocencio/${imgPath}">Clique aqui para acessar</a>
  `;
  console.log(imgPath);
  projects.appendChild(project);
});

