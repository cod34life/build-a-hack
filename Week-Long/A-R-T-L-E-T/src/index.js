import "./styles.css";

const statements = [
  "General: A(n) {adjective}, {color}, {noun}",
  "Specific: The {role} from {fandom}"
];

const madLibs = {
  adjective: ["tall", "short", "large", "small", "funny", "creepy"],

  color: [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "purple",
    "pink",
    "black",
    "white",
    "gray",
    "brown"
  ],

  noun: [
    "chair",
    "cat",
    "laptop",
    "cake",
    "shirt",
    "hat",
    "house",
    "book",
    "platypus",
    "ball"
  ],

  role: [
    "protagonist",
    "comedy relief",
    "voice of reason",
    "antagonist",
    "fan favorite",
    "overhated character"
  ],

  fandom: [
    "Sherlock",
    "Steven Universe",
    "Harry Potter",
    "Star Wars",
    "Phineas and Ferb",
    "Avatar the Last Airbender",
    "BNHA",
    "Supernatural",
    "Doctor Who",
    "Stranger Things",
    "Hunger Games",
    "Divergent",
    "Romeo and Juliet",
    "Nightvale",
    "House"
  ]
};

function generateIdea() {
  // (1) choose random template
  const randomTemplate = statements[randomRange(0, statements.length)];

  // (2) replace placeholders
  idea.textContent = randomTemplate.replace(/{([^}]+)}/g, function (a, b) {
    const madLib = madLibs[b];

    return madLib[randomRange(0, madLib.length)];
  });
}

function randomRange(start, end) {
  return Math.floor(Math.random() * (end - start) + start);
}

const idea = document.getElementById("idea"),
  generate = document.getElementById("generate");

generate.addEventListener("click", generateIdea);

generateIdea();
