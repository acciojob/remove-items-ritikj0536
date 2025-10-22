//your JS code here. If required.
// Get references to the dropdown and button
const colorSelect = document.getElementById("colorSelect");
const button = document.querySelector('input[type="button"]');

// Add event listener to the button
button.addEventListener("click", () => {
  // Get the selected index from dropdown
  const selectedIndex = colorSelect.selectedIndex;

  // If something is selected, remove it
  if (selectedIndex !== -1) {
    colorSelect.remove(selectedIndex);
  }
});
