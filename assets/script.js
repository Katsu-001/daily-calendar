$(document).ready(function () {
  // Wrap all code that interacts with the DOM in a call to jQuery to ensure that
  // the code isn't run until the browser has finished rendering all the elements
  // in the html.

  // variables for time
  var displayedHour = dayjs().format("H");
  var currentHour = dayjs().format("H");
  var startTime = 8;
  var endTime = 16;

  createCalendar();
  updateBlockColor();

  // Updates clock
  setInterval(updateClock, 1000);

  // save button click event listener
  $(".saveBtn").on("click", function () {

  });


  // displays ctime in header
  function updateClock() {
    // Sets current time in header
    let currentTime = dayjs().format("MMMM D YYYY, h:mm:ss a");
    $("#currentTime").html(currentTime);

    // Gather current hour, for comparison to the displayed hour
    currentHour = dayjs().format("H");
    // Updates displayed hour if hour has changed
    if (currentHour != displayedHour) {
      displayedHour = currentHour;
      updateBlockColor();
    }
  }



  // creates calendar
  function createCalendar() {
    for (let i = startTime; i <= endTime; i++) {
      let calendar = document.getElementById("calendar");

      let timeBlock = document.createElement("div");
      timeBlock.setAttribute("class", "time-block row ");
      timeBlock.setAttribute("id", "hour-" + i);
      calendar.appendChild(timeBlock);

      let timeText = document.createElement("div");
      timeText.setAttribute("class", "hour col-2 col-md-1 text-center py-3");
      timeText.innerText = dayjs().hour(i).format("hA");
      timeBlock.appendChild(timeText);

      let textArea = document.createElement("textarea");
      textArea.setAttribute("class", "eventText col-8 col-md-10");
      textArea.setAttribute("rows", "3");
      timeBlock.appendChild(textArea);

      let saveButton = document.createElement("button");
      saveButton.setAttribute("class", "saveBtn btn col-2 col-md-1");
      saveButton.setAttribute("aria-label", "save");
      timeBlock.appendChild(saveButton);

      let icon = document.createElement("i");
      icon.setAttribute("class", "fas fa-save");
      icon.setAttribute("aria-hidden", "true");
      saveButton.appendChild(icon);
    }
  }

  // changes color of the block given the time
  function updateBlockColor() {
    $(".time-block").each(function () {
      // Get the hour from the id of the time block
      let calendarBlockHour = parseInt($(this).attr("id").split("-")[1]);

      // Sets Past, Present, or Future class
      if (calendarBlockHour < currentHour) {
        $(this).addClass("past");
        $(this).removeClass("present future");
      } else if (calendarBlockHour > currentHour) {
        $(this).addClass("future");
        $(this).removeClass("past present");
      } else {
        $(this).addClass("present");
        $(this).removeClass("past future");
      }
    });
  }

  // retrieves local stored data
  // function loadSavedEvents()

});
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  // -done-
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  //
  // TODO: Add code to display the current date in the header of the page.
  // -done-

