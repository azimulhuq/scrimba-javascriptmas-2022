function sortByLength(strs) {
    // If two strings have same length sort by relative order.
    return strs.sort((firstItem, secondItem) => firstItem.length - secondItem.length);
    
    /* If two strings have same length sort by alphabetic order. It will show perfect result if all the array elements are uppercase or lowercase letters. */        
    // return strs.sort((firstItem, secondItem) => firstItem.length !== secondItem.length ? firstItem.length - secondItem.length : stringUTFCodeAccumulator(firstItem) - stringUTFCodeAccumulator(secondItem));    
}

function stringUTFCodeAccumulator(input) {
    return input.split('').map(x => x.charCodeAt(0)).reduce((accumulator, currentValue) => accumulator + currentValue);
}

console.log(sortByLength(["aaa", "", "abc", "a", "zz"]));
console.log(sortByLength(["abc", "", "aaa", "a", "zz"]));


/**
* Test Suite 
*/
describe('sortByLength()', () => {
    it('sorts the strings from shortest to longest', () => {
        // arrange
        const strs = ["abc", "", "aaa", "a", "zz"];
        
        // act
        const result = sortByLength(strs);

        // log
        console.log("result: ", result);
        
        // assert
        expect(result).toEqual(["", "a", "zz", "abc", "aaa"]);
    });
});