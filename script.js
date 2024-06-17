let scrollcontainor = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

scrollcontainor.addEventListener("wheel", (e) => {
  e.preventDefault();
  scrollcontainor.scrollLeft += e.deltaY;
  scrollcontainor.style.scrollBehavior = "auto";
});

nextbtn.addEventListener("click", () => {
  scrollcontainor.style.scrollBehavior = "smooth";
  scrollcontainor.scrollLeft += 900;
});

backbtn.addEventListener("click", () => {
  scrollcontainor.style.scrollBehavior = "smooth";
  scrollcontainor.scrollLeft -= 900;
});
