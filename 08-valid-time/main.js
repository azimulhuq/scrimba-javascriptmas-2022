function validTime(str) {
    //  write code here.
    if (typeof str !== 'string') {
        return false;
    }
    
    const [hours, minutes] = str.split(':').map(time => parseInt(time));
    
    return (hours > -1 && hours < 24) && (minutes > -1 && minutes < 60);
    // return (hours < 0 || hours > 23) || (minutes < 0 || minutes > 59) ? false : true;
}

console.log(validTime("09:63"));
console.log(validTime("00:35"));
console.log(validTime("27:00"));
console.log(validTime("23:00"));
console.log(validTime("-09:07"));
console.log(validTime("09:-07"));
console.log(validTime('aa:bb'));
console.log(validTime('00:00'));
/**
* Test Suite 
*/
describe('validTime()', () => {
    it('returns true for valid time', () => {
        // arrange
        const str = '13:58';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(true);
    });

    it('returns false when invalid hours', () => {
        // arrange
        const str = '25:51';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(false);
    });

    it('returns false when invalid minutes', () => {
        // arrange
        const str = '02:76';
        
        // act
        const result = validTime(str);

        // log
        console.log("result 3: ", result);
        
        // assert
        expect(result).toBe(false);
    });
});