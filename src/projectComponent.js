export default function createProjectItem(projectName) {
  const li = document.createElement("li");

  const svgSpan = document.createElement("span");

  const svgMarkup = `
    <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="undefined">
      <path d="m240-160 40-160H120l20-80h160l40-160H180l20-80h160l40-160h80l-40 160h160l40-160h80l-40 160h160l-20 80H660l-40 160h160l-20 80H600l-40 160h-80l40-160H360l-40 160h-80Zm140-240h160l40-160H420l-40 160Z"/>
    </svg>
  `;

  svgSpan.innerHTML = svgMarkup;

  li.appendChild(svgSpan);

  const textSpan = document.createElement("span");
  textSpan.textContent = projectName;

  li.appendChild(textSpan);

  const parent = document.querySelector("ul");
  parent.appendChild(li);
}
