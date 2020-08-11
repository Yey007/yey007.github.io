window.onscroll = onScrollMain
window.onload = loadMain

var fadeQueue = [];

function loadMain() {
  fadeVisibles();

  window.setInterval(async function () {
    if (fadeQueue.length >= 1) {
      fadeIn(fadeQueue.shift());
    }
  }, 25);
}

function onScrollMain() {
  fadeVisibles();
}

function fadeVisibles() {
  let fades = document.getElementsByClassName("fade-load");
  if (fades != null) {
    for (i = 0; i < fades.length; i++) {
      if (isVisible(fades[i]) && !fadeQueue.includes(fades[i])) {
        fadeQueue.push(fades[i])
      } 
    }
  }
}

function isVisible(el) {
  var rect = el.getBoundingClientRect();
  var elemTop = rect.top;
  var elemBottom = rect.bottom;

  var isVisible = elemTop < window.innerHeight && elemBottom >= 0;

  return isVisible;
}

async function fadeIn(element) //element must be fadeable
{
  element.style.opacity = 1;
}


function delay(ms) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}

