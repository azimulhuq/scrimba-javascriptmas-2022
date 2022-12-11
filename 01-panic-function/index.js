/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"
*/

function panic(input) {
    if (typeof input !== 'string') {
        return "Please enter a word or sentence!";
    }
            
    if (input.trim().includes(' ')) {
        // Solution 1
        return input.toUpperCase().replace(/\s/g, " 😱 ").concat('!');
        
        // Solution 2
        // return input.toUpperCase().replaceAll(' ', ' 😱 ').concat('!');
    } else {
        return input.toUpperCase().concat('!');
    }
   
}

// Test your function
console.log(panic("I'm almost out of coffee")); 
console.log(panic("winter is coming"));
console.log(panic("winter"));


