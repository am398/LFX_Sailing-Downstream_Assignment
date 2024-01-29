const filterList = require('./mainfile');

describe('filterList function', () => {
  it('should filter out elements at positions divisible by 2 or 3', () => {
    const inputList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const expectedList = [1, 5, 7];
    const filteredList = filterList(inputList);
    expect(filteredList).toEqual(expectedList);
  });

  it('should throw an error when list length is not a multiple of 10', () => {
    const invalidList = [1, 2, 3];
    expect(() => filterList(invalidList)).toThrowError('List length must be a multiple of 10');
  });

  // 0 can also be considered as a multiple of 10

  it('should work with empty lists', () => {
    const emptyList = [];
    expect(filterList(emptyList)).toEqual([]);
  });

  it('should work with lists containing repeated elements', () => {
    const listWithRepeats = [1, 2, 3, 3, 4, 5, 6, 6, 7, 8];
    const expectedList = [1, 4, 6];
    expect(filterList(listWithRepeats)).toEqual(expectedList);
  });
});
