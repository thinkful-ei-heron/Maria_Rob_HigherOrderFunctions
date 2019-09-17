function hazardWarningCreator(typeOfWarning) {
    let warningCounter = 0;
  
    return function (location) {
      warningCounter++ 
      
       console.log(`DANGER! There us is ${typeOfWarning} hazard at ${location}! `);
  
       console.log( `The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today!`)
    
  
    }
   
  }
  
  const rockWarning = hazardWarningCreator('rocks on road');
  rockWarning('my house ')
  
  const rainWarning = hazardWarningCreator('water on the road')
  rainWarning('the mall')
  rainWarning('the mall')
  
  
  const fireWarning = hazardWarningCreator('fire on the trees!');
  fireWarning('the campgrounds!')
  fireWarning('the campgrounds!')
  fireWarning('the campgrounds!')