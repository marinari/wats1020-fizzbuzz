// Place your FizzBuzz code here. 

// Count through the numbers 1-20 and find out if each number is divisible by 3, 5 or 3 and 5.
For (i=1; i<=20; i=i+1){



// For each number do the following check:

// Check if number is divisible by 3
if (i % 3 === 0) {
	// If so, see if it is ALSO divisible by 5
	if (i % 5 ===0) {
		// If it divisible by 3 and 5 return fizz buzz
		console.log ('FizzBuzz');
	} else {
		// If it is only divisibile by 3 return fizz
		console.log ('Fizz');
	}		
}


//Check if number is divisible by 5

//If it is return buzz

//Check if number is divisible neither

//If so then return the number itself
}