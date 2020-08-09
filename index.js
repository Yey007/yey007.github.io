window.onload = load;

let nameField = document.querySelector("#name-in");
let greeting = document.querySelector("#form-enter");
let about = document.querySelector("#about");
let result = document.querySelector("#result");


function load()
{

    // See if we have an autosave value
    // (this will only happen if the page is accidentally refreshed)
    if (sessionStorage.getItem("autosave")) {
      // Restore the contents of the text field
      nameField.value = sessionStorage.getItem("autosave");
    }

    // See if we have an autosave value
    // (this will only happen if the page is accidentally refreshed)
    if (sessionStorage.getItem("opacity")) {
      // Restore the contents of the text field
      greeting.style.opacity = sessionStorage.getItem("opacity");
      about.style.opacity = sessionStorage.getItem("opacity");
    }

    // See if we have an autosave value
    // (this will only happen if the page is accidentally refreshed)
    if (sessionStorage.getItem("result")) {
      // Restore the contents of the text field
        result.innerHTML = sessionStorage.getItem("result");
    }

    // Listen for changes in the text field
    nameField.addEventListener("change", function() {
      // And save the results into the session storage object
      sessionStorage.setItem("autosave", nameField.value);
    });

}

function greet()
{
    let name = document.querySelector("#name-in").value.trim();


    if(name === "")
    {
        document.querySelector("#result").innerHTML = "Welcome, human.";
        sessionStorage.setItem("result", "Welcome, human.");
    }
    else
    {
        document.querySelector("#result").innerHTML = "Welcome, " + name + ".";
        sessionStorage.setItem("result", "Welcome, " + name + ".");
    }

    fadeIn(greeting);
    fadeIn(about);
    sessionStorage.setItem("opacity", "1");
}

function fadeIn(element)
{
    element.style.transition = "opacity 2s ease-in-out"
    element.style.opacity = "1";
}