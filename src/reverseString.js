function reverseString(string) {
  let array = string.split("");
  let reversedarray = [];
  for (let i = array.length - 1; i >= 0; i--) {
    let letter = array[i].slice();
    reversedarray.push(letter);
  }
  let reversedString = reversedarray.join("");
  return reversedString;
}

export { reverseString };
