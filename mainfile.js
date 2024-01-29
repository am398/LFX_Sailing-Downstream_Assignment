
const inputList = [1, 2, 3, 4, 5, 6, 7, 8, 9,10];
try {
    const filteredList = filterList(inputList);
    console.log(filteredList);
} catch (error) {
    console.error(error.message); 
}

function filterList(list) {
    if (list.length % 10 !== 0) {
        throw new Error("List length must be a multiple of 10");
    }

    return list.filter((item, index) => (index + 1) % 2 !== 0 && (index + 1) % 3 !== 0);
}

module.exports = filterList;
