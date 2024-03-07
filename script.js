const container = document.querySelector("#container");
const button = document.querySelector("button");

let numOfSqrsPerSide = 0;

button.addEventListener("click", () => {
  // Set limit for number(positive and less than 100)
  do {
    numOfSqrsPerSide = Number(
      window.prompt(
        "Number of squares per side for the new grid(Limit: 100)",
        "10"
      )
    );
  } while (numOfSqrsPerSide > 100 || numOfSqrsPerSide < 0);

  // Remove the existing grids
  while (container.hasChildNodes()) {
    container.removeChild(container.firstChild);
  }

  // Adding required nos of etch-a-sketch squares into the container
  for (let i = 0; i < Math.pow(numOfSqrsPerSide, 2); i++) {
    const div = document.createElement("div");
    div.style.width = `${960 / numOfSqrsPerSide}px`;
    div.classList.add("square");
    container.appendChild(div);
    div.addEventListener("mouseenter", () => {
      div.classList.add("hovered");
    });
  }
});
