exports.largestPrimeFactor = function(n) {
  let primeNumber = 0;
  // do your work here
  let i = 3;
  while (i <= n){
    if (n % i === 0){
      n /= i;
    } else {
      i += 2;
    }
  }
  return i;
};