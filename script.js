const facts = [
    "IISER Pune and Kolkata were established in 2006.",
    "IISERs follow a flexible and research-oriented curriculum.",
    "IAT consists of 60 questions across Physics, Chemistry, Math.",
    "IISER students often publish research during their studies.",
    "IISERs accept students through IAT, JEE Advanced, and more."
];

function showFact() {
    const index = Math.floor(Math.random() * facts.length);
    document.getElementById("fact-text").textContent = facts[index];
}