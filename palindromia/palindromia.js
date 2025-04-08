//Palidroma
// - Chiedere all’utente di inserire una parola
// - Creare una funzione per capire se la parola inserita è palindroma

//qui creare una funzione, che dice solo se è palindroma
function isWordPalindrome(word) {
  let reverseWord = "";

  //ciclo for
  for (let i = 0; i < word.length; i++) {
    currentChar = word[i];
    reverseWord = currentChar + reverseWord;
    // currentChar fa ogni carattere all'inizio + reverWord dirà che la parola va messa dopo ogni carattere quindi ogni carattere prima e poi la parola, sposta la posizione sempre prima
  }
  console.log(word);
  console.log(reverseWord);

  //quindi se reverse word è uguale a word, è palindroma
  return reverseWord === word;
}

const userWord = prompt("Quale parola vuoi controllare?");
// costante per la booleana
const isUserWordPalindrome = isWordPalindrome(userWord);
//step basici senza funzione
if (isUserWordPalindrome) alert("Palindrome");
else alert("Not palindrome");
