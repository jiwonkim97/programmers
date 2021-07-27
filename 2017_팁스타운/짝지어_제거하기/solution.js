function solution(s)
{
    if(s.length === 0 || s.length % 2 === 1)
        return 0;

    let ret = 1, flag=true;

    while(flag){
        s = s.replace(/(\w)\1/,c => {
            if(c !== -1){
                console.log('hi'+c);
                return '';
            }
            else{
                ret = 0;
                flag = false;
                return c;
            }
        });
    }
    return ret;
}

console.log(solution('baabaa'));
console.log(solution('cdcd'));