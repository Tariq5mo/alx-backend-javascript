// Display the initial welcome message
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Set up an event listener for data input from the user
process.stdin.on('data', (data) => {
  // Convert the input data to a string and trim any extra whitespace
  const name = data.toString().trim();

  // Display the user's name
  process.stdout.write(`Your name is: ${name}\n`);

  // Display the closing message
  if (!process.stdin.isTTY) {
    process.stdout.write('This important software is now closing\n');
  }
  // Exit the process
  process.exit();
});
