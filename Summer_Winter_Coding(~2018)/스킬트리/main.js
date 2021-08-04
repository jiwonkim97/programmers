function solution(skill, skill_trees) {
    var answer = 0;
    skill_trees.forEach(st => {
        if(test(skill,st))
            answer++;
    })
    return answer;
}

const test = (skill, skill_tree) => {
    const arr = skill.split('');
    const st = skill_tree.split('');
    
    for(let i = 0 ; i < arr.length - 1 ; i ++){
        if(st.indexOf(arr[i+1]) === -1)
            continue;
        if(st.indexOf(arr[i]) === -1){
            if(st.indexOf(arr[i + 1]) > -1) 
                return false;
            else
                continue;
        }
        if(st.indexOf(arr[i]) > st.indexOf(arr[i + 1]))
            return false;
    }
    
    return true;
}