document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("main > .slider-images > img");
    const classNames = ["first", "second", "third", "inactive", "inactive2"];
    const backgrounds = document.querySelectorAll(".background");
  
    let index = 0;
    let gradientIndex = 0;
  
    function rotateClasses() {
      images.forEach((image, i) => {
        image.className = `${classNames[(index + i) % classNames.length]}`;
      });
      index = (index + 1) % classNames.length;
    }
  
    function changeBackground() {
      backgrounds.forEach((bg, i) => {
        if (i === gradientIndex) {
          bg.classList.add("active");
        } else {
          bg.classList.remove("active");
        }
      });
      gradientIndex = (gradientIndex + 1) % backgrounds.length;
    }
  
    setInterval(changeBackground, 3000);
    setInterval(rotateClasses, 3000);
  });
  