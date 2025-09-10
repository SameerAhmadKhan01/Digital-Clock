const clock = document.getElementById("clock");
const toggleFormat = document.getElementById("toggle-format");

let use24Hour = false;

toggleFormat.addEventListener("change", function () {
  use24Hour = this.checked;
});

function updateClock() {
  const now = new Date();
  let hours = now.getHours();
  let minutes = now.getMinutes();
  let seconds = now.getSeconds();

  let ampm = "";
  if (!use24Hour) {
    ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12; // Convert 0 to 12
  }

  // Pad with zeroes
  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");

  let timeString = `${hours}:${minutes}:${seconds}`;
  if (!use24Hour) timeString += ` ${ampm}`;

  clock.textContent = timeString;
}

// Initial call and interval
updateClock();
setInterval(updateClock, 1000);
