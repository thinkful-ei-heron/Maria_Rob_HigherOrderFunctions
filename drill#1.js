'strict mode'

function repeat (fn, n){
    for (i=0; i< n, i++){
        fn ()
    }
    const hello = function (){
        console.log('Hello world ')
    }

    const goodbye = function () {
        console.log('Goodbye world')

    }
}
console.log(repeat (hello, 5));   
