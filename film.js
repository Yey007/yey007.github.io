window.addEventListener("resize", positionVid);

function positionVid()
{
    let w = window.innerWidth;
    console.log(w)
    if(w < 1150)
    {
        let vid = document.querySelector("#vid");
        vid.style.top = "95%";
        vid.style.left = "40px";
    }
    else
    {
        vid.style.top = "35%";
        vid.style.left = "52%";
    }
}