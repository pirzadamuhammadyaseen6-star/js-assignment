let m1 = prompt("Enter Your 1st Subject Marks:");
let m2 = prompt("Enter Your 2nd Subject Marks:");
let m3 = prompt("Enter Your 3rd Subject Marks:");

let a = Number(m1);
let b = Number(m2);
let c = Number(m3);

if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.write("Please Enter a valid number");
} else {
    let total = a + b + c;
    

    if (total >= 120) {
        document.write("You Are Pass. Total Marks: " + total);
    } else {
        document.write("You Are Fail. Total Marks: " + total);
    }
}