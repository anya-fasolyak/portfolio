// ========================================
// Your JavaScript goes here
// ========================================

// If you want to use the toggleClass
// function, uncomment the function below
// and replace '.myClass' and
// 'class-to-toggle' with your own data.
// Both parameters must be in quotes.

// toggleClass('.myClass', 'class-to-toggle')

"use strict";

//Menu

function toggleMenu() {
  var menuBox = document.getElementById('links');    
  if(links.style.display == "none" || links.style.display == "") {
    menu.innerHTML = "CLOSE";
    links.style.display = "block";
  }
  else { 
    menu.innerHTML = "MENU";
    links.style.display = "none";
  }
}
