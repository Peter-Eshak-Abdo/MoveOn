document.getElementById('trip-form').addEventListener('submit', function(event) {
    event.preventDefault(); 
    const departureDate = document.getElementById('departure-date').value;
    const departureTime = document.getElementById('departure-time').value;
    const fromLocation = document.getElementById('destination').value;
    const toLocation = document.getElementById('location').value;

   
    if (!departureDate) {
        alert('Please select a specific date.');
        return;
    }

    if (!departureTime) {
        alert('Please select a specific time.');
        return;
    }

    if (fromLocation === toLocation) {
        alert(' destinations cannot be the same.');
        return;
    }

    console.log(`Date: ${departureDate}`);
    console.log(`Time: ${departureTime}`);
    console.log(`From: ${fromLocation}`);
    console.log(`To: ${toLocation}`);

    
    alert('New Trip  added successfully!');

  
});
