 let balance = 5000;

    let amount = prompt("How much money do you want to withdraw? ");  
       let money = Number(amount);

         if (isNaN(money) || money <= 0) {
           document.write("Please enter a valid amount.");
} 

            else {
               if (money > balance) {
             document.write("You do not have enough balance in your account.");
} 

           else {
         balance -= money; 
         document.write(`Transaction Successful! New Balance: ${balance}`);
}
}
