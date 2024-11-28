function calculateNumber(type, a, b) {
  if (type === 'SUM') {
    return Number(a.toFixed()) + Number(b.toFixed())
  } else if (type === 'SUBTRACT') {
    return Number(a.toFixed()) - Number(b.toFixed())
  } else if (type === 'DIVIDE') {
    if (b === 0) {
      return 'Error'
    }
    return Number(a.toFixed()) / Number(b.toFixed())
  }
}

module.exports = calculateNumber;
