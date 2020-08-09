window.onscroll = addAlerts;

function addAlerts()
{
    let alert = document.querySelector("#inactive-alert");

    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        fadeIn(alert);
    }
}

function fadeIn(element)
{
    element.style.transition = "opacity 2s ease-in-out"
    element.style.opacity = "1";
}
