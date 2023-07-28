// ˏˋ°•*⁀➷ imports.
import './style.css';

// ˏˋ°•*⁀➷ dom setup & variables.
let healthLevelElement = document.getElementById('healthLevel');
let totalTimeInSeconds = 10;
let updateIntervalInMilliseconds = 1000;

let messageDiv = document.getElementById("user-message");
let feedButton = document.getElementById("feed-button");
feedButton.addEventListener("click", onFeed);

let currentTimeInSeconds = totalTimeInSeconds;

function updateHealthBar() {
  let percentage = (currentTimeInSeconds / totalTimeInSeconds) * 100;
  healthLevelElement.style.width = percentage + '%';
  currentTimeInSeconds--;

  // ˏˋ°•*⁀➷ Inform the user when larmf is hungry.
  if (percentage === 0) {
    messageDiv.innerText = "Your larmf is hungry!";
  }
}

let interval = setInterval(updateHealthBar, updateIntervalInMilliseconds);


// ˏˋ°•*⁀➷ Feeding the larmf resets the health bar to full.
function onFeed() {
  messageDiv.innerText = "";

  currentTimeInSeconds = totalTimeInSeconds;
  clearInterval(interval);
  interval = setInterval(updateHealthBar, updateIntervalInMilliseconds);
}

