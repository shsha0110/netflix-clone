const header = document.querySelector(".header")

const logo = document.createElement("div");
logo.className = "logo";
header.appendChild(logo);

const logo_image = document.createElement("img");
logo_image.src = "images/logo.png";
logo.appendChild(logo_image);