function solution(numbers) {
    let answer = [];
    for(let i =0;i<numbers.length-1;i++){
        for(let j=i+1;j<numbers.length;j++){
            answer.push(numbers[i] + numbers[j]);
        }
    }
    let ret = new Set(answer);

    return [...ret].sort((a,b) => {
        return a-b;
    });
}

console.log(solution([2,1,3,4,1]));
console.log(solution([5,0,2,7]));