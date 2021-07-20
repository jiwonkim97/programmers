function solution(absolutes, signs) {
    const op = {true:1, false:-1};
    var answer = 0;
    for(let i = 0 ; i < absolutes.length ; i++){
        answer += absolutes[i] * op[signs[i]];
    }
    return answer;
}

solution([4,7,12],[true,false,true])    // 9
solution([1,2,3],[false,false,true])     // 0