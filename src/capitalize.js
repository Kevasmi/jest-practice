function capitalize(string) {
  let array = string.split("");
  let firstLetter = array.splice(0, 1);
  let upperCaseLetter = firstLetter[0].toUpperCase();
  array.unshift(upperCaseLetter);
  let joinedArray = array.join("");
  return joinedArray;
}

export { capitalize };
