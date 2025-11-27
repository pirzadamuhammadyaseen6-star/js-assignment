   let user = prompt("Enter username:");
let pass = prompt("Enter password:");

// Fixed username & password
let correctUser = "admin";
let correctPass = "1234";

if (user === correctUser && pass === correctPass) {
    document.write("Login Successful!");
} else {
    document.write("Incorrect username or password.");
}
