function myFunction() {
  let i = 0;
  while (i < 10) {
    console.log(i);
    i++; // Fixed: Increment i in each iteration
    if (i === 5) {
      break; // Exit the loop when i is 5
    }
  }
}