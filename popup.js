document.addEventListener("DOMContentLoaded", function () {
  const quoteElement = document.getElementById("quote");
  const getQuoteButton = document.getElementById("getQuote");

  // Function to fetch a new inspirational quote
  function fetchQuote() {
    // You can replace this with an API call to get real quotes
    const quotes = [
      "The only way to do great work is to love what you do. - Steve Jobs",
      "Believe you can and you're halfway there. -Theodore Roosevelt",
      "It always seems impossible until it's done. - Nelson Mandela",
      // Add more quotes
    ];

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    quoteElement.textContent = randomQuote;
  }

  // Event listener for the "Get Quote" button
  getQuoteButton.addEventListener("click", fetchQuote);

  // Event listener for notification click
  chrome.notifications.onClicked.addListener(() => {
    fetchQuote(); // or any other action you want to perform when the notification is clicked
  });

  // Initial quote fetch when the popup is opened
  fetchQuote();
});
