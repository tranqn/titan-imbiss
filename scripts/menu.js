const dishes = [
  // RICE DISHES - REISGERICHTE
  {
      name: "Eren's Titan Kraft Curry",
      description: "Würziges Katsu-Curry mit der Kraft der Titanen",
      price: 14.00,
      category: "rice",
      image: "./assets/img/titan-curry.jpeg"
  },
  {
      name: "Narutos Hokage Schüssel",
      description: "Ramen-glasiertes Hähnchen auf Reis",
      price: 13.50,
      category: "rice",
      image: "./assets/img/hokage-bowl.jpeg"
  },
  {
      name: "Ruff's Fleisch Paradies Donburi",
      description: "Saftiges Fleisch-Fest auf Reis",
      price: 15.00,
      category: "rice",
      image: "./assets/img/meat-paradise.jpeg"
  },
  
  // NOODLES - NUDELGERICHTE
  {
      name: "Aufklärungs-Trupp Expedition Ramen",
      description: "Kraftvolle Tonkotsu-Brühe für den Kampf gegen die Titanen",
      price: 16.00,
      category: "noodles",
      image: "./assets/img/expedition-ramen.jpeg"
  },
  {
      name: "Sukunas Fuga Udon",
      description: "Dämonisch scharfe Udon in feuriger Brühe",
      price: 14.50,
      category: "noodles",
      image: "./assets/img/domain-udon.jpeg"
  },
  {
      name: "Sanji's Grand Line Yakisoba",
      description: "Meisterhaft gebratene Nudeln mit Meeresfrüchten",
      price: 13.00,
      category: "noodles",
      image: "./assets/img/grandline-yakisoba.jpeg"
  },
  
  // SIDES - NEBENGERICHTE
  {
      name: "Gojos Sechs Augen Gyoza",
      description: "6 perfekte Teigtaschen",
      price: 8.50,
      category: "sides",
      image: "./assets/img/six-eyes-gyoza.jpeg"
  },
  {
      name: "Ichirakus Geheim Tempura",
      description: "Knusprige Garnelen-Tempura nach Teuchi's Geheimrezept",
      price: 9.50,
      category: "sides",
      image: "./assets/img/ichiraku-tempura.jpeg"
  },
  {
      name: "Mikasas Training Edamame",
      description: "Energie für intensives Ausrüstung Training",
      price: 6.00,
      category: "sides",
      image: "./assets/img/training-edamame.jpeg"
  }
];

const categories = [
  { id: "all", name: "ALLE GERICHTE" },
  { id: "rice", name: "REISGERICHTE" },
  { id: "noodles", name: "NUDELGERICHTE" },
  { id: "sides", name: "NEBENGERICHTE" }
];

let cart = [0, 0, 0, 0, 0, 0, 0, 0, 0];

// let billitem{
//     name
//     amount
//     price 
// }