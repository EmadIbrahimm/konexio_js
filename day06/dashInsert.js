function insertDash(num) {
    var num = '99946';
    for (var i = 0; i < num.length; i++) {

        if (num[i] % 2 === 0 && num[i + 1] % 2 === 0) {
            withDash += `${num[i]}-`;
        } else {
            withDash += num[i];
        }

    }
    return withDash;
}
console.log(insertDash); 