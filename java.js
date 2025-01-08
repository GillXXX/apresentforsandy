
onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };
  // Set the target date for the countdown
const targetDate = new Date("January 9, 2025 00:00:00").getTime();

// Function to update the countdown
function updateCountdown() {
  const now = new Date().getTime();
  const timeLeft = targetDate - now;

  const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

  // Display the countdown
  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;

  // If the countdown is over, display a message
  if (timeLeft < 0) {
    clearInterval(timerInterval);
    document.getElementById("timer").innerHTML = "Happy Birthday!";
  }
}

// Update the countdown every second
const timerInterval = setInterval(updateCountdown, 1000);

// Initial call to display the countdown immediately
updateCountdown();
