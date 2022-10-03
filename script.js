const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const symbols = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


let passLength = 15;

let pass1El = document.getElementById("psw-1");
let pass2El = document.getElementById("psw-2");
let button = document.getElementById("btn");
let form = document.querySelector("form");
let symbolsEl = document.getElementById("symbols");
let numbersEl = document.getElementById("numbers");
let bothEl = document.getElementById("both");

function getPassLength(event) {
    event.preventDefault();
    let input = document.getElementById("length");
    passLength = input.value;
    
}

function returnPass() {
    let pass = "";
    if (symbolsEl.checked) {
        for (let i = 0; i < passLength; i++) {
            let randomIndex = Math.floor(Math.random() * symbols.length);
            pass += symbols[randomIndex];
        };
    };
    if (numbersEl.checked) {
        for (let i = 0; i < passLength; i++) {
            let randomIndex = Math.floor(Math.random() * numbers.length);
            pass += numbers[randomIndex];
        }
    }
    if (symbolsEl.checked == false && numbersEl.checked == false || bothEl.checked) {
    for (let i = 0; i < passLength; i++) {
        let randomIndex = Math.floor(Math.random() * characters.length);
        pass += characters[randomIndex];
    }
}
    return pass;
}

function generatePassword1() {
    pass1El.textContent = returnPass();
}

function generatePassword2() {
    pass2El.textContent = returnPass();  
}

form.addEventListener("submit", getPassLength);

button.addEventListener("click", generatePassword1); 
button.addEventListener("click", generatePassword2); 
// Не ставимо дужки після функціїї generatePassword, інакше вона запускатиметься одразу після завантаження сторінки.



pass1El.onclick = () => {
    copyToClipboard1();
}

// pass1El.addEventListener("touchstart", copyToClipboard1);

function copyToClipboard1() {
    let copyText = pass1El.innerText;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        alert("Copied to clipboard");
    });
  }


pass2El.onclick = () => {
    copyToClipboard2();
}

function copyToClipboard2() {
    let copyText = pass2El.innerText;
    navigator.clipboard.writeText(copyText).then(() => {
        // Alert the user that the action took place.
        // Nobody likes hidden stuff being done under the hood!
        alert("Copied to clipboard");
    });
  }


            