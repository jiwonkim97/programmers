function solution(s) {
    let arr = [];
    arr.push.length;
    for(let i = 1 ; i <= s.length / 2 ; i ++){
        let cnt = 0;
        const chunc = s.substr(0,i);
        let str = s
        for(let j= 0 ; j < s.length/i ; j ++){
            str = str.substr(i);
            console.log(str);
        }
    }
    return s.length;
}

console.log(solution("aabbaccc"))
console.log(solution("ababcdcdababcdcd"))
console.log(solution("abcabcdede"))
console.log(solution("abcabcabcabcdededededede"))
console.log(solution("xababcdcdababcdcd"))