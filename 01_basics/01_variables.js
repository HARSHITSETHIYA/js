const accountId = 12345
let accountEmail = "harshit@gmail.com"
var accountPassword ="12365"
accountCity = "jaipur"
let accountState;

// accountId = 2 //not allowed



accountEmail ="hs@gmail.com"
accountPassword ="12564"
accountCity = "indore"
console.log(accountId);

// prefer not to use var because of issue in bloack scope and functional scope
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
