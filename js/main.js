document.addEventListener("DOMContentLoaded", () => {
  const burgerButton = document.querySelector(".burger-menu");
  const navigationMenu = document.querySelector("nav ul");

  if (burgerButton && navigationMenu) {
    burgerButton.addEventListener("click", () => {
      navigationMenu.classList.toggle("open");
    });
  }

  const colorElements = document.querySelectorAll(".color");

  const colorMap = {
    red: "hue-rotate(123deg)",
    blue: "hue-rotate(360deg)",
    yellow: "hue-rotate(200deg)",
    green: "hue-rotate(270deg)",
  };

  colorElements.forEach((colorElement) => {
    colorElement.addEventListener("click", () => {
      const colorClass = colorElement.classList[1];
      const featuredProductImage = document.querySelector(".featured-product img");

      if (featuredProductImage && colorMap[colorClass]) {
        featuredProductImage.style.filter = colorMap[colorClass];
      }
    });
  });
});