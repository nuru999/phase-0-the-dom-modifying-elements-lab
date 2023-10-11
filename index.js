//Start the code here //
let mainElement = document.querySelector('main#main');
if (mainElement) {
    mainElement.remove();
}


let newHeader = document.createElement('h1');
newHeader.id = 'victory';
newHeader.innerHTML = "Amudi is the champion";

document.body.appendChild(newHeader);