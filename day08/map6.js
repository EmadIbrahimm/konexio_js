var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]
console.log(arr)
arr2 = arr  
arr2 = arr2.map(function(arr2) {
    return arr2.firstName +" "+  arr2.surname
})
console.log(arr2) 