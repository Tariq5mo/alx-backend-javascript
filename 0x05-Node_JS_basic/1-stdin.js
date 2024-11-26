console.log('Welcome to Holberton School, what is your name?');

// Set the encoding to 'utf8' to receive string data
process.stdin.setEncoding('utf-8');

// Listen for data event to read input
process.stdin.on('data', (data) => {
  process.stdout.write(`Your name is: ${data}`);
  process.exit(200);
});

// Listen for end event to know when the input stream has ended
process.on('SIGINT', () => {
  process.stdout.write('This important software is now closing');
  console.log('This important software is now closing');
});

process.stdin.on('end', () => {
  process.stdout.write('This important software is now closing');
  console.log('This important software is now closing');
});
