function centuryFromYear(num) {
    // Solution 1
    // return Math.ceil(num / 100);
    
    // Solution 2
    return num % 100 !== 0 ? ~~(num / 100) + 1 : ~~(num / 100);
}

 console.log(centuryFromYear(2001));
 console.log(centuryFromYear(2022));
 console.log(centuryFromYear(2099));
 console.log(centuryFromYear(2101));
 console.log(centuryFromYear(1999));

/**
* Test Suite 
*/
describe('centuryFromYear()', () => {
    it('returns current century', () => {
        // arrange
        const year = 1905;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(20);
    });
    
    it('returns current century for edge case of start of century', () => {
        // arrange
        const year = 1700;
        
        // act
        const result = centuryFromYear(year);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(17);
    });    
});