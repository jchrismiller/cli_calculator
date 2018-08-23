var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);

// Instructions
console.log(" ");
console.log("Welcome to the CLI Calculator!");
console.log(" ");
console.log("-Type input in this format: number operator number and click Enter or Return to get result.");
console.log("-Example: 1 + 1 then Enter");
console.log("-Valid operators are: +, -, /, * and %");
console.log(" ");

// Set prompt for user
rl.setPrompt("Type your calculation, or type exit to end program: ");
rl.prompt();

// Take input and pass to main function
rl.on('line', function(input){
	// Type exit to exit back to command prompt
	if(input.toLowerCase().trim() === "exit"){
		rl.close();
	}
	else{
		// Remove whitespace and special characters from user input
		var str = input.replace(/\s/g, "").replace(/,/g, "").replace(/\./g, "").replace(/\"/g, "").replace(/\!/g, "").replace(/\?/g, "").replace(/\'/g, "").replace(/\_/g, "");
		// Convert input into array
		var arr = str.split("");
		// parse string inputs into integers
		num1 = parseInt(arr[0]);
		num2 = parseInt(arr[2]);

		var total = 0;
		// Add
		if (arr[1] == "+"){
			total = num1 + num2;
		}
		// Subtract
		else if(arr[1] == "-"){
			total = num1 - num2;
		}
		// Multiply
		else if(arr[1] == "*"){
			total = num1 * num2;
		}
		// Divide
		else if(arr[1] == "/"){
			total = num1 / num2;
		}
		// Modulo
		else if(arr[1] == "%"){
			total = num1 % num2;
		}

		console.log(`${str} = ${total}`);
		rl.prompt();
	}
});
// Exit function
rl.on('close', function() {
	console.log("Closing Program");
	process.exit();
});
