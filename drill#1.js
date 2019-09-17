'use strict';

function repeat(fn, n) {
    for(let i = 0; i < n; i++) {
        fn();
    }

}

let hello = function() {
    console.log('Hello world');
};

let goodbye = function() {
    console.log('Goodbye world');
};

repeat(hello, 5);

/* function repeat(fn, n) {

  for (let i = 0; i < n; i++) {
    fn();
  }
  const hello = function() {
    console.log('Hello world');
  };

  const goodbye = function () {
    console.log('Goodbye world');

  };
}
console.log(repeat (hello(), 5));   */
