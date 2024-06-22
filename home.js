const allWords = document.getElementById("roll-container").children;
const prefix = document.getElementById("prefix");

let lastRolledOutIndex = allWords.length - 1; // last element

function next() {
    const toHide = allWords.item(lastRolledOutIndex);
    const toRollOut = allWords.item((lastRolledOutIndex + 1) % allWords.length);
    const toRollIn = allWords.item((lastRolledOutIndex + 2) % allWords.length);

    toHide.classList.replace("rolled-out", "hidden");
    toRollOut.classList.replace("rolled-in", "rolled-out");
    toRollIn.classList.replace("hidden", "rolled-in");

    lastRolledOutIndex = (lastRolledOutIndex + 1) % allWords.length;

    if (isVowel(toRollIn.innerText[0])) {
        prefix.classList.remove("prefix-a");
        prefix.classList.add("prefix-an");
    } else {
        prefix.classList.remove("prefix-an");
        prefix.classList.add("prefix-a");
    }
}

function isVowel(char) {
    return "aeiou".includes(char.toLowerCase());
}

setInterval(next, 3000);
