const changeColor = (btn1, btn2) => {

    let button = document.getElementById(btn2, btn1);
    let resultButton = getComputedStyle(button);

    if (resultButton.backgroundColor === "rgb(128, 128, 128)") {
        button.style.backgroundColor = "rgb(0, 128, 0)";

    } else {
        button.style.backgroundColor = "rgb(128, 128, 128)";

    }

};