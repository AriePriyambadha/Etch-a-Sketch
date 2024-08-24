function createGrid(size) {
  const container = document.querySelector("#container");

  for (let i = 0; i < size; i++) {
    container.append(document.createElement("div"));
  }

  const divGrid = document.querySelectorAll("div div");
  divGrid.forEach((grid) => {
    grid.classList.add("bigBox");

    for (let i = 0; i < size; i++) {
      const smallBox = document.createElement("div");
      smallBox.classList.add("smallBox");

      grid.appendChild(smallBox);
    }
  });

  changeRandomColor();
}

function changeRandomColor() {
  const boxes = document.querySelectorAll("div.smallBox");

  boxes.forEach((box) => {
    box.addEventListener("mouseover", (event) => {
      const red = Math.floor(Math.random() * 256);
      const green = Math.floor(Math.random() * 256);
      const blue = Math.floor(Math.random() * 256);
      const rgb = `rgb(${red}, ${green}, ${blue})`;

      event.target.style.setProperty("background-color", rgb);
    });
  });
}

document.addEventListener("DOMContentLoaded", createGrid(16));

const button = document.querySelector("button");
const size = document.querySelector("#size");

button.addEventListener("click", () => {
  const size = document.querySelector("#size");
  const container = document.getElementById("container");
  const body = document.querySelector("body");

  console.log(container);

  if (container) {
    container.remove();

    const newContainer = document.createElement("div");
    newContainer.id = "container";
    document.body.appendChild(newContainer);

    createGrid(+size.value);
  }
});
