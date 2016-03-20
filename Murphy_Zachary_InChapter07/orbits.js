/*      JavaScript 6th Edition
      Chapter 7
      Chapter case

      Outer Orbits booking page
      Author: Zach Murphy
      Date:   3-20-2016

      Filename: orbits.js
	  */
"use strict";

var dateObject = new Date();

function displayCalendar(whichMonth) {
	var date;
	var dateToday = new Date();
	var dayOfWeek;
	var daysInMonth;
	var dateCells;
	var captionValue;
	var month;
	var year;
	var monthArray = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	if(whichMonth === -1){
		dateObject.setMonth(dateObject.getMonth()-1);
		
	}else if(whichMonth === 1){
		dateObject.setMonth(dateObject.getMonth()-1);
	}
	month = dateObject.getMonth();
	year = dateObject.getFullYear();
	dateObject.setDate(1);
	dayOfWeek = dateObject.getDay();
	captionValue = monthArray[month] +" " + year;
	document.querySelector("#cal table caption").innerHTML = captionValue;
	if (month === 0 || month ===1 || month === 2 || month === 3 || month === 4 || month === 5 || month === 6 || month === 7 || month === 8 || month === 9 || month === 10 || month === 11){
		daysInMonth = 31;
		
	}else if (month === 1){
		if (year % 4 === 0){
			if(year % 100 === 0){
				if(year % 400 === 0){
					daysInMonth = 29
				}else{
					daysInMonth=28;
				}
			}else{
				daysInMonth = 29;
			}
		}else{ 
		daysInMonth = 28;
		}
	}else{
		daysInMonth = 30;
	}
	dateCells = document.getElementsByTagName("td");
	for(var i = 0; i < dateCells.length; i++){
		//clear existing table dates
		dateCells[i].innerHTML = "";
		dateCells[i].className = "";
	}
	for(var i = dayOfWeek; i < daysInMonth + dayOfWeek; i++){
		//add dates to days cells
		dateCells[i].innerHTML = dateObject.getDate();
		dateCells[i].className = "date";
		if(dateToday < dateObject){
			dateCells[i].className = "futuredate";
		}
		date = dateObject.getDate() + 1
		dateObject.setDate(date);
		
	}
	dateObject.setMonth(dateObject.getMonth() - 1);
	//rest month to shown
	document.getElementById("cal").style.display = "block";
	
    }
	
	function selectDate(event){
		if(event === undefined){
			event = window.event;
		}
		var callerElement = event.target || event.srcElement;
		if(callerElement.innerHTML ===""){
			//cell contains no date, so don't close the calendar
			document.getElementById("cal").style.display = "block";
			return false;
		}
		dateObject.setDate(callerElement.innerHTML);
		
		var fullDateToday = new Date();
		var dateToday = Date.UTC(fullDateToday.getFullYear(), fullDateToday.getMonth(), fullDateToday.getDate());
		var selectedDate = Date.UTC(dateObject.getFullYear(), dateObject.getMonth(), dateObject.getDate());
		if(selectedDate <= dateToday){
			document.getElementById("cal").style.display = "block";
			return false;
		}
		document.getElementById("tripDate").value = dateObject.toLocaleDateString();
		hideCalendar();
	}

	function hideCalendar(){
		document.getElementById("cal").style.display = "none";
		
	}
	
    function createEventListeners() {
		var dateField = document.getElementById("tripDate");
		if(dateField.addEventListener){
			dateField.addEventListener("click", displayCalendar, false);
		} else if (dateField.attachEvent){
			dateField.attachEvent("onclick", displayCalendar);
		}
		
		var dateCells = document.getElementsByTagName("td");
		if(dateCells[0].addEventListener){
			for(var i = 0; i < dateCells.length; i++){
				dateCells[i].addEventListener("click", selectDate, false);
			}
		}else if(dateCells[0].attachEvent){
			for(var i = 0; i < dateCells.length; i++){
				dateCells[i].attachEvent("onclick", selectDate);
			}
		}
		var closeButton = document.getElementById("close");
		if(closeButton.addEventListener){
			closeButton.addEventListener("click", hideCalendar, false);
		}else if(closeButton.attachEvent){
			closeButton.attachEvent("onclick", hideCalendar);
		}
	}
	
	if(window.addEventListener){
		window.addEventListener("load", createEventListeners, false);
		
	}else if(window.attachEvent){
		window.attachEvent("onload", createEventListeners);
	}
	