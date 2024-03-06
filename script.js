const container = document.querySelector("#container");

// Adding 256 squares into the container
for (let i = 0; i < 256; i++) {
  const div = document.createElement("div");
  div.classList.add("square");
  // div.setAttribute("id", `sqr-${i}`);
  // console.log(div.getAttribute("id")); // testing purpose
  container.appendChild(div);
  div.addEventListener("mouseenter", () => {
    div.classList.add("hovered");
  });
}
