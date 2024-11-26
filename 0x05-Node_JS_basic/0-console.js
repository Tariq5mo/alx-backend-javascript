function displayMessage(argument) {
  process.stdout.write(`${String(argument)}\n`);
}
module.exports = displayMessage;
