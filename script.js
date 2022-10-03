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
    if (symbolsEl.checked == false && numbersEl.checked == false) {
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
  document.execCommand("copy");
}

pass1El.addEventListener("copy", (event) => {
  event.preventDefault();
  if (event.clipboardData) {
    event.clipboardData.setData("text/plain", pass1El.textContent);
    console.log(event.clipboardData.getData("text"))
  }
});

pass2El.onclick = () => {
    document.execCommand("copy");
  }
  
  pass2El.addEventListener("copy", (event) => {
    event.preventDefault();
    if (event.clipboardData) {
      event.clipboardData.setData("text/plain", pass2El.textContent);
      console.log(event.clipboardData.getData("text"))
    }
  });
//   'copy' explanation: https://thewebdev.info/2021/09/04/how-to-copy-a-text-string-on-click-with-javascript/


            