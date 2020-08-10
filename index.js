window.onload = load

let nameField = document.querySelector("#name-in");
let greeting = document.querySelector("#form-enter");
let about = document.querySelector("#about");
let result = document.querySelector("#result");

function load()
{
  loadSessionStorage();
  addListeners();
}

function loadSessionStorage() {
    // See if we have an autosave value
    // (this will only happen if the page is accidentally refreshed)
    if (sessionStorage.getItem("autosave")) {
        // Restore the contents of the text field
        nameField.value = sessionStorage.getItem("autosave");
    }

    // we also know that we have submitted the form
    if (sessionStorage.getItem("result")) {
        result.innerHTML = sessionStorage.getItem("result");
        result.classList.add("fade-load");
        greeting.classList.add("fade-load");
        let c = about.children;
        for(i = 0; i < c.length; i++)
        {
            c[i].classList.add("fade-load");
        }
        fadeVisibles();
    }
}

function addListeners() {
    // Listen for changes in the text field
    nameField.addEventListener("change", function () {
        // And save the results into the session storage object
        sessionStorage.setItem("autosave", nameField.value);
    });
}

function greet() {
    let name = document.querySelector("#name-in").value.trim();
  
    if (name === "") {
        result.innerHTML = "Welcome, human.";
        sessionStorage.setItem("result", "Welcome, human.");
        result.classList.add("fade-load");
    }
    else {
        result.innerHTML = "Welcome, " + name + ".";
        sessionStorage.setItem("result", "Welcome, " + name + ".");
        result.classList.add("fade-load");
    }
  
    greeting.classList.add("fade-load");
    let c = about.children;
    for (i = 0; i < c.length; i++) {
        c[i].classList.add("fade-load");
    }
    fadeVisibles();
}
  