document.addEventListener("DOMContentLoaded", () => {
  // Prepopulate selected details (for demonstration purposes)
  const selectedDate = document.getElementById("selected-date");
  const selectedTime = document.getElementById("selected-time");

  // Example data population (would typically be fetched from a server or storage)
  selectedDate.textContent = "2024-12-01";
  selectedTime.textContent = "11:00 AM";

  // Enable the "Book Session" button when the form is valid
  const form = document.getElementById("user-info-form");
  const bookSessionButton = document.getElementById("book-session-btn");

  form.addEventListener("input", () => {
    const isFormValid = form.checkValidity();
    bookSessionButton.disabled = !isFormValid;
  });
});

function toggleCompanyIdField() {
  const referral = document.getElementById("referral").value;
  const companyIdField = document.getElementById("company-id-field");
  companyIdField.style.display = referral === "yes" ? "block" : "none";
}

function verifyCompanyId() {
  const companyId = document.getElementById("company-id").value;
  const verificationStatus = document.getElementById("verification-status");

  if (companyId === "12345") {
    verificationStatus.textContent = "Company ID verified!";
    verificationStatus.style.color = "green";
  } else {
    verificationStatus.textContent = "Invalid Company ID!";
    verificationStatus.style.color = "red";
  }
}

function redirectToSlotPage() {
  // Redirect to the slot and date selection page
  window.location.href = "theraphy.html"; // Replace with actual slot selection page URL
}
