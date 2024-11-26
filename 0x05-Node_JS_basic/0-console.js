/**
 * Prints the given argument to STDOUT.
 * @param {any} argument - The argument to be printed.
 */
function displayMessage(argument) {
  if (argument === null || argument === undefined) {
    process.stdout.write('\n');
  } else {
    process.stdout.write(`${String(argument)}\n`);
  }
}

module.exports = displayMessage;
