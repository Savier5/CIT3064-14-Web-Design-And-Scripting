"use strict";

/*
   New Perspectives on HTML5 and CSS3, 8th Edition
   Tutorial 10
   Review Assignment

   Author: Savier Osman 
   Date:   10/18/2022

	
*/

// Set the date displayed in the calendar
var thisDay = new Date("October 1, 2021");

// write the HTML code for the event list table
var tableHTML = "<table id='eventTable'>";
tableHTML += "<caption>Upcoming Events</caption>";
tableHTML += "<tr><th>Date</th><th>Event</th><th>Price</th></tr>";

// Set the end date for the event list two weeks from the current date
var endDate = new Date(thisDay.getTime() + 14 * 24 * 60 * 60 * 1000);

// Loop through the eventDates array
for (var i = 0; i < eventDates.length; i++) {
   var eventDate = new Date(eventDates[i]);
   var eventDay = eventDate.toDateString();
   var eventTime = eventDate.toLocaleTimeString();

   // If the event date is within the two-week window, display it on the page
   if (thisDay <= eventDate && eventDate <= endDate) {
      tableHTML += "<tr>";
      tableHTML += "<td>" + eventDay + " @ " + eventTime + "</td>";
      tableHTML += "<td>" + eventDescriptions[i] + "</td>";
      tableHTML += "<td>" + eventPrices[i] + "</td>";
      tableHTML += "</tr>";
   }
}

tableHTML += "</table>";

// Write the HTML code into the eventList box
document.getElementById("eventList").innerHTML = tableHTML;
