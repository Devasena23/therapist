function updatePrice(sessionType, duration) {
  // Update the price dynamically based on session type and duration
  const priceElement = document.getElementById(`${sessionType}-price`);
  let basePrice = 3200; // Default price for 45 mins
  if (duration === 60) basePrice = 4000; // Adjust as per requirement
  if (duration === 90) basePrice = 5000; // Adjust as per requirement
  priceElement.textContent = basePrice;

  // Handle button active state
  const card = document.getElementById(`${sessionType}-therapy`);
  const buttons = card.querySelectorAll('.duration-btn');

  buttons.forEach((button) => {
    if (parseInt(button.textContent) === duration) {
      button.classList.add('active');
    } else {
      button.classList.remove('active');
    }
  });
}
function closeInfoBox() {
  const infoBox = document.getElementById('info-box');
  infoBox.style.display = 'none';  // Hide the info box
}

function proceed(therapyType) {
  const priceElement = document.getElementById(`${therapyType}-price`);
  const price = priceElement.textContent;
  const sessionDetails = {
    type: therapyType.charAt(0).toUpperCase() + therapyType.slice(1),
    price: `₹${price}`,
  };

  // Store the session details in localStorage
  localStorage.setItem("selectedSession", JSON.stringify(sessionDetails));

  // Redirect to the next page
  window.location.href = "theraphy.html";
}

function goBack() {
  // Logic for back navigation
  window.history.back();
}
