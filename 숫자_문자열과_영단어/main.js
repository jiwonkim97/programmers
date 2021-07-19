function solution(s) {
    const map={"one":'1',"two":'2',"three":'3',"four":'4',"five":'5',"six":'6',"seven":'7',"eight":'8',"nine":'9',"zero":'0'};
    const _s = s.split("");
    let rep = ""
    _s.forEach(alp =>{
        if(isNaN(alp))
            rep+=alp;
        if(map[rep]){
            s=s.replace(rep,map[rep]);
            rep =""
        }
    })
    return parseInt(s);
}

// solution("one4seveneight")
// solution("23four5six7")
// solution("2three45sixseven")
// solution("123")
// solution("onetwothreefourfivesixseveneightninezero")