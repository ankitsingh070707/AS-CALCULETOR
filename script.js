let output = document.getElementById("output");
let buttons = document.querySelectorAll(".btn");
let result = "";

buttons.forEach((btn) => {
    btn.addEventListener("click" , () => {
        let value = btn.innerText;
        if(value === "C"){
            result = "";
        }else if(value === "DELETE"){
            result = result.slice(0 , -1);
        }else if(value === "="){
             try {
                result = eval(result).toString();
            } catch (error) {
                result = "ERROR";
            }
        }else{
            result += value;
        }
         output.innerText = result;
    })
})