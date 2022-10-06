const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
const m_Array = mixedArray.filter(words => typeof words === 'string')
            .map(word => word.toLowerCase());
  
console.log("\tInput :");
console.log(mixedArray)
console.log("\tOutput :");
console.log(m_Array);


