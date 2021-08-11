function solution(price, money, count) {
    return price * sum(count) < money ? 0 : price * sum(count) - money;
}
const sum = (num) => {
    return num === 1 ? 1 : num + sum(num - 1);
}

console.log(solution(3,20,4));