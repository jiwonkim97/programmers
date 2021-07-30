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
                // console.log(cnt)
                res+=cnt.toString()+chunk;
                chunk = str.substr(0,i);
                cnt = 1;
            }
            // console.log('str : '+str);
            // console.log('chunk : ' +chunk + ' count : ' + cnt)
            str = str.substr(i);
        }
        // console.log('###############'+res.replace(/([1]{1})([a-z])/g,(a,b,c) => {return(c)}))
        arr.push(res.replace(/([1]{1})([a-z])/g,(a,b,c) => {return(c)}).length)
        res = '';
    }
    return Math.min(...arr);
}

console.log(solution("bbaabaaaab" ))    //8
console.log(solution("zzzbbabbabba" ))  //7
console.log(solution("aaaaaaaaaaaa"))    //3
console.log(solution("aaaaaaaaaaaaaaabbbbbbbbbbc")) //7
console.log(solution("aabbaccc"))   //7
console.log(solution("ababcdcdababcdcd"))   //9
console.log(solution("abcabcdede")) //8
console.log(solution("abcabcabcabcdededededede"))   //14
console.log(solution("xababcdcdababcdcd"))  //17