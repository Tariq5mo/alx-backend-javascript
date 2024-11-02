const promise1 = Promise.resolve(`First Promise's Value`);
const promise2 = new Promise((resolve) =>
  setTimeout(resolve, 3000, `Second Promise's Value`)
);
const promise3 = new Promise((resolve) =>
  setTimeout(resolve, 2000, `Third Promise's Value`)
);

let re = Promise.all([promise1, promise2, promise3]);

// Output on the console

// *Promise {<fulfilled>: Array(3)}*

Promise.all([promise1, promise2, promise3]).then((values) => {
  values.forEach((value) => console.log(value));
});

setTimeout(() => {
  console.log(re);
}, 3000);
// Output on the console

// First Promise's Value
// Second Promise's Value
// Third Promise's Value
