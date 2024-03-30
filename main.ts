import inquirer from "inquirer";

let myBalance = 20000;

let executeAgain = true

while(executeAgain == true){    
    let pin = await inquirer.prompt({
    name: "myPin",
    type: "number",
    message: "Enter your pin: ",
    });

    if (pin.myPin === 2476) {
    console.log(`Right pin entered.`);
    let operationAns = await inquirer.prompt([
        {
        name: "operation",
        type: "list",
        message: "Select one please.",
        choices: ["withdraw", "cheack Balance"],
        },
    ]);
    if (operationAns.operation === "withdraw") {
        let amountWithdraw = await inquirer.prompt([
        {
            name: "amount",
            message: "Choose a payment method: ",
            type: "list",
            choices: ["Fast Cash", "Type Amount"],
        }
        ]);
        if(amountWithdraw.amount === "Fast Cash"){
            let fastcash = await inquirer.prompt([{
                name: "cash",
                message: "Select Amount: ",
                type: "list",
                choices: [1000, 2000, 3000, 4000, 5000]
            }])
            if(fastcash.cash === 1000){
                let subAmount = myBalance - 1000;
                console.log(`${1000} successfully withdrawed`)
                console.log(`${subAmount} is now your remaining balance.`);
            }else if(fastcash.cash === 2000){
                let subtAmount = myBalance - 2000;
                console.log(`${2000} successfully withdrawed`)
                console.log(`${subtAmount} is now your remaining balance.`);
            }else if(fastcash.cash === 3000){
                let subtrAmount = myBalance - 3000; 
                console.log(`${3000} successfully withdrawed`)
                console.log(`${subtrAmount} is now your remaining balance.`);            
            }else if(fastcash.cash === 4000){
                let subtraAmount = myBalance - 4000;
                console.log(`${4000} successfully withdrawed`)
                console.log(`${subtraAmount} is now your remaining balance.`);
            }else{
                let subtracAmount = myBalance - 5000;
                console.log(`${5000} successfully withdrawed`)
                console.log(`${subtracAmount} is now your remaining balance.`);
            }
        }else if(amountWithdraw.amount === "Type Amount"){
                let typeAmount = await inquirer.prompt({
                    name: "cashAmount",
                    message: "Type your amount: ",
                    type: "number",
                });
                if(typeAmount.cashAmount > myBalance){
                    console.log(`${typeAmount.cashAmount} is invalid amount`)
                }else{
                    let remAmount =  myBalance - typeAmount.cashAmount;
                    console.log(`${typeAmount.cashAmount} successfully withdrawed`)
                    console.log(`${remAmount} is now your remaining balance.`)
                }
        }
        executeAgain = false;
        
    }else if(operationAns.operation === "cheack Balance"){
        console.log(`${myBalance} is your current balance.`);
        executeAgain = false;
    }else{
        console.log("please choose a method");
    }
    } else {
    console.log("you entered wrong pin, Please Try Again");
    executeAgain == true
    }
};