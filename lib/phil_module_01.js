function myDateTime() {
  return Date();
};

function sayHello() {
  return 'Hello World';
};

function sayHello2() {
  return 'Hello More World!';
};

function whosAwesome() {
  return 'You are awesome!';
};

// This is how you expose functions inside of this module to a file that is
// requring it. This is how you make public and private functions in NodeJS.
//
// This method is only one of many ways to expose functions.
//
//     module.exports = function myDateTime() { return Date(); };
//
//  That is another way. These two methods do not jive and the whole module
//  needs to be one way or the other.
module.exports = {
  myDateTime: myDateTime,
  sayHello: sayHello,
  sayHello2: sayHello2,
  whosAwesome: whosAwesome
};
