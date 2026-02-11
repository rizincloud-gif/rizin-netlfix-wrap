const wrappedData = {
  hoursWatched: 842,
  titlesCompleted: 113,
  longestStreakDays: 19,
  topGenre: "Sci‑Fi Thriller",
  bingeWindows: [
    { period: "Jan 6–12", details: "38 episodes, led by The Night Agent marathon" },
    { period: "Apr 22–28", details: "26 hours watched after 11 PM" },
    { period: "Aug 14–20", details: "Finished 3 limited series in one week" },
    { period: "Nov 2–9", details: "Your holiday comfort rewatch sprint" }
  ],
  topShows: [
    "3 Body Problem",
    "Baby Reindeer",
    "Arcane",
    "Stranger Things",
    "Dark"
  ],
  vibes: ["Mind-bending", "Fast-paced", "Dark humor", "Plot twists"]
};

const stats = [
  ["Hours Watched", `${wrappedData.hoursWatched}h`],
  ["Titles Completed", wrappedData.titlesCompleted],
  ["Longest Streak", `${wrappedData.longestStreakDays} days`],
  ["Top Genre", wrappedData.topGenre]
];

const statsGrid = document.getElementById("statsGrid");
stats.forEach(([label, value], index) => {
  const card = document.createElement("article");
  card.className = "stat-card";
  card.style.animationDelay = `${index * 120}ms`;
  card.innerHTML = `<p class="label">${label}</p><p class="value">${value}</p>`;
  statsGrid.appendChild(card);
});

const timeline = document.getElementById("bingeTimeline");
wrappedData.bingeWindows.forEach((entry) => {
  const li = document.createElement("li");
  li.innerHTML = `<strong>${entry.period}</strong><br /><span>${entry.details}</span>`;
  timeline.appendChild(li);
});

const showList = document.getElementById("topShows");
wrappedData.topShows.forEach((show) => {
  const li = document.createElement("li");
  li.textContent = show;
  showList.appendChild(li);
});

const recommendation = document.getElementById("recommendation");
recommendation.innerHTML = `
  <h3>Your 2026 Mood Profile: The Adrenaline Oracle 🔮</h3>
  <p>You chase stories with high stakes and emotional payoff. Keep the dopamine rolling with gritty mysteries, cerebral sci‑fi, and short serial dramas.</p>
  <div>${wrappedData.vibes.map((vibe) => `<span class="chip">${vibe}</span>`).join("")}</div>
`;
