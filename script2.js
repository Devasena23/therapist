window.onload = function () {
  const sessionDetails = JSON.parse(localStorage.getItem("selectedSession"));

  if (sessionDetails) {
    const headerElement = document.querySelector(".header h2");
    headerElement.textContent = `Selected: ${sessionDetails.type} (${sessionDetails.price})`;
  }
};
// Handle Therapy Mode Selection
document.getElementById('mode-in-person').addEventListener('click', function() {
  selectMode('in-person');
});

document.getElementById('mode-video').addEventListener('click', function() {
  selectMode('video');
});

document.getElementById('mode-call').addEventListener('click', function() {
  selectMode('call');
});

function selectMode(mode) {
  // Remove active class from all modes
  const modes = document.querySelectorAll('.mode');
  modes.forEach(m => m.classList.remove('active'));

  // Add active class to selected mode
  document.getElementById(`mode-${mode}`).classList.add('active');

  // Show the corresponding slots for the selected mode
  showSlotsForMode(mode);
}

function showSlotsForMode(mode) {
  const slotGroup = document.getElementById('slot-group');
  slotGroup.innerHTML = '';  // Clear any existing slots

  // Define available slots for each mode
  let slots = [];
  if (mode === 'in-person') {
    slots = ['8:00 - 8:45 AM', '9:00 - 9:45 AM', '10:00 - 10:45 AM', '11:00 - 11:45 AM'];
  } else if (mode === 'video') {
    slots = ['12:00 - 12:45 PM', '2:00 - 2:45 PM', '4:00 - 4:45 PM'];
  } else if (mode === 'call') {
    slots = ['3:00 - 3:45 PM', '5:00 - 5:45 PM', '7:00 - 7:45 PM'];
  }

  // Display the available slots
  slots.forEach(slot => {
    const slotDiv = document.createElement('div');
    slotDiv.classList.add('slot');
    slotDiv.textContent = slot;
    slotDiv.onclick = function() { selectSlot(slot); };
    slotGroup.appendChild(slotDiv);
  });
}

function selectSlot(slot) {
  // Highlight the selected slot
  const slots = document.querySelectorAll('.slot');
  slots.forEach(s => s.classList.remove('selected'));
  const selectedSlot = Array.from(slots).find(s => s.textContent === slot);
  selectedSlot.classList.add('selected');

  // Enable the "Proceed" button
  document.getElementById('proceed-btn').disabled = false;
}

// Handle date selection
const dates = document.querySelectorAll('.calendar .date');

dates.forEach(date => {
  date.addEventListener('click', () => {
    // Remove "selected" class from all dates
    dates.forEach(d => d.classList.remove('selected'));
    
    // Add "selected" class to clicked date
    date.classList.add('selected');

    // Enable the Proceed button if both date and slot are selected
    checkProceedButtonStatus();
  });
});

function checkProceedButtonStatus() {
  const selectedSlot = document.querySelector('.slots .slot.selected');
  const selectedDate = document.querySelector('.calendar .date.selected');
  
  const proceedButton = document.querySelector('.proceed-btn');
  
  if (selectedSlot && selectedDate) {
    proceedButton.classList.add('active');
    proceedButton.disabled = false;
  } else {
    proceedButton.classList.remove('active');
    proceedButton.disabled = true;
  }
}
function goHome() {
  window.location.href = "book.html";  // Replace with your home page URL
}

