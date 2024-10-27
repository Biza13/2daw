function sum(num1, num2){ 
    return num1 + num2 
}

function stringLength(str){ 
    console.log(`the length of "${str}" is:`, str.length) 
}

function stringLength(str){ 
    let length = str.length 
    console.log(`the length of "${str}" is:`, length) 
    return str.length 
}

function showAlert(name){     
    alert(alerts[(Math.floor(Math.random()*alerts.length))] + `, ${name}!`) 
}

