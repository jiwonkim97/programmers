function solution(n) {
    const parse = {1:1,2:2,0:4};
    var answer = '';

    if(n % 3 === 1){
        answer += parse[n%3];
    }
    else if(n % 3 === 2){
        answer += parse[n%3];
    }
    else if(n % 3 === 0){
        answer += parse[n%3];
    }
    if(n < 3)
        return answer;
    answer += solution(n-3);
}

solution(1) //1
solution(2) //2
solution(3) //4
solution(4) //11