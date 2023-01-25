/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
    let answer = [];
    for (let i=1;i<=n; i++){
        (i%3 === 0 && i%5 ===0) ? answer[i-1]='FizzBuzz':
        (i%3 === 0) ? answer[i-1]='Fizz' : 
        (i%5 === 0) ? answer[i-1]='Buzz' :
        answer[i-1] = ""+i;
    }
    
    return answer;
};
