'use strict';

// 1. printIndices
function printIndices(items) {
  for (const item of items) {
    console.log(`${item} ${items.indexOf(item)}`);

  };
}

// printIndices(['a','b','c']);

// 2. everyOtherItem
function everyOtherItem(items) {
  // Replace this with your code
  const emptyList = []
  for(let i  = 0; i < items.length; i++){
    if(i % 2 == 0){
      emptyList.push(items[i]);  
    };
  
}
  // console.log(emptyList)
}
everyOtherItem(['1', '2', '4', '5'])
// 3. smallestNItems
function smallestNItems(items, n) {
  // Replace this with your code
  items.sort((a, b) => a - b);
  const updateItems = items.slice(n)
  console.log(updateItems);
}


smallestNItems(['134', '232', '14', '5'], 2)