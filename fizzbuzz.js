// Place your FizzBuzz code here. 
// A function is used so that action will occur on click
function deployKyloRen() {

	//variable for range limit based on user input
	var num_end = document.getElementById('RangeLim').value;

	// Count through the numbers 1-20 and find out if each number is divisible by 3, 5 or 3 and 5.
	for (i=1; i<= num_end; i=i+1){
	// For each number do the following check:

	// Check if number is divisible by 3
	if (i % 3 === 0) {
		// If so, see if it is ALSO divisible by 5
		if (i % 5 === 0) {
			// If it divisible by 3 and 5 return wordA + wordB
			console.log ('KyloRen');
		} else {
			// If it is only divisibile by 3 return wordA
			console.log ('Kylo');
		}		
	}	//Check if number is divisible by 5
		else if (i % 5 === 0){
		//If it is return wordB
		console.log ('Ren');
		} else {
		//Check if number is divisible neither

		//If so then return the number itself
		console.log(i);
		}


	}
}