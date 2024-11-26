// Set the encoding to 'utf8' to receive string data
process.stdin.setEncoding('utf8');

// Listen for data event to read input
process.stdin.on('data', (data) => {
  console.log(`You entered: ${data}`);
});

// Listen for end event to know when the input stream has ended
process.stdin.on('end', () => {
  console.log('Input stream ended');
});

console.log('Please enter some text:');
