"use strict";

function getBtnValue(event) {
    let getInnerBtnText = event.target.innerText;

    let getInput = document.getElementById("input");
    getInput.value += getInnerBtnText;

    let audio = new Audio("Click.mp3");
    audio.play();

    if (getInput.value.slice(-2) == "++" || getInput.value.slice(-2) == "--" || getInput.value.slice(-2) == "**" || getInput.value.slice(-2) == "//") {
        getInput.value = getInput.value.slice(0, -2);

    };


    switch (getInput.value.slice(-2)) {

        case "+-":

            getInput.value = getInput.value.slice(0, -2);
            getInput.value += "-";
            break;

        case "+*":

            getInput.value = getInput.value.slice(0, -2);
            getInput.value += "*";
            break;

        case "+/":

            getInput.value = getInput.value.slice(0, -2);
            getInput.value += "/";
            break;

        case "-+":

            getInput.value = getInput.value.slice(0, -2);
            getInput.value += "+";
            break;

        case "-*":

            getInput.value = getInput.value.slice(0, -2);
            getInput.value += "*";
            break;

        case "-/":

            getInput.value = getInput.value.slice(0, -2);
            getInput.value += "/";
            break;

        case "/+":

            getInput.value = getInput.value.slice(0, -2);
            getInput.value += "+";
            break;

        case "/*":

            getInput.value = getInput.value.slice(0, -2);
            getInput.value += "*";
            break;

        case "/-":

            getInput.value = getInput.value.slice(0, -2);
            getInput.value += "-";
            break;

        case "*+":

            getInput.value = getInput.value.slice(0, -2);
            getInput.value += "+";
            break;

        case "*-":

            getInput.value = getInput.value.slice(0, -2);
            getInput.value += "-";
            break;

        case "*/":

            getInput.value = getInput.value.slice(0, -2);
            getInput.value += "/";
            break;

        default:
            break;
    }




    if (getInput.value.slice(-2) == "+" || getInput.value.slice(-2) == "*" || getInput.value.slice(-2) == "/") {
        getInput.value = getInput.value.slice(0, -1);
    }

};


function allClear() {
    let getInput = document.getElementById("input");
    getInput.value = "";
    let audio = new Audio("Click.mp3");
    audio.play();
};


function clear1() {
    let getInput = document.getElementById("input");
    getInput.value = getInput.value.slice(0, -1);
    let audio = new Audio("Click.mp3");
    audio.play();
};


function equalBtn() {
    let audio = new Audio("Click.mp3");
    audio.play();
    document.getElementById("input").value = eval(document.getElementById("input").value);

    let getInp = document.getElementById("input");

    let getInnerHistoryDiv = document.getElementById("history-inner-div");

    history();

};


let getUlTag = document.getElementById("ul-tag1");


function history() {

    let getInp = document.getElementById("input");
    let getPtag = document.getElementById("history-ptag");
    getPtag.innerHTML = "";

    let createLi = document.createElement("li");

    let textInsertInLi = document.createTextNode(getInp.value);

    createLi.appendChild(textInsertInLi);

    getUlTag.appendChild(createLi);

    createLi.setAttribute("id", "lists-id");

    let createDelBtn = document.createElement("button");

    let btnText = document.createTextNode("DELETE");

    createDelBtn.appendChild(btnText);

    createLi.appendChild(createDelBtn);

    createDelBtn.setAttribute("onclick", "deleteItem(this)")

    if (getInp.value == "undefined") {
        getInp.value = "";
    };

};


console.log(document.getElementById("lists-id"));


function deleteItem(e) {

    e.parentNode.remove();

    let getPtag = document.getElementById("history-ptag");

    if (document.getElementById("lists-id") == null) {
        getPtag.innerHTML = "There's no history yet";
        console.log(document.getElementById("There's no history yet"));
    };

};