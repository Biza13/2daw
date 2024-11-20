function sum(num1, num2){ 
    return num1 + num2 
}

function stringLengthA(str){ 
    console.log(`the length of "${str}" is:`, str.length) 
}

function stringLength(str){ 
    let length = str.length 
    console.log(`the length of "${str}" is:`, length) 
    return str.length 
}

/**
 * The function showAlert displays a random alert message followed by the provided name in a pop-up
 * dialog.
 * @param name - The `name` parameter is a variable that represents the name of the person to whom the
 * alert message will be displayed.
 */
function showAlert(name){     
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`) 
}

