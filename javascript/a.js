function displayGreeting(){

let today = new Date();
let hourNow = today.getHours();
let greeting;

if (hourNow > 18){
        greeting = 'Heyyoo';
    } else if (hourNow > 12) {
        greeting = 'Hows it sitting?!';
    } else if (hourNow > 0){
        greeting = "Howdy good looking!";
    } else { 
        greeting = 'welcome';
    }

    document.write('<h3>' + greeting + '</h3');
}

function showPopUp(){

alert("allow myself to introduce...myself");
}

function displayButton(){


document.getElementById('11').style ='color:orange';
}

function password(){
    let answer = '';
    while (answer !== '4') {
        answer = prompt ('Hey there! What is 2+2?');
    }

}



password();
showPopUp();
displayGreeting();


document.getElementById('11').addEventListener('click',displayButton);