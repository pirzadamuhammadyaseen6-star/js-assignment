 function checkAge() {
        let a = document.getElementById("age").value;

        let age = Number(a);

        if  (isNaN(age)) {
            document.getElementById("result").innerHTML = "enter valid number"}
            
            else {
                if (age >= 18) {
                    document.getElementById("result").innerHTML = "You Are Adult";}
                    
                    else {
                        document.getElementById("result").innerHTML = "You Are Minor"
                    }

                } 
            }