// background.js

// Set up a daily alarm to trigger a notification
chrome.alarms.create("dailyNotification", {
  periodInMinutes: 24 * 60, // 24 hours
  when: Date.now() + 10000, // Schedule the first notification 10 seconds from now
});

// Event listener for the alarm
chrome.alarms.onAlarm.addListener((alarm) => {
  if (alarm.name === "dailyNotification") {
    showDailyNotification();
  }
});

// Function to show the daily notification
function showDailyNotification() {
  // You can fetch a quote or use a stored one
  const notificationMessage =
    "Here's your daily dose of inspiration: [Your Daily Quote]";

  chrome.notifications.create({
    type: "basic",
    iconUrl: "images/icon48.png",
    title: "QuoteQuest",
    message: notificationMessage,
  });
}
