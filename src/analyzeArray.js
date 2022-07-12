function average(array) {
  const count = array.length;
  const initalValue = 0;
  const sumWithInitial = array.reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initalValue
  );
  return sumWithInitial / count
}

function max(array) {
  return Math.max(...array);
}

function min(array) {
  return Math.min(...array);
}

function length(array) {
  return array.length;
}

function analyzeArray(array) {
  const averageVal = average(array);
  const maxVal = max(array);
  const minVal = min(array);
  const lengthVal = length(array);
  const object = {average: averageVal, max: maxVal, min: minVal, length: lengthVal}
  return object
}

export { analyzeArray }
