// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: Sep 2020
// This file contains the JS functions for index.html

/**
 * Displays an alert with the message "Hello, World!"
 */
function myButtonClicked() {
  document.getElementById("area-answer").innerHTML = "<p>The area is: " + (5*3) + "</p>"
  document.getElementById("perimeter-answer").innerHTML = "<p>The perimeter is: " + (2*(5+3)) + "</p>"
}
