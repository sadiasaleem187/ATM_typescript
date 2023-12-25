import inquirer from "inquirer";
let answer = await inquirer.prompt([{
        type: "input",
        name: "userID",
        message: "Enter your userID"
    },
    {
        type: "number",
        name: "userPIN",
        message: "Enter your userPIN"
    },
    {
        type: "list",
        name: "accounttype",
        message: "select your account",
        choices: ["current", "saving"]
    }, {
        type: "list",
        name: "transactiontype",
        message: "select your transaction",
        choices: ["fast cash", "withdraw"],
        when(answer) {
            return answer.accounttype;
        }
    }, {
        type: "list",
        name: "amount",
        message: "enter yuor amount",
        choices: [30000, 400, 1000],
        when(answer) {
            return answer.transactiontype == "fast cash";
        }
    },
    {
        type: "number",
        name: "amount",
        message: "enter yuor amount",
        when(answer) {
            return answer.transactiontype == "withdraw";
        }
    }]);
if (answer.userID && answer.userPIN) {
    let balance = 60000;
    console.log("your previous balance is:", balance);
    let enteramount = answer.amount;
    if (balance >= enteramount) {
        let remaining = balance - enteramount;
        console.log("your remaining amount is", remaining);
    }
}
else {
    console.log("Insufficient amount");
}
