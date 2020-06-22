var arr = [{
    firstName: 'Daniel',
    surname: 'Beckham'
}, {
    firstName: 'David',
    surname: 'Craig'
}]
var fullName = arr 
console.log(fullName)
 
fullName = fullName.map(function(element){
    console.log(element);
    console.log('-------------');
    return {
        fullName : element.firstName  + " " + element.surname 
    };

});
console.log(fullName) 