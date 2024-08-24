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

function createGrid(size) {
  const container = document.querySelector("#container");

  // Set the limit grid size up to 100.
  if (size > 100) size = 100;
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

// Event occur when the page load compleatly (start page)
document.addEventListener("DOMContentLoaded", createGrid(16));

const button = document.querySelector("button");
const size = document.querySelector("#size");

// Event occur when the user hover mouse to the area
button.addEventListener("click", () => {
  const size = document.querySelector("#size");
  const container = document.getElementById("container");
  const body = document.querySelector("body");

  // Make sure if the container already exist or not,
  // if exist we need to delete and try to create another one !!
  if (container) {
    container.remove();

    const newContainer = document.createElement("div");
    newContainer.id = "container";
    document.body.appendChild(newContainer);

    createGrid(+size.value);
  }
});
