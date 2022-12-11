/* Whispering function 
Write a function `whisper` that takes in a sentence 
and returns a new sentence in all lowercase letters with
"shh..." at the beginning. 

The function should also remove an exclamation point
at the end of the sentence, if there is one. 

Example 
input: "The KITTENS are SLEEPING!"
output: "shh... the kittens are sleeping"

Hint: endsWith and slice
*/

function whisper(input) {
  if (typeof input !== 'string') {
    return 'Please enter a word or sentence!';
  } else {
    input = 'shh... ' + input.toLowerCase();
    return input.endsWith('!') ? input.slice(0, -1) : input;

    // Alternative 01
    //return `shh... ${input.replace(/!$/g,'').toLowerCase()}`;
    
    // Alternative 02
    //input = "shh... " + input.toLowerCase();
    //return input.endsWith("!") ? input.replace("!", "") : input;

    // Alternative 03
    // if (input.endsWith("!")) {
    //   return "ssh... " + input.slice(0, input.length - 1).toLowerCase();
    // } else {
    //   return "ssh... " + input.toLowerCase();
    // }
  }  
}

console.log(whisper("PLEASE STOP SHOUTING."));
console.log(whisper("MA'AM, this is a Wendy's!"));