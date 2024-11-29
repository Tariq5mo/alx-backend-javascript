const Utils = {
	calculateNumber: function(type, a, b){
    if (type === 'SUM') {
      return Number(a.toFixed()) + Number(b.toFixed());
    }
    if (type === 'SUBTRACT') {
      return Number(a.toFixed()) - Number(b.toFixed());
    }
    if (type === 'DIVIDE') {
      if (Number(b.toFixed()) === 0) {
        return 'Error';
      }
      return Number(a.toFixed()) / Number(b.toFixed());
    }
  }
}

module.exports = Utils
