const input = document.querySelector("#text-input")
const button = document.querySelector("#check-btn")
const result = document.querySelector("#result")

function verifyPalindrome(word) {
  word = word.toLowerCase().match(/[a-z0-9]/g)
  return word.join("") === word.reverse().join("")
}

button.addEventListener("click", () => {
  if(input.value === "") return alert("Please input a value")
  verifyPalindrome(input.value) 
    ? result.innerText = input.value + " is a palindrome"
    : result.innerText = input.value + " is not a palindrome"
})