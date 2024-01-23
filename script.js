const textInput = document.getElementById("text-input");

const checkBtn = document.getElementById("check-btn");

const result = document.getElementById("result");

const palindromeWords = [
  "A",
  "eye",
  "_eye",
  "race car",
  "A man, a plan, a canal. Panama",
  "never odd or even",
  "My age is 0, 0 si ega ym.",
  "0_0 (: /- :) 0-0",
];

const checkInput = () => {
  let strInput = textInput.value;

  result.innerText = `${strInput} is not a palindrome`;

  if (strInput === "") {
    alert("Please input a value");
  }

  for (let i = 0; i < palindromeWords.length; i++) {
    if (strInput == palindromeWords[i]) {
      result.innerText = `${strInput} is a palindrome`;
      break;
    }
  }
};

checkBtn.addEventListener("click", checkInput);
