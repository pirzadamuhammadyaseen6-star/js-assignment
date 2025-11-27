let input = prompt("Enter a number:");

let num = Number(input);

if (isNaN(num)) {
    document.write("Please enter valid number.");
} else {
   
    
    if (num > 0) {
        document.write("Positive Number.");
    } else if (num < 0) {
        document.write("Negative Number.");
    } else {
        document.write("Zero Number.");
    }

    // Even/Odd check
    if (num % 2 === 0) {
        document.write("And this number is also even.");
    } else {
       document.write("And this number is also odd.");
    }
}