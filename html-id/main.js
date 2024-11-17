const article=document.getElementById("first-article");
const changeColor=document.getElementById("change-color");

const color1 = "aquamarine";
const color2 = "white";

changeColor.addEventListener("click", () => {
    article.style.backgroundColor =
      article.style.backgroundColor === color2 ? color1 : color2;
  });