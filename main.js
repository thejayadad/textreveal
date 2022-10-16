

let open = document.getElementById("open");
let close = document.getElementById("close")
let tab;

open.addEventListener("click", () => {
    tab = window.open("https://www.espn.com", "_blank")
})
close.addEventListener("click", () => {
    if(tab)tab.close()
})