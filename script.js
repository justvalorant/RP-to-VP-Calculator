const VP_PER_RP = 70;

function convertRPtoVP() {
  const rpValue = document.getElementById("rpInput").value;
  if (rpValue && rpValue > 0) {
    const vpResult = rpValue * VP_PER_RP;

    // Set modal content
    document.getElementById("modalTitle").textContent =
      "Conversion Successful!";
    document.getElementById(
      "modalMessage"
    ).textContent = `You entered: ${rpValue} RP! This is approximately worth: ${vpResult} VP!`;

    // Show the modal
    document.getElementById("modal").style.display = "block";

    // Display the result and show the back button
    document.getElementById(
      "result"
    ).textContent = `${rpValue} RP is approximately worth ${vpResult} VP`;
    document.getElementById("backButton").style.display = "block"; // Show the back button
  } else {
    document.getElementById("result").textContent =
      "Please enter a valid RP amount.";
    document.getElementById("backButton").style.display = "none"; // Hide the back button if invalid input
  }
}

// Function to close the modal
function closeModal() {
  document.getElementById("modal").style.display = "none"; // Hide the modal
}

// Function to go back
function goBack() {
  document.getElementById("rpInput").value = ""; // Clear the input field
  document.getElementById("result").textContent = ""; // Clear the result
  document.getElementById("backButton").style.display = "none"; // Hide the back button
  document.getElementById("rpInput").focus(); // Focus back on the input field
}
