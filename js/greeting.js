/*

  This script displays a greeting to the user based on current time.
  Created by Eraj Sattori.
*/

var today = new Date();
var hourNow = today.getHours();
var greeting;


if (hourNow > 17) {
  greeting = 'Good Evening!';
} else if (hourNow > 12) {
  greeting = 'Good Afternoon!';
} else if (hourNow > 0) {
  greeting = 'Good Morning!';
} else {
  greeting = 'Hey!';
}

document.write(greeting + ' I am...<br />');