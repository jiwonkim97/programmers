function solution(nums) {
    let n = [];
    nums.forEach(num => {
        if(n.indexOf(num) === -1)
            n.push(num);
    })
    var answer = (n.length < nums.length/2)? n.length : nums.length/2;
    return answer;
}

// solution([3,1,2,3])
// solution([3,3,3,2,2,4])
// solution([3,3,3,2,2,2])