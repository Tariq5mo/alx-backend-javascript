export default function cleanSet(set, startString) {
  if (startString === '') {
    return Array.from(set).join('-');
  }
  const cst = [];
  if (set !== undefined && set.constructor === Set && typeof startString === 'string') {
    for (const element of set) {
      if (element.startsWith(startString)) {
        cst.push(element.replace(startString, ''));
      }
    }
  }
  return cst.join('-');
}
