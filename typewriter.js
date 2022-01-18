const sentence = "hello there from lighthouse labs";

let delay = 1000;
for (const char of sentence) {
  setTimeout(() => {
    // the timeout will print out each char after 1000 ms
    process.stdout.write(char);
    // \n adds a new line character to the end of the string
    // process.stdout.write("\n");
  }, delay);
  // increment the delay outside of the loop, will delay each character separately
  delay += 100;
  // process.stdout.write("\n");
}
console.log("\n");
