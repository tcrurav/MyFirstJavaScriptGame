window.onload = initialize;

function initialize(){
    var buttonCheck = document.getElementById("check");
    buttonCheck.addEventListener("click", checkWord);
}

function checkWord(){
    console.log("user has clicked on check button");

    var letter1 = document.getElementById("letter1");
    var letter1Value = letter1.value;

    var letter2 = document.getElementById("letter2");
    var letter2Value = letter2.value;

    var letter3 = document.getElementById("letter3");
    var letter3Value = letter3.value;

    var letter4 = document.getElementById("letter4");
    var letter4Value = letter4.value;

    var userMessage = letter1Value + letter2Value + letter3Value + letter4Value;

    var messageParagraph = document.getElementById("message");

    if(userMessage == "hola"){
        messageParagraph.innerHTML = "That's right my friend!";
    } else {
        messageParagraph.innerHTML = "Try it again my dunky punky!";
    }


    
}