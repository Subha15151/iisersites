const facts = [
    "IISER Pune and Kolkata were established in 2006.",
    "IISERs follow a flexible and research-oriented curriculum.",
    "IAT consists of 60 questions across Physics, Chemistry, Math.",
    "IISER students often publish research during their studies.",
    "IISERs accept students through IAT, JEE Advanced, and more."
];

function showFact() {
    const factText = document.getElementById('fact-text');
    const randomIndex = Math.floor(Math.random() * facts.length);
    factText.textContent = facts[randomIndex];
}

function searchContent() {
    const input = document.getElementById('search-input').value.toLowerCase();
    const sections = document.querySelectorAll('section');

    sections.forEach(section => {
        const text = section.textContent.toLowerCase();
        section.style.display = text.includes(input) ? 'block' : 'none';
    });
}

document.getElementById("calculate").addEventListener("click", () => {
  const correct = parseInt(document.getElementById("correct").value) || 0;
  const wrong = parseInt(document.getElementById("wrong").value) || 0;
  const category = document.getElementById("category").value;

  // Score calculation
  let score = correct * 3 - wrong * 1;
  if (score < 0) score = 0;

  document.getElementById("score").textContent = score;

  // Estimated rank (very basic logic, can be improved based on real data)
  let rank, round;
  if (score >= 180) {
    rank = "Top 500";
    round = "Round 1";
  } else if (score >= 150) {
    rank = "500 - 1000";
    round = "Round 2";
  } else if (score >= 120) {
    rank = "1000 - 1500";
    round = "Round 3";
  } else if (score >= 100) {
    rank = "1500 - 2000";
    round = "Round 4";
  } else if (score >= 80) {
    rank = "2000 - 3000";
    round = "Round 5";
  } else {
    rank = "3000+";
    round = "May not get in";
  }

  // Adjust for reserved categories
  if (category !== "GEN") {
    round = "Earlier Round (Category-based)";
  }

  document.getElementById("rank").textContent = rank;
  document.getElementById("rank-range").textContent = `Estimated based on score`;
  document.getElementById("round").textContent = round;
  document.getElementById("round-details").textContent =
    "Based on previous year cutoffs.";

  // Institute prediction (very basic and illustrative)
  const predictionsDiv = document.getElementById("predictions");
  predictionsDiv.innerHTML = `
    <h3>Institute-wise Predictions</h3>
    <ul>
      <li>IISER Pune: ${score >= 170 ? "High Chance" : "Low Chance"}</li>
      <li>IISER Kolkata: ${score >= 150 ? "Moderate Chance" : "Low Chance"}</li>
      <li>IISER Bhopal: ${score >= 140 ? "Good Chance" : "Less Likely"}</li>
      <li>IISER Mohali: ${score >= 130 ? "Moderate Chance" : "Low Chance"}</li>
      <li>IISER Thiruvananthapuram: ${score >= 120 ? "Good Chance" : "Low Chance"}</li>
      <li>IISER Tirupati: ${score >= 100 ? "Likely" : "Less Likely"}</li>
      <li>IISER Berhampur: ${score >= 80 ? "High Chance" : "Waitlist"}</li>
    </ul>
  `;
});


document.getElementById("question-form").addEventListener("submit", function (e) {
  e.preventDefault();
  const message = document.getElementById("confirmation-message");
  message.style.display = "block";

  // Optionally clear the form
  document.getElementById("user-question").value = "";

  // Hide the message after a few seconds
  setTimeout(() => {
    message.style.display = "none";
  }, 5000);
});
