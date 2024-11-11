export default function cleanSet(set, startString) {
  if (typeof startString !== 'string' || !(set instanceof Set)) {
    return '';
  }

  if (startString === '') {
    return Array.from(set).join('-');
  }

  const cst = [];
  for (const element of set) {
    if (element.startsWith(startString)) {
      cst.push(element.replace(startString, ''));
    }
  }
  return cst.join('-');
}
