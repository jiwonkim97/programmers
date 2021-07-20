function solution(numbers, hand) {  //미완
    var answer = '';
    let leftLoc = '*';
    let rightLoc = '#';
    let _hand = (hand === 'left')? 'L' : 'R';


    numbers.forEach(num =>{
        if(num === 1||num===4||num==7){
            answer+='L';
            leftLoc = parseInt(num/3) + 1;
        }
        if(num === 3 || num === 6 || num === 9){
            answer+='R';
            rightLoc = num/3;
        }
        else{
            if(num === 2){
                if(leftLoc === rightLoc)
                    answer += _hand;
                else if(leftLoc === 1)
                    answer +='L';
                else if(rightLoc === 1)
                    answer += 'R';
                else{

                }
            }
            else if(num === 5){
                if(leftLoc === rightLoc)
                    answer += _hand;
                else if(leftLoc === 2)
                    answer +='L';
                else if(rightLoc === 2)
                    answer += 'R';
            }
            else if(num === 8){
                if(leftLoc === rightLoc)
                    answer += _hand;
                else if(leftLoc === 3)
                    answer +='L';
                else if(rightLoc === 3)
                    answer += 'R';
            }
            else{   // 0
                if(leftLoc === rightLoc)
                    answer += _hand;
            }
        }
        console.log('left: ' + leftLoc + "right: "+rightLoc);
    })
    console.log(answer)
    return answer;
}


 solution([1, 3, 4, 5, 8, 2, 1, 4, 5, 9, 5],"right") // "LRLLLRLLRRL"
 solution([7, 0, 8, 2, 8, 3, 1, 5, 7, 6, 2],"left")  // "LRLLRRLLLRR"
  solution([1, 2, 3, 4, 5, 6, 7, 8, 9, 0],"right"	)   // "LLRLLRLLRL"