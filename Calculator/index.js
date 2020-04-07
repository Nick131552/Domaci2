let input = document.getElementById("input");
let buttons = document.getElementById("buttons");

buttons.addEventListener("click", function(e){
    if (e.target.tagName === "BUTTON"){
        if(e.target.innerText === "C"){
            input.value = "";
        }
        else if (e.target.innerText === "="){
            input.value = eval(input.value)
        }
        else {
            input.value += e.target.innerHTML;
        }
    }
})
document.addEventListener("keypress", function(e){

    if(!isNaN(e.key)||
        e.key==="+"||
        e.key==="-"||
        e.key==="*"||
        e.key==="/"||
        e.key==="."){

            input.value += e.key;
       }
    else if(e.key === "c"){
        input.value = "";
    }
    else if (e.key === "="){
        input.value = eval(input.value)
    }
    else if (e.key === "Delete"){
        input.value = input.value.substr(0, input.value.length-1);
    }
})