const dishes = [
  // RICE DISHES - REISGERICHTE
  {
      name: "Eren's Titan Kraft Curry",
      description: "Würziges Katsu-Curry mit der Kraft der Titanen",
      price: 14.00,
      category: "rice",
      image: "./assets/imgs/titan-curry.jpg"
  },
  {
      name: "Narutos Hokage Schüssel",
      description: "Ramen-glasiertes Hähnchen auf Reis",
      price: 13.50,
      category: "rice",
      image: "./assets/imgs/hokage-bowl.jpg"
  },
  {
      name: "Ruff's Fleisch Paradies Donburi",
      description: "Saftiges Fleisch-Fest auf Reis",
      price: 15.00,
      category: "rice",
      image: "./assets/imgs/meat-paradise.jpg"
  },
  
  // NOODLES - NUDELGERICHTE
  {
      name: "Aufklärungs-Trupp Expedition Ramen",
      description: "Kraftvolle Tonkotsu-Brühe für den Kampf gegen die Titanen",
      price: 16.00,
      category: "noodles",
      image: "./assets/imgs/expedition-ramen.jpg"
  },
  {
      name: "Sukunas Fuga Udon",
      description: "Dämonisch scharfe Udon in feuriger Brühe",
      price: 14.50,
      category: "noodles",
      image: "./assets/imgs/domain-udon.jpg"
  },
  {
      name: "Sanji's Grand Line Yakisoba",
      description: "Meisterhaft gebratene Nudeln mit Meeresfrüchten",
      price: 13.00,
      category: "noodles",
      image: "./assets/imgs/grandline-yakisoba.jpg"
  },
  
  // SIDES - NEBENGERICHTE
  {
      name: "Gojos Sechs Augen Gyoza",
      description: "6 perfekte Teigtaschen",
      price: 8.50,
      category: "sides",
      image: "./assets/imgs/six-eyes-gyoza.jpg"
  },
  {
      name: "Ichirakus Geheim Tempura",
      description: "Knusprige Garnelen-Tempura nach Teuchi's Geheimrezept",
      price: 9.50,
      category: "sides",
      image: "./assets/imgs/ichiraku-tempura.jpg"
  },
  {
      name: "Mikasas Training Edamame",
      description: "Energie für intensives Ausrüstung Training",
      price: 6.00,
      category: "sides",
      image: "./assets/imgs/training-edamame.jpg"
  }
];

const categories = [
  { id: "all", name: "ALLE GERICHTE" },
  { id: "rice", name: "REISGERICHTE" },
  { id: "noodles", name: "NUDELGERICHTE" },
  { id: "sides", name: "NEBENGERICHTE" }
];

let cart = [0, 0, 0, 0, 0, 0, 0, 0, 0];