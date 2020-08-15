var fs = require("fs");

var action = process.argv[2];
var value = process.argv[3];

switch (action) {
  case "total":
    total();
    break;

  case "deposit":
    deposit();
    break;

  case "withdraw":
    withdraw();
    break;

  case "lotto":
    lotto();
    break;
}

function total() {

    fs.readFile("bank.txt", "utf8", function(err, data){
        if (err) {
            return console.log(err);
        }

        data = data.split(", ");
        var result = 0;
        
        for (var i = 0; i < data.length; i++) {
            if (parseFloat(data[i])) {
                result += parseFloat(data[i]);
            }
        }

        console.log("You have a  total of " + result.toFixed(2));
    });

}

function deposit() {

    fs.appendFile("bank.txt", ", " + value, function(err){
        if(err) {
            return console.log(err);
        }
    });

    console.log ("Deposited " + value + ".");

}


function withdraw() {
 
    fs.appendFile("bank.txt", ", -" + value, function(err) {
        if (err) {
            return console.log(err);
        }

    });

    console.log("Withdrew " + value + ".");

}

function lotto() {

    fs.appendFile("bank.txt", ", -.25", function(err){
        if (err) {
            return console.log(err);
        }

    });
    
    var chance = Math.floor((Math.random() * 10) + 1);

    if (chance === 1) {

        fs.appendFile("bank.txt", ", 2", function(err){
            if (err){
                return console.log(err);
            }
        });
        
        console.log("Congrants you won the lottery!");

    }
    else{
        console.log("Sorry. you lost 25 cents, get a real job")
    }
}