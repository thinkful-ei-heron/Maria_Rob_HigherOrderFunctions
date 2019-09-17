//.filter
const result = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2] ]  
 for (let i=0; i < result.length; i++) { 
        for (let x=0; x < result[i].length;x++) { 
          if (result[i][x] < 0) {
             result[i][x] = filtered = result.filter(function(value){
  return value>=0;
});
          } 
        }
   }
 console.log(result);
 

//.map/.foreach
const result = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];
let newArr = [];

result.map(function(item) {
  item = item.reduce(function(a, b) {
    return a + b;

  });
  newArr.push(`Movement #:${item} step(s)`);

});
console.log(newArr);