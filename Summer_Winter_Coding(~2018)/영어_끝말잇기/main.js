function solution(n, words) {
    let num = 0;

    for(let i = 1 ; i < words.length ; i ++){
        if(words[i-1][words[i-1].length-1] !== words[i][0]){
            num = i + 1;
            break;
        }
        if(words.indexOf(words[i]) < i){
            num = i + 1;
            break;
        }
    }
    if(num === 0)
        return [0,0];
    return [(num % n === 0)?n:num%n,Math.ceil(num/n), num];
}

console.log(solution(3, ["tank", "kick", "know", "wheel", "land", "dream", "mother", "robot", "tank"]))     //[3,3]
console.log(solution(5, ["hello", "observe", "effect", "take", "either", "recognize", "encourage", "ensure", 
                "establish", "hang", "gather", "refer", "reference", "estimate", "executive"]))             //[0,0]
console.log(solution(2, ["hello", "one", "even", "never", "now", "world", "draw"]))                         //[1,3]
console.log(solution(2,["abb", "baa", "ccc", "cda", "abb"]))
console.log(solution(2, ['qwe', 'eqwe', 'eqwe']))   //[1,2]