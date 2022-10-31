let userInput = prompt("enter a name")

let userInputArr = userInput.split("").reverse().join('').slice()
userInputArr = userInputArr[0].toUpperCase()+userInputArr.slice(1).toLowerCase()



document.getElementById("demo2").innerHTML = `${userInputArr}`;


