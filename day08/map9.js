var arr = ['apple', 'croissant', 'pear']
var arr2 = arr.map(function(elems){
   return   '<li>' + elems +  '</li>' 
})
console.log(arr2)