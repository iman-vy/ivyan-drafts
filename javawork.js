const books = [
  {
    image: "img/page4-img/Untitled design (11).png",
    title: "Princess Maisarah",
    desc: "SAYA SANGAT SUKAAA STORY NI!!! Tak tahu nak cakap apa dah 😭 Princess Maisarah really hit different. Jalan cerita dia deep gila, ending dia buat I pause kejap. Kak Lio, you nailed it 🫶🏻 Kalau sejarah tu boleh buat orang nangis, this is it. Hands down one of my favs 🩷",
    rating: "5.0",
    stars: "★★★★★"
  },
  {
    image: "img/page4-img/8.png",
    title: "Dia Lakaran Indah",
    desc: "Story dia quite light and easy to follow. Typical kahwin paksa trope with some Islamic values thrown in. Akania & Ameer punya chemistry tu ada, but some scenes feel a bit cliché and overdone. Ada part yang maybe a bit too much or uncomfortable for certain readers. Tapi overall, not bad if you’re into mellow drama and chill romance. However, still one of my best trope!",
    rating: "4.5",
    stars: "★★★★☆"
  },
  {
    image: "img/page4-img/4.png",
    title: "Chef's Cuisine",
    desc: "Zafrael x Dyra = chaos gila 😭 dari enemy jadi partner, then tiba-tiba twist dia bukan biasa-biasa—like whattt?? Nak romance, dapat. Nak laugh, dapat. Nak trauma? Pun dia bagi 🤡 Ending dia betul-betul chef's kiss. Kak Effa ni psycho tau, suka main emosi kita.",
    rating: "4.9",
    stars: "★★★★★"
  },
  {
    image: "img/page4-img/2.png",
    title: "Qaid: The Unknown",
    desc: "Dari tajuk pun dah tahu Qaid ni mysterious kan—tapi siapa sangka dark macam tu? Hahah I swear baca ni rasa macam tengah solve crime series tapi ada cinta, ada trauma, ada unexpected side dari semua watak. Bila fikir dah settle, kak Effa campak satu twist lagi. Macam… “eh apa niii 😭😭😭",
    rating: "4.7",
    stars: "★★★★☆"
  },
	{
    image: "img/page4-img/6.png",
    title: "Twin's Territory",
    desc: "This one serious wild. Bila main story pasal kembar, dah tahu something sus. Tapi kak Effa tak kasi clue senang—plot dia macam roller coaster, kejap atas kejap bawah, pastu jatuh terus. Watak semua ada depth, and twist dia memang buat aku kena stop baca kejap. Like... mindblown wey. Bukan typical love story langsung.",
    rating: "4.7",
    stars: "★★★★☆"
  },
];

let index = 0;

function updateBookDisplay() {
  const book = books[index];
  document.getElementById("book-image").src = book.image;
  document.getElementById("book-title").textContent = book.title;
  document.getElementById("book-desc").textContent = book.desc;
  document.getElementById("book-rating").textContent = book.rating;
  document.getElementById("book-stars").textContent = book.stars;
}

document.querySelector(".left-btn").addEventListener("click", () => {
  index = (index - 1 + books.length) % books.length;
  updateBookDisplay();
});

document.querySelector(".right-btn").addEventListener("click", () => {
  index = (index + 1) % books.length;
  updateBookDisplay();
});

// Init on load
updateBookDisplay();
