/*      JavaScript 6th Edition
      Chapter 7
      7-4

      Outer Orbits booking page
      Author: Zach Murphy
      Date:   3-20-2016

      Filename: script.js
	  */

"use strict";
 
 //global variabe, and empty object
 var delivInfo = {};
 
 //global variable, points to the element with the id value
 
 var delivSummary = document.getElementById("deliverTo");
 
 // this function will add the value of each input field to the delivInfo object as a property
 function processDeliveryInfo()
 {
	 var prop;
	 
	 //add statements that store values into the delivInfo object and various properties
	 delivInfo.name = document.getElementById("nameinput").value;
	 delivInfo.addr = document.getElementById("addrinput").value;
	 delivInfo.city = document.getElementById("cityinput").value;
	 delivInfo.email = document.getElementById("emailinput").value;
	 delivInfo.phone = document.getElementById("phoneinput").value;
	 
	 //add a for/in Loop with a subsequent statements
	 for (prop in delivInfo)
	 {
		 //This statement adds the value of the current property to the content of the deliverTo element
		 delivSummary.innerHTML += "<p>" + delivInfo[prop] + "</p>";
	 }
		//change the display style of this section to block
		document.getElementById("deliverTo").style.display = "block";
 }
 //function
 function previewOrder()
 {
	 //a function call
	 processDeliveryInfo();
	 //change the display style of this section to block
	 document.getElementsByTagName("section")[0].style.display = "block";
 }
 
 //create event listener that calls the prevewOrder function
 function createEventListener()
 {
	 var previewBtn = document.getElementById("previewBtn");
	 if (previewBtn.addEventListener)
	 {
		 previewBtn.addEventListener("click", previewOrder, false);
	 }
	 else if (previewBtn.attachEvent)
	 {
		 previewBtn.attachEvent("onclick", previewOrder);
	 }
 }
 
 //create event listener when page finishes loading
 if (window.addEventListener)
 {
	 window.addEventListener("load", createEventListener, false);
 }
 else if (window.attachEvent)
 {
	 window.attachEvent("onload", createEventListener);
 }
 