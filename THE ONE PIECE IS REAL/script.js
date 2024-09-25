function mijnFunctie() {
    let stuk = document.getElementById("stuk");
    let titel = document.getElementById("titel");
    tekst = "De tekst en kleur van de titel is net veranderd!";
    titel.innerHTML = test;
    titel.style("color") = "red";
    stuk.innerHTML = "Dingen werken!";
}
let count = 1;

function countup() {
let timer = document.getElementById('timer');
count = count + 1;
timer.innerHTML = count;
}
;

let clickCount = 0;

function countup() {
  clickCount++;
  document.getElementById('timer').innerText = clickCount;
  
  if (clickCount >= 3) {
    document.getElementById('knop').innerText = "Stop met klikken!";
    document.getElementById('knop').innerText = "Stop met klikken!";
    document.getElementById('knop').innerText = "Stop met klikken!";
  }
}