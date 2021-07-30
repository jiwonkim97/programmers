function solution(s) {
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
        console.log('###############'+res.replace(/[1][a-z]/g,''))
        arr.push(res.replace(/[1]{1}[a-z]/g,'').length)
        res = '';
    }
    return Math.min(...arr);
}

console.log(solution("aaaaaaaaaaaa"))
console.log(solution("aabbaccc"))
console.log(solution("ababcdcdababcdcd"))
console.log(solution("abcabcdede"))
console.log(solution("abcabcabcabcdededededede"))
console.log(solution("xababcdcdababcdcd"))