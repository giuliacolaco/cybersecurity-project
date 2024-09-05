// Function to show a specific page and hide the others
function showPage(pageId) {
  // Hide all pages
  document.querySelectorAll("#all-pages > div").forEach(function (page) {
    page.style.display = "none";
  });
  // Show the selected page
  document.getElementById(pageId).style.display = "block";
  window.scrollTo(0, 0);
}

// Button click events to switch pages
document.getElementById("start-button").addEventListener("click", function () {
  showPage("vishing-page");
});

document
  .getElementById("next-button-vishing")
  .addEventListener("click", function () {
    showPage("quiz-page");
  });

document
  .getElementById("submit-vishing")
  .addEventListener("click", function () {
    document.getElementById("sub-vishing").innerHTML =
      "All of the answers may be vishing, so be careful!";
  });

document
  .getElementById("next-button-quiz")
  .addEventListener("click", function () {
    showPage("explanation-page1");
  });

document
  .getElementById("next-button-explanation1")
  .addEventListener("click", function () {
    showPage("ai-page");
  });

document
  .getElementById("next-button-ai")
  .addEventListener("click", function () {
    showPage("quiz-page2");
  });

document.getElementById("submit-ai").addEventListener("click", function () {
  document.getElementById("sub-ai").innerHTML =
    "Look closely at letter B... See how it looks more digital?";
});

document
  .getElementById("next-button-quiz2")
  .addEventListener("click", function () {
    showPage("explanation-page2");
  });

document
  .getElementById("next-button-explanation2")
  .addEventListener("click", function () {
    showPage("last-page");
  });

document.getElementById("restart").addEventListener("click", function () {
  showPage("introduction-page"); // Restart to the introduction page
});
