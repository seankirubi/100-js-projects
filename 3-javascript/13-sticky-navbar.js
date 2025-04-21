const navbarEl = document.querySelector(".nav-bar");

const bottomContainerEl = document.querySelector(".content");

console.log(navbarEl.offsetHeight);
console.log(bottomContainerEl.offsetTop);


window.addEventListener("scroll", () => {
  
  if (
    window.scrollY >
    bottomContainerEl.offsetTop - navbarEl.offsetHeight - 50
  ) {
    navbarEl.classList.add("active");
  } else {
    navbarEl.classList.remove("active");
  }
});
