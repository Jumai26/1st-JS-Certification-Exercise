const myInput = document.getElementById("text-input");
const submitButton = document.getElementById("checkin-btn");
const resultText = document.getElementById("result");


function check() { 
    const inputValue = myInput.value; //To get the value of the inputed text

    if (inputValue === "") {
        alert("Please input a value");
        resultText.innerHTML = "";
    }

    const regexm = /[^a-zA-Z0-9]/g; // To get have only alphabets
    const ans = inputValue.replace(regexm, "").toLowerCase().split(""); //Tp convert to lovercase and array
    const array = ans;

    let isPalimdrome = true;
    for (let i = 0; i < array.length / 2; i++) {
        if (array[i] !== array[array.length - 1 - i]) {
            isPalimdrome = false;
            break;
        } 
    }
    
    if (isPalimdrome) {
        resultText.innerHTML = `${myInput.value} is a Palindrome`;
    } else {
        resultText.innerHTML = `${myInput.value} is not a Palindrome`;
    }
}

submitButton.addEventListener("click", check);
