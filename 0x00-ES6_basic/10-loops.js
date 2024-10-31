export default function appendToEachArrayValue(array, appendString) {
  for (let element of array) {
    const idx = array.indexOf(element);
    element = appendString + element;
    array[idx] = element;
  }

  return array;
}
