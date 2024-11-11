export default function cleanSet(set, startString) {
  const cst = [];
  if (set !== undefined && set.constructor === Set && typeof startString === 'string') {
    for (const element of set) {
      if (element && element.startsWith(startString)) {
        cst.push(element.replace(startString, ''));
      }
    }
    return cst.join('-');
  }
  return '';
}
