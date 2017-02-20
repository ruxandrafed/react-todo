export const partial = (func, ...args) => {
  // ...args ^^^ takes multiple arguments and combines them in an array
  return func.bind(null, ...args);
  /// ...args ^^^ we spread the array back into arguments
};