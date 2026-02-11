const wrapped = {
  name: 'You',
  totalHours: 931,
  titlesFinished: 142,
  longestStreak: 23,
  topGenre: 'Sci-Fi Thriller',
  topShows: [
    {
      title: '3 Body Problem',
      watchTime: '74h',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/1/10/3_Body_Problem_series_poster.jpg'
    },
    {
      title: 'Arcane',
      watchTime: '66h',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/0/00/Arcane_2021_poster.jpg'
    },
    {
      title: 'Dark',
      watchTime: '57h',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/d/da/DarkNetflixPosterEnglish.jpg'
    },
    {
      title: 'Stranger Things',
      watchTime: '42h',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/f/f7/Stranger_Things_season_4.jpg'
    },
    {
      title: 'Baby Reindeer',
      watchTime: '38h',
      poster:
        'https://upload.wikimedia.org/wikipedia/en/0/0d/Baby_Reindeer_title_card.png'
    }
  ],
  timeline: [
    ['Winter Arc', 'Finished 5 series in January.'],
    ['Midnight Mode', '63% sessions started after 11PM.'],
    ['Summer Sprint', '18 episodes watched in one weekend.'],
    ['Finale Season', 'November became your rewatch month.']
  ],
  mood: ['High stakes', 'Twisty plots', 'Mind-benders', 'Dark humor']
};

const slides = [
  {
    title: `${wrapped.name}, your binge era was cinematic.`,
    subtitle: 'A premium rewind in the official Netflix red + black aesthetic.',
    content: `
      <section class="stats-grid">
        <article class="metric full"><span>Total watch time</span><strong>${wrapped.totalHours}h</strong></article>
        <article class="metric"><span>Titles finished</span><strong>${wrapped.titlesFinished}</strong></article>
        <article class="metric"><span>Longest streak</span><strong>${wrapped.longestStreak} days</strong></article>
        <article class="metric full"><span>Signature genre</span><strong>${wrapped.topGenre}</strong></article>
      </section>
    `
  },
  {
    title: 'Your Top 5 Shows',
    subtitle: 'Each title now includes its poster image.',
    content: `
      <ol class="show-list">
        ${wrapped.topShows
          .map(
            (show, i) => `
          <li class="show-item">
            <strong class="show-rank">#${i + 1}</strong>
            <img class="poster" src="${show.poster}" alt="${show.title} poster" loading="lazy" />
            <div>
              <h3>${show.title}</h3>
              <p>${show.watchTime} watched</p>
            </div>
          </li>`
          )
          .join('')}
      </ol>
    `
  },
  {
    title: 'Your Binge Timeline',
    subtitle: 'Where your streaming energy peaked.',
    content: `
      <ul class="timeline">
        ${wrapped.timeline.map((t) => `<li><h3>${t[0]}</h3><p>${t[1]}</p></li>`).join('')}
      </ul>
    `
  },
  {
    title: 'Mood Profile: The Adrenaline Oracle 🔮',
    subtitle: 'You chase tension, payoff, and “one more episode” endings.',
    content: `
      <div class="chips">${wrapped.mood.map((m) => `<span class="chip">${m}</span>`).join('')}</div>
      <section class="stats-grid">
        <article class="metric"><span>Late-night sessions</span><strong>63%</strong></article>
        <article class="metric"><span>Plot-twist tolerance</span><strong>Elite</strong></article>
      </section>
    `
  }
];

let index = 0;

const slideCard = document.getElementById('slideCard');
const dots = document.getElementById('dots');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function render() {
  const slide = slides[index];
  slideCard.innerHTML = `
    <p class="eyebrow">NETFLIX WRAPPED 2025</p>
    <h1>${slide.title}</h1>
    <p class="subtitle">${slide.subtitle}</p>
    ${slide.content}
  `;

  dots.innerHTML = slides
    .map((_, i) => `<span class="dot ${i === index ? 'active' : ''}"></span>`)
    .join('');

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === slides.length - 1;
}

prevBtn.addEventListener('click', () => {
  index = Math.max(0, index - 1);
  render();
});

nextBtn.addEventListener('click', () => {
  index = Math.min(slides.length - 1, index + 1);
  render();
});

render();
