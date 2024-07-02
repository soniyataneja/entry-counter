

let countEl = document.getElementById("count-el");
let previousClicks = localStorage.getItem        ('clicks')?parseInt(localStorage.getItem('clicks')):0;
countEl.textContent = previousClicks;
let count = previousClicks;
function increment()
{
    count += 1;
    countEl.textContent = count;
    localStorage.setItem('clicks',count);
}


let saveEl = document.getElementById("save-el");
let saved = localStorage.getItem('savedEntries')?localStorage.getItem('savedEntries'):"";

saveEl.textContent = saved;
let countStr = saved;

function save()
{

    countStr = count + " - ";
    saveEl.textContent += countStr;
    countEl.textContent = count;
    localStorage.setItem('savedEntries',saveEl.textContent);

}

