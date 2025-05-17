const accountId = 14455
let accountEmail = "abhimanyu@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"
let accountState

// accountId = 2 // this is not allowed id will not be changed id it always constant

accountEmail = "adimanav@gmail.com"
accountPassword = "12121212"
accountCity ="Bengaluru"

console.log( accountId);

/* 
Prefer not to use ("var") because of issue in block scope and functional scope means={} "scope" */

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
