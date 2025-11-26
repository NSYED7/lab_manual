document.addEventListener("DOMContentLoaded", () => {

  let facts = [
    "BTS debuted on June 13, 2013.",
    "RM learned English by watching 'Friends'.",
    "Jungkook is the youngest member of BTS.",
    "BTS was the first K-pop group to speak at the UN.",
    "Jin's nickname is 'Worldwide Handsome'.",
    "BTS ARMY was officially named on July 9, 2013.",
    "J-Hope is known for his amazing dance skills.",
    "V’s real name is Kim Taehyung.",
    "Suga's stage name means 'Shooting Guard'.",
    "BTS has fans from over 100 countries worldwide."
  ];

  let factBox = document.getElementById("factBox");
  let factBtn = document.getElementById("factBtn");

  factBtn.addEventListener("click", () => {
    let randomIndex = Math.floor(Math.random() * facts.length);
    factBox.textContent = facts[randomIndex];
  });

let backBtn = document.getElementById("backBtn");
let images = ["bts1.jpg","bts2.jpg","bts.jpg"];
let imgIndex = 0;

backBtn.addEventListener("click", () => {
  if (imgIndex >= images.length) {
    document.body.style.backgroundImage = "";
    document.body.style.backgroundColor = "lavenderblush";
    imgIndex = 0; 
  } else {
    document.body.style.backgroundImage = `url(${images[imgIndex]})`;
    imgIndex++;
  }
});

  let selfBtn = document.getElementById("selfBtn");
  selfBtn.addEventListener("click", function() {
    this.textContent = "I Changed!";
    this.style.backgroundColor = "pink";
    this.style.color = "purple";
    this.style.fontSize = "18px";
  });

});
