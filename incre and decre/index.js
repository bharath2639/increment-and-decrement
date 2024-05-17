let usersInput = document.getElementById("inputusers") ;

let output = document.getElementById("output") ;

let decrement = document.getElementById("button1") ;

let increment = document.getElementById("button2") ;

let reset = document.getElementById("button3") ;

let usersIncrement = document.getElementById("button4") ;

let usersDecrement = document.getElementById("button5")


decrement.onclick = () =>{
    let output1 = Number(output.textContent);
    let decrement1 = output1 - 1;
    output.innerHTML = decrement1;

}

increment.onclick = () => {
    let output2 = Number(output.textContent);
    let increment1 = output2 + 1 ;
    output.innerHTML = increment1

}


reset.onclick = () => {
    output.innerHTML = 0 ;
}

usersDecrement.onclick = () => {
    let usersValue = Number(usersInput.value) ;
    let output3 = Number(output.textContent) ;

    let result =  output3 - usersValue ;

    output.innerHTML = result ;
}


usersIncrement.onclick = () => {
    let usersValue2 = Number(usersInput.value) ;
    let output3 = Number(output.textContent);

    let result = usersValue2 + output3;

    output.innerHTML = result;
}

