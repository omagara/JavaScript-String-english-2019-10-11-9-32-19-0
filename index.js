// Complete the following procedure, the 'name' variable in all letters to uppercase, output: ' 'HELLO' '.
var name = 'hello';
console.log(name.toUpperCase());


// Complete the following procedure, capitalizing all the words in the variable sentence and printing: 'Good Afternoon, Mr Mike.'
var sentence = 'good afternoon, mr mike.';
function initCap(string){
    return string.replace(/(?:^|\s)\S/g, function(a) { return a.toUpperCase(); });
}
console.log(initCap(sentence));


// Complete the following procedure to extract the amount of money variable, output: 20.
var money = '￥20';
console.log(money.substring(1));