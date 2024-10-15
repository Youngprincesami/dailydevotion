const cardData = [
  {
    id: 1,
    name: "open-heaven",
    title: "The mystery of our faith",
    date: "Friday November 1",
    memoryVerse:
      "Memorise: And said, verily say unto you, Except ye be converted,And become as little children, ye shall not enter the kingdom of heaven.",
    bibleverse: "Matthew 18:3",
    image: "/imgs/pastor-e-a-adeboye-1.webp"
  },
  {
    id: 2,
    name: "sunday-school",
    date: "Friday November 1",
    title: "Lesson 10: Divine resistance",
    memoryVerse:
      "Memorise: And said, verily  say unto you, Except ye be converted, And  become as little children, ye shall not enter the kingdom of heaven.",
    bibleverse: "James 4:6",
    image: "/imgs/sundayschpic.jpg"
  },

  {
    id: 3,
    name: "house-fellowship",
    title: "house fellowship",
    date: "Friday November 1",
    memoryVerse:
      "Memorise: And said, verily  say unto you, Except ye be converted, And  become as  little children, ye shall not enter the  kingdom of heaven.",
    bibleverse: "James 4:6",
    image: "/imgs/housefellowship.png"
  },
  {
    id: 3,
    name: "house-fellowship",
    title: "house fellowship",
    date: "Friday November 1",
    memoryVerse:
      "Memorise: And said, verily  say unto you, Except ye be converted, And become as  little children, ye shall not enter the  kingdom of heaven.",
    bibleverse: "James 4:6",
    image: "/imgs/housefellowship.png"
  }
];

//  load cards
let html = "";

cardData.forEach((card) => {
  html += `
  <div class="wrapper-card">
    <section class="card">
      <figure class="card-fig">
         <a href="${card.name}.html"><img src="${card.image}" alt="${card.image}" /></a>
      </figure>
      <h3 class="word-center">${card.title}</h3>
      <p class="date">${card.date}</p>
      <p class="card-memo">${card.memoryVerse}<span class="bible-verse">${card.bibleverse}</span></p>  <button>Read more</button>
   </div>`;
});

document.querySelector(".card-grid").innerHTML = html;
