// This is the javascript for my TestWebsite

/*
var food = 'ice cream'
var sentence1 = 'This is a '+ food;

var num = 3
var sentence2 = 'I have ' + num + ' cups of coffee a day';
console.log(sentence2)




//Functions
function checkresults(num, place) {

var step1 = 'hold onto ';
var step2 = 'the rail ' + num + ' times at ' + place;

  console.log(step1 + step2)
}


checkresults(5, 'Tsim Sha Tsui');
*/

//HTML and JS

var btn = $('.btn');
var box = $('.box');

btn.on ('click', function () {

  box.html ("This is not a place for you");
  //box.hide()
  box.toggle();

});

//console.log(btn);




console.log('testing');
