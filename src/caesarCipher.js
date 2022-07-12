
function caesarCipher(string, shift) {
  let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  let array = string.split("");
  // console.log(array)
  let newString = [];
  array.forEach((item) => {
    for (let i = 0; i < alphabet.length; i++) {
      let itemIsUpperCase = false;
      if (item == item.toUpperCase()) {
        itemIsUpperCase = true;
      }
      item = item.toLowerCase();
      if (item == alphabet[i]) {
        if (i > (alphabet.length - shift)) {    
          const newIndex = (i + shift) - (alphabet.length);
          console.log(itemIsUpperCase)
          if (itemIsUpperCase) {
            newString.push(alphabet[newIndex].toUpperCase());
            break
          } else {
            newString.push(alphabet[newIndex]);
            break
          }
        } else {
          if (itemIsUpperCase) {
            newString.push(newLetter);
            break
          }  else {
            newString.push(alphabet[i + shift]);
            break
          }
        }
      } else if (!item.match(/[a-z]/i)) {
        newString.push(item);
        break
      }
    }
  });
  newString = newString.join('');
  return newString
}

export { caesarCipher }
