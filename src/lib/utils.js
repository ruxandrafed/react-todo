export const partial = (fn, ...args) => {
  // ...args ^^^ takes multiple arguments and combines them in an array
  return fn.bind(null, ...args);
  /// ...args ^^^ we spread the array back into arguments
};

// does function composition
const _pipe = (f, g) => (...args) => g(f(...args));

// takes an array of functions
export const pipe = (...fns) => fns.reduce(_pipe);