// Copyright (c) 2022 Brayden Blank All rights reserved
//
// Created by: Brayden Blank
// Created on: Apr 2022
// This file contains the JS functions for index.html

"use strict";

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit-5-03-HTML/sw.js", {
    scope: "/ICS2O-Unit-5-03-HTML/",
  });
}

// This function determines what rating of a movie somebody can watch

function determineClicked(){
  var underThirteen = document.getElementById("under-thirteen")
  var thirteenToSixteen = document.getElementById("thirteen-to-sixteen")
  var seventeenOrOlder = document.getElementById("seventeen-or-older")
  
  if (underThirteen.checked == true) {
    document.getElementById("rating-choice").innerHTML = 
      "You can see a G rated movie!"
  } 
  else if (thirteenToSixteen.checked == true) {
    document.getElementById("rating-choice").innerHTML = 
      "You can see a PG13 movie!"
  }
  else if (seventeenOrOlder.checked == true) {
    document.getElementById("rating-choice").innerHTML = 
      "You can see an R rated movie!"
  }
  else 
    document.getElementById("rating-choice").innerHTML =
      "Please input an age"
}