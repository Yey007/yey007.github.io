const navOpen = document.querySelector("#nav-mobile-icon");
navOpen.addEventListener("click", () => {
  document.querySelector("#nav-mobile-side").classList.toggle("nav-hidden");
});
