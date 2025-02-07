function changeName(){

const lastName = document.getElementById('last-name');

const firstName = document.getElementById('first-name');

document.getElementById('full-english-name').innerHTML = 
`${firstName.value} ${lastName.value}`

document.getElementById('self-introduction').innerHTML = 
`<strong>Introduction:</strong> Hi, I'm ${firstName.value} ${lastName.value}. Nice to meet you.`
}


function reset() {
 location.reload();
}

document.getElementById("reset-button").addEventListener("click", reset);

