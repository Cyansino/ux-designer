blokje.style.backgroundColor = "rgb(67, 67, 67)";
blokje.style.fontFamily = "Arial, sans-serif";

let blokje = document.getElementById("blokje");

blokje.style.backgroundColor = "rgb(67, 67, 67)";
blokje.style.fontFamily = "Arial, sans-serif";

function changeColor() {
    let myThing = document.getElementById("blokje");
    let tekst = myThing.getElementsByTagName("p");
    
    if (tekst[0].style.color == "white") {
        for (let i = 0; i < tekst.length; i++) {
            tekst[i].style.color = "black";
        }
    } else {
        for (let i = 0; i < tekst.length; i++) {
            tekst[i].style.color = "white";
        }
    }
}