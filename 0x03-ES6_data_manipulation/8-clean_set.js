export default function cleanSet(set, startString) {
  const cst = [];
  if (set.constructor === Set && typeof startString === 'string') {
    for (const element of set) {
      if (element.startsWith(startString) && startString !== '') {
        cst.push(element.replace(startString, ''));
      }
    }
    return cst.join('-');
  }
  return '';
}
