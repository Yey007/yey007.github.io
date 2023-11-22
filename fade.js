let started = false;

export function startFadeProcessor() {
  if (started) {
    return;
  }

  const fadeQueue = document.querySelectorAll(".fadeable").values();

  setInterval(() => {
    let next = fadeQueue.next();
    if (!next.done) {
      fadeIn(next.value);
    }
  }, 25);

  started = true;
}

function fadeIn(element) {
  element.classList.add("fade-in");
}
