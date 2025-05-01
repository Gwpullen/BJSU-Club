console.log ("Phoenix");


const confirmBtnRef = 
document.querySelector
("#confirm-btn");

function showConfirm() {
    const userConfirmed = confirm("Would you like to participate in a battle with a legendary phoenix? Really? ...You? 🤨");
    console.log(userConfirmed);
}

confirmBtnRef.onclick = showConfirm;
//confirms always give back a true or false

console.log(confirmBtnRef)
