let started = false;

export function startFadeProcessor() {
  if (started) {
    return;
  }

  const fadeQueue = [];

  addVisibleToQueue(fadeQueue);
  addEventListener("scroll", () => addVisibleToQueue(fadeQueue));
  addEventListener("resize", () => addVisibleToQueue(fadeQueue));

  setInterval(() => {
    if (fadeQueue.length > 0) {
      fadeIn(fadeQueue.shift());
    }
  }, 25);

  started = true;
}

function addVisibleToQueue(fadeQueue) {
  const fadeElements = document.querySelectorAll(".fadeable");

  for (const element of fadeElements) {
    if (isVisible(element) && !isFadedIn(element)) {
      fadeQueue.push(element);
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

function fadeIn(element) {
  element.classList.add("fade-in");
}

function isFadedIn(element) {
  return element.classList.contains("fade-in");
}
