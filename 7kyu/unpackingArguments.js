// You must create a function, spread, that takes a function and a list of arguments to be applied to that function. You must make this function return the result of calling the given function/lambda with the given arguments.

let func = function(x, y){
  return x + y;
}

let args = [1, 2];

function spread(func, args) {
  return func(...args);
}

console.log(spread(func, args))