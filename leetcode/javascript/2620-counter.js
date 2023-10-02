let createCounter = function(n) {
  return function() {
      return n++;
  };
};