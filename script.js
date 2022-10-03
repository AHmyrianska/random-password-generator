const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1El = document.getElementById("psw-1");
let pass2El = document.getElementById("psw-2");

let button = document.querySelector("#btn");
button.addEventListener("click", generatePassword());

let passLength = 15;

function generatePassword() {
    let pass1 = "";
    for (let i = 0; i < passLength; i++) {
        let randomIndex = Math.floor(Math.round() * passLength);
        pass1 += characters[randomIndex];
    }
    pass1El.textContent = pass1;   
}




