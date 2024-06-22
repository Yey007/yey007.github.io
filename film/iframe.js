const iframe = document.querySelector("iframe");
const defaultWidth = 560;
const defaultHeight = 315;

function convertRemToPixels(rem) {
    return (
        rem * parseFloat(getComputedStyle(document.documentElement).fontSize)
    );
}

function resize() {
    console.log("resize");
    if (window.innerWidth < defaultWidth) {
        const newWidth = window.innerWidth - convertRemToPixels(4);
        iframe.width = newWidth;
        iframe.height = (newWidth / defaultWidth) * defaultHeight;
    } else {
        iframe.width = defaultWidth;
        iframe.height = defaultHeight;
    }
}

addEventListener("resize", resize);
resize();
