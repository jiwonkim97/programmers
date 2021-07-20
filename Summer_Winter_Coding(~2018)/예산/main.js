function solution(d, budget) {
    d.sort();
    let sum=0;
    for(let i=0;i<d.length;i++){
        if(sum>budget)
            return i-1;
        else{
            sum+=d[i];
        }
    }
    return d.length;
}

console.log(solution([1,3,2,5,4],9));
console.log(solution([2,2,3,3],10));