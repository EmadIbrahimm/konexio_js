var arr = ['m', 'n', 'o', 'p'];
var arr2 = arr;
console.log(arr2);
arr2 = arr2.map(function(arr2) { 
    return arr2.toUpperCase(); 
});
console.log(arr2);  
