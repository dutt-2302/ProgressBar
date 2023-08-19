var elem = document.getElementById("progressbar");
var startbtn = document.getElementById("startbtn");
var pausebtn = document.getElementById("pausebtn");
var width = 0;
var id;

function funStart() {
    startbtn.style.backgroundColor = "red";
    pausebtn.style.backgroundColor = "green"

    if (id) {
        clearInterval(id);
    }

    id = setInterval(bar, 100);

    function bar() {
        if (width >= 100) {
            clearInterval(id);
            width = 0;
        }
        else {
            width++;
            console.log(width)
            elem.style.width = width + "%";
            elem.innerHTML = width + "%";
        }

    }
}

function funPause() {
    startbtn.style.backgroundColor = "green";
    pausebtn.style.backgroundColor = "red"

    clearInterval(id);
}
