var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]
var wholeName = arr 
console.log(wholeName)

wholeName = wholeName.map(function(name){
    console.log(name)
//    return name = [{
//        fullName : name.firstName +" "+ name.surname 
       
//        }]
});
console.log(wholeName)
// fullName = fullName.map(function(element){
//     console.log(element);
    
//     return [{
//         firstName : element.firstName
//         surname : element.surname 
//         fullName : element.firstName + element.surname
//     }]
// });
// console.log(arr) 