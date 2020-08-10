window.onscroll = onScrollMain

fadeVisibles();

function onScrollMain() {
  fadeVisibles();
}

async function fadeVisibles() {
  let fades = document.getElementsByClassName("fade-load");
  if (fades != null) {
    for (i = 0; i < fades.length; i++) {
      if (isVisible(fades[i])) {
        fadeIn(fades[i]);
      } 
      else if(!isVisible(fades[i]) && fades[i].style.opacity === "1")
      {
        fadeOut(fades[i]);
      }
      await delay(50)
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

function fadeIn(element) //element must be fadeable
{
  element.style.opacity = 1;
}

function fadeOut(element) //element must be fadeable
{
  console.log("bruh")
  element.style.opacity = 0;
}


function delay(ms) {
  return new Promise( resolve => setTimeout(resolve, ms) );
}