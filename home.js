const allWords = document.getElementById("roll-container").children;
let lastRolledOutIndex = 0;

function next() {
  const toHide = allWords.item(lastRolledOutIndex);
  const toRollOut = allWords.item((lastRolledOutIndex + 1) % allWords.length);
  const toRollIn = allWords.item((lastRolledOutIndex + 2) % allWords.length);

  toHide.classList.replace("roll-out", "hidden");
  toRollOut.classList.replace("roll-in", "roll-out");
  toRollIn.classList.replace("hidden", "roll-in");

  lastRolledOutIndex = (lastRolledOutIndex + 1) % allWords.length;
}

setInterval(next, 3000);
