var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
        greeting = 'Heyyoo';
    } else if (hourNow > 12) {
        greeting = 'Hows it sitting?!';
    } else if (hourNow > 0){
        greeting = "Howdy good looking!";
    } else { 
        greeting = 'welcome';
    }

    document.write('<h3>' + greeting + '</h3');