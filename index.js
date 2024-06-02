const { encrypt, decrypt } = require("./crypto");
// Copyright Ilia Finderov 2024 at Kriloud

console.log("Welcome to simple coder and encoder cli app\n This app using Kriloud crypto library.\n");
console.log("\n");
prompt('First you need to choose "decrypt" or "encrypt": ', function (answ) {
    if (answ == "decrypt") {
        prompt('You choose Decrypt so type crypted thing: ', function (xsr){
            console.log(decrypt(xsr));
            process.exit();
        });
    } else if (answ == "encrypt") {
        prompt('You choose Encrypt so type anything: ', function (xsr){
            console.log(encrypt(xsr));
            process.exit();
        }); 
    } else {console.log("You typed something strange.");}
    
});

function prompt(question, callback) {
    var stdin = process.stdin,
        stdout = process.stdout;
    stdin.resume();
    stdout.write(question);
    stdin.once('data', function (data) {
        callback(data.toString().trim());
    });
}
