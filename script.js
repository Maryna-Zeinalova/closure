function sumNumbers() {
  let result = 0;
  function innerFn(n) {
    return (result += n);
  }
  return innerFn;
}

let sum = sumNumbers();
console.log(sum(3));
console.log(sum(5));
console.log(sum(20));

let sum2 = sumNumbers();
console.log(sum2(50));
console.log(sum2(50));
