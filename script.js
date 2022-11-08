// criar as variaveis
// recolher os ids

const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];


let generatedPasswordOneEl = document.getElementById("generatedpasswordone-el");
let generatedPasswordTwoEl = document.getElementById("generatedpasswordtwo-el");

let passwordLength = getValue();

// Gerar duas password
// cada passe tem de ter 15 caracters
// forma de conseguir buscar 10 characters para a password
// duplicar a funcao
// nao deixar que as palavras passes acumulum !!limite dois sets de palavras passes


let includeSimbolsEl = documents.getElementById("includesimbols-el")
let includeUpperCaseEl= documents.getElementById("includeuppercase-el")
let includeNumbersEl= documents.getElementById("includenumbers-el")

generatePw.addEventListener("click",()=>{
let includeSimbols = includeSimbolsEl.checked
let includeUpper = includeUpperCaseEl.checked
let includeNumbers = includeUpperCaseEl.checked

resultEl.innerText = generatePw(includeNumbers, includeSimbols, includeUpper, passwordLength)
}
)

function generatePw() {
  for (i = 0; i <= getValue(); i++) {
    let randomPasswordOne = Math.floor(Math.random() * characters.length);
    generatedPasswordOneEl.textContent += characters[randomPasswordOne];
  }
}

function resetboxes() {
  generatedPasswordOneEl.textContent = " ";
  generatedPasswordTwoEl.textContent = " ";
}

function getValue() {
  let pwLengthEl = document.getElementById("pwlength-el").value;
  if(pwLengthEl < 5){
    alert("Must have a minimum length of 5!")
  }else{
  return pwLengthEl - 1;
}
}

// ! add copy button
// copy on click
// function copyOne() {
//   let copyText = document.getElementById("generatedPasswordOneEl").value;
//   console.log(generatedPasswordOneEl);
//   navigator.clipboard.writeText("copyText");
// }

// function copyTwo() {
//   let copyTextTwo = document.getElementById("copyTwo()");
// }
