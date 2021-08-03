function solution(s) {
    if(s.length === 1)
        return 1;
    let arr = [];
    let res = '';
    for(let i = 1 ; i <= s.length / 2 ; i ++){
        let cnt = 0;
        let chunk = s.substr(0,i);
        let str = s
        for(let j= 0 ; j <= s.length/i + 1 ; j ++){
            if(chunk === str.substr(0,i)){
                cnt ++;
            }
            else{
                res+=(cnt !== 1 ) ? cnt.toString()+chunk : chunk;
                chunk = str.substr(0,i);
                cnt = 1;
            }
            str = str.substr(i);
        }
        console.log('####' + res)
        arr.push(res.length)
        res = '';
    }
    return Math.min(...arr);
}

// console.log(solution("bbaabaaaab" ))    //8
// console.log(solution("zzzbbabbabba" ))  //7
// console.log(solution("aaaaaaaaaaaa"))    //3
// console.log(solution("aaaaaaaaaaaaaaabbbbbbbbbbc")) //7
// console.log(solution("aabbaccc"))   //7
// console.log(solution("ababcdcdababcdcd"))   //9
// console.log(solution("abcabcdede")) //8
// console.log(solution("abcabcabcabcdededededede"))   //14
// console.log(solution("xababcdcdababcdcd"))  //17
// console.log(solution("aaaaaaaaaa"));
console.log(solution("baaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
// // console.log(solution("aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
// console.log(solution("aaaaaaaaaabb"));
// console.log(solution("abcdefghijklmnopqrstuvwxyz"));
// console.log(solution("abbbbbbbbbb"));
// console.log(solution("aaaaaaaaaabbbbbbbbbbcccccccccc"))