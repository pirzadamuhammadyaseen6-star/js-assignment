 function checkEvenOdd() {
let n = document.getElementById("hy").value;

let hy = Number(n)

if(isNaN(hy)) {
    document.getElementById("result").innerHTML = "Enter a valid number";
}

else {
    if (hy % 2===0) {
        document.getElementById("result").innerHTML = "Even Number"
    }

    else {
        document.getElementById("result").innerHTML = " Odd Number"
    }
}

    }