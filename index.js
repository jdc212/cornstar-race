const image = document.getElementById("slide");
const container2 = document.getElementById("container2");

let counter = 1;

image.addEventListener("click", () => {
  if (counter === 7) {
    image.src = `./images/8.jpg`;
    const link = document.createElement("a")
    link.setAttribute("href", "./game.html")
    container2.appendChild(link)
    link.appendChild(image)
    counter = 1;
  } else {
    image.src = `./images/${counter + 1}.jpg`;
    counter++;
  }
});

