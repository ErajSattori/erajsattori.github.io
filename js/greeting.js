/*

  This script displays a greeting to the user based on current time.
  Created by Eraj Sattori.
*/

var today = new Date();
var hourNow = today.getHours();
var greeting;


if (hourNow > 16) {
  greeting = 'Good Evening!';
} else if (hourNow > 11) {
  greeting = 'Good Afternoon!';
} else if (hourNow > 5) {
  greeting = 'Good Morning!';
} else {
  greeting = 'Good Evening!';
}

document.write(greeting + ' I am...<br />');
