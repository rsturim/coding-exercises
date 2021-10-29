var rotate = function (matrix) {






    console.log('matrix: ', matrix);

    for (let r = 0; r < matrix.length; r++) {
        const item = matrix[r];    

        for (let c = r; c < matrix[0].length; c++) {
            const item = matrix[c][r];    
            console.log('item: ', item);
        }
        


    }
    


    




};

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
// Output: [[7,4,1],[8,5,2],[9,6,3]]

rotate(matrix);
