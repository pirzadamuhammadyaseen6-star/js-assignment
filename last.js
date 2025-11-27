function findGreatest() {


let x = Number(document.getElementById("a").value);
let y = Number(document.getElementById("b").value);
let z = Number(document.getElementById("c").value);

if (isNaN(x) || isNaN(y) || isNaN(z)) {
document.getElementById("result").innerHTML = "Please enter valid number.";
return;
}


if (x >= y && x >= z) {
document.getElementById("result").innerHTML = "The largest number: " + x;
} else if (y >= x && y >= z) {
document.getElementById("result").innerHTML = "The largest number: " + y;
} else {
document.getElementById("result").innerHTML = "The largest number: " + z;
}
}