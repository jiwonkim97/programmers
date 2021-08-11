function solution(scores) {
    let answer = '';
    for(let i = 0 ; i < scores.length ; i++){
        let score = scores.map(c=>{ return c[i]; });

        if(score[i] === Math.max(...score) || score[i] === Math.min(...score)){
            if(score.indexOf(score[i]) === score.lastIndexOf(score[i])){
                score.splice(i,1);
            }
        }
        
        answer += grade(score.reduce((a,b) => {return a+=b},0)/score.length);
    }
    return answer;
}

const grade = (score) => {
    if(score >= 90)
        return 'A';
    else if(score >= 80)
        return 'B';
    else if(score >= 70)
        return 'C';
    else if(score >= 50)
        return 'D';
    else
        return 'F';
}
console.log(solution([[100,90,98,88,65],[50,45,99,85,77],[47,88,95,80,67],[61,57,100,80,65],[24,90,94,75,65]]));
// "FBABD"
console.log(solution([[50,90],[50,87]]));
// "DA"
console.log(solution([[70,49,90],[68,50,38],[73,31,100]]));
// "CFD"