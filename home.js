import { startFadeProcessor } from "./fade.js";

function main() {
  startNamePopulator();
  addGreetingSubmitListener();
}

function addGreetingSubmitListener() {
  const greetingForm = document.querySelector("#name-form");
  greetingForm.addEventListener("submit", (e) => {
    e.preventDefault();
    startFadeProcessor();
  });
}

function startNamePopulator() {
  const nameField = document.querySelector("#name-in");
  const result = document.querySelector("#result");

  const savedName = sessionStorage.getItem("name");
  if (savedName) {
    nameField.value = savedName;
    result.textContent = `Welcome, ${savedName}.`;
    startFadeProcessor();
  }

  nameField.addEventListener("input", () => {
    const name = nameField.value || "human";
    result.textContent = `Welcome, ${name}.`;
    sessionStorage.setItem("name", name);
  });
}

main();
