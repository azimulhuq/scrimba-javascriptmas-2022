/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){ 
    if(typeof str === 'string') {
        const newStr = str.toLowerCase().split('');
    
        for(let i = 0; i < newStr.length; i += 2) {
            newStr[i] = newStr[i].toUpperCase();
        }
            
        return newStr.join('');
        
        //Alternate 01
        // return str.toLowerCase().split('').map((element, index) => index % 2 === 0 ? element.toUpperCase() : element).join('');
        
        //Alternate 02
        // return str.split('').map((element, index) => index % 2 === 0 ? element.toUpperCase() : element.toLowerCase()).join(''); 
    } else {
        return 'Please enter a word or sentence!';
    }
}

console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));
console.log(altCaps("I'm so happy it's Monday"));
console.log(altCaps("WHAT IF SOMEONE YELLS THIS?"));