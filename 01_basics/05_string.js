const name = "harshit"
const repoCount = 50

console.log(name + repoCount+ "value");

console.log('hello my name is ${name} and my repo count is ${repoCount}');

const gameName = new String('harshit')
console.log(gameName[0]);
console.log(gameName.__proto__);


console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(6));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0,4)
console.log(newString);


const anotherString = gameName.slice(-6, 4)
console.log(anotherString);

const newStringOne = "   harshit   "
console.log(newStringOne);
console.log(newStringOne.trim());


const url ="https://hs.com/harshit%10sethiya"

console.log(url.replace('%10','-'));
  
console.log(url.includes('harshit'))








