

/**
 * Sorts a matrix in a "towel" pattern.
 *
 * @param {Array} matrix - The matrix to be sorted.
 * @return {Array} - The sorted matrix in "towel" pattern.
 */

module.exports = function towelSort (matrix) {
    
    if(matrix == undefined) {
        return [];
    }
    const result = matrix.reduce(function (acc, item, index) {
        if (index % 2) {
            return acc.concat(item.reverse());
        } else {
            return acc.concat(item);
        }
    }, []);

    return result;
}
