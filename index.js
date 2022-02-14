function sumStr(a,b) {
  var sum1 = Number(a);
  var sum2 = Number(b);
  var totSum = sum1 + sum2;
  return totSum.toString();
}

console.log(sumStr("4", "5")); // Return "9";
console.log(sumStr("34", "5")); // Return "39";