// script.js
document.getElementById("searchForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission
    let query = document.getElementById("searchQuery").value; // Get search query
    let searchUrl = "https://www.google.com/search?q=" + encodeURIComponent(query); // Create search URL
    window.location.href = searchUrl; // Redirect to Google with the search query
});
