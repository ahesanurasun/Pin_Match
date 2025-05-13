// TODO: 1- Generate 4 Digit Pin
// TODO: 2- Make the keypad functional
// TODO: 3- Make SUBMIT Btn & notification work
// TODO: 4- Make try out functional
// TODO: 5- "<" onClick - Delete single digit & "C" Clear whole input
// TODO: 6- if try = 0 then all the button willbe disable - Generate pin 




// Selector
const generatePinBtn = document.querySelector(".generateBtn");
const generatedPinInput = document.querySelector(".generatePin");
const keypadInput = document.querySelector(".showValue");
const removeBtn = document.querySelector(".removeBtn");
const wrongNotifaction = document.querySelector(".wrong-pin");
const correctNotifaction = document.querySelector(".correct-pin");
const submit = document.querySelector(".submit-btn");
const tryLeft = document.getElementById("tryLeft");
// console.log(keypadInput);
// Generate 4 Digit Pin
function generatePin(){
    let pin = Math.floor(Math.random()*9000) +1000;
    console.log(pin)
    generatedPinInput.value = pin;
}
// generate value from keypad
function keypad(number){
if (generatedPinInput.value == ""){
    alert ("Generate a Pin First!");
}else{
    keypadInput.value += number;

 if(number ==="C"){
    keypadInput.value ="";
 }
}
} 


// Remove Single Didgit
function removeSingleDigit(){
    const currentValue = keypadInput.value;
    if(currentValue == ""){
        alert("Nothing to Remove...");
    }
    keypadInput.value = currentValue.slice(0, -1);
}
// Hide Notifaction 
function hideNotifaction(){
    wrongNotifaction.style.display ="none";
    correctNotifaction.style.display ="none";
}
// Pin Match
function matchPin(){
    if(generatedPinInput.value == keypadInput.value){
        console.log("Match...");
        submit.style.background = "green";
        generatePinBtn.style.background = "green";
        correctNotifaction.style.display = "block";
        wrongNotifaction.style.display = "none";
    }else{
        console.log("Wrong...");
        submit.style.background = "red";
        generatePinBtn.style.background = "red";
        correctNotifaction.style.display = "none";
        wrongNotifaction.style.display = "block";
        keypadInput.value ="";
        handelTryLeft();
    }
}
// Try Left
function handelTryLeft(){
    let value = parseInt(tryLeft.innerText);
    // console.log(value);
    if (0 < value){
        tryLeft.innerText = value -1;
    }else{
        alert("Try again some time!");
    }
}


submit.addEventListener("click", () =>{
    if (keypadInput.value == ""){
        alert ("Enter Your Generated Your Pin!");
    }else{
        matchPin();
    }
});
generatePinBtn.addEventListener("click", generatePin);
removeBtn.addEventListener("click", removeSingleDigit);
submit.addEventListener("click", matchPin);
hideNotifaction();
