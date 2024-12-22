document.getElementById("trip-form").addEventListener("submit", function (event) {
  event.preventDefault();
  const departureDate = document.getElementById("departure-date").value;
  const departureTime = document.getElementById("departure-time").value;
  const fromLocation = document.getElementById("destination").value;
  const toLocation = document.getElementById("location").value;

  if (!departureDate) alert("Please select a specific date.");

  if (!departureTime) alert("Please select a specific time.");

  if (fromLocation === toLocation) alert(" destinations cannot be the same.");

  console.log(`Date: ${departureDate}`);
  console.log(`Time: ${departureTime}`);
  console.log(`From: ${fromLocation}`);
  console.log(`To: ${toLocation}`);

  alert("New Trip  added successfully!");
});
