function solution(nums) {
    let answer = 0;
    const len = nums.length;
    
    for(let i = 0;i<len;i++){
        for(let j=i+1;j<len;j++){
            for(let k=j+1;k<len;k++){
                if(isPrime(nums[i]+nums[j]+nums[k]))
                    answer ++;
            }
        }
    }

    return answer;
}

const isPrime=(n)=>{
    if(n===1)
        return false;
    if(n===2||n===3)
        return true;
    if(n%2 === 0)
        return false;
    
    let divisor = 3;
    while(n>divisor){
        if (n % divisor === 0) 
            return false;
        divisor += 2;
    }
    return true;
}