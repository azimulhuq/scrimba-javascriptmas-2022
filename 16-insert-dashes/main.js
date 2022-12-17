function insertDashes(arr) {
    // Solution 1
    return arr.split(' ').map(elm => elm.split('').join('-')).join(' ');
    
    // Solution 2
    // return arr.replace(/(?<=[a-z])(?=[a-z])/ig, '-');
}



/**
* Test Suite 
*/
describe('insertDashes()', () => {
    it('insert dashes in between chars', () => {
        // arrange
        const value = "aba caba";
        
        // act
        const result = insertDashes(value);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toBe("a-b-a c-a-b-a");
    });
});