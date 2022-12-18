function candies(children, candy) {    
    return candy < children ? `Oops!!! Equal distribution of candy is not possible.` : children * Math.floor(candy/children);
}

/**
 * Hint: Math.floor() || ~~ 
 * ~~ is a double NOT bitwise operator. It is used as a faster substitute 
 * for Math.floor() for positive numbers and it just chops off the part after the decimal.
 */

/**
* Test Suite 
*/
describe('candies()', () => {
    it('returns ammount of total equal candy to be eaten', () => {
        // arrange
        const children = 3;
        const candy = 10;
        
        // act
        const result = candies(children, candy);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe(9);
    });
});