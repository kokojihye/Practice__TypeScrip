/*
* 타입 없이 변수 선언*/
const greeting = "Hello, ";
const target = "world";
console.log(greeting + target);
import { createInterface } from 'readline';
const rl = createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('문자열을 입력해 주세요: ', (line) => {
    //문자열이 입력되면 실행됨
    console.log(`입력된 문자열: ${line}`);
    rl.close();
});
rl.question('숫자를 입력해 주세요: ', (line) => {
    //문자열이 입력되면 실행됨
    console.log(`입력된 문자열: ${line + 1000}`); //result: line이 123인 경우, 1231000
    rl.close();
});
rl.question('숫자를 입력해 주세요: ', (line) => {
    //문자열이 입력되면 실행됨
    const num = Number(line);
    console.log(`입력된 문자열: ${line + 1000}`); //result: line이 123인 경우, 1231000
    rl.close();
});
/*
* 산술연산자
* */
const addResult = 1024 + 314 + 500;
console.log(addResult);
const discounted = addResult * 0.7;
console.log(discounted);
const num = 2 ** 3;
console.log(`num = ${num}`);
