// Retrieve the event key and panic link from local storage or use defaults
var eventKey = localStorage.getItem("eventKey") || "`";
var panicLink = localStorage.getItem("panicLink") || "https://classroom.google.com/";

// Function to handle keydown event
document.addEventListener("keydown", function(event) {
  if (event.key === eventKey) {
    if (window.self !== window.top) {
      window.parent.location.href = panicLink;
    } else {
      window.location.href = panicLink;
    }
  }
});

// Get eventKeyInput and linkInput elements by their IDs
var eventKeyInput = document.getElementById("eventKeyInput");
var linkInput = document.getElementById("linkInput");

// Add event listeners to update eventKey and panicLink when input changes
eventKeyInput.addEventListener("input", function() {
  eventKey = eventKeyInput.value;
});

linkInput.addEventListener("input", function() {
  panicLink = linkInput.value;
});

// Function to save eventKey and panicLink to local storage
function saveEventKey() {
  eventKey = eventKeyInput.value;
  localStorage.setItem("eventKey", eventKey);
  localStorage.setItem("panicLink", panicLink);
}
