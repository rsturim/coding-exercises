// let grid = [
//     ["1","1","1","1","0"],
//     ["1","1","0","1","0"],
//     ["1","1","0","0","0"],
//     ["0","0","0","0","0"]
//   ]

//   let islandCount = 0;

//   for(let rowIndex in grid) {
//     console.log('row: ', rowIndex);
//     console.log('grid[rowIndex]: ', grid[rowIndex]);
//     console.log('------------------------------------------');
//     for (colIndex in  grid[rowIndex]) {
//         // console.log('grid[rowIndex][colIndex]: ', grid[rowIndex][colIndex]);
//         if (grid[rowIndex][colIndex] === "1") {
//             console.log("got one");
//             islandCount++
//         }
//     }
//   }

//   console.log('islandCount: ', islandCount);

let test = [1,2,3,4,5,6,5]
var containsDuplicate = function(nums) {
    
    for(i = 0; i < nums.length; i++) {
        for (j = i+1;j<nums.length; j++) {

            if (nums[i] === nums[j]) {
                return  true;
            }

        }
    }l
    
   
    return false
};  

let test2 = [1,2,3,4,5,6,2]

var containsDuplicate2 = function(nums) {
    
    const memo = []
    for(i = 0; i < nums.length; i++) {

        if (!memo.includes(nums[i])) {
            memo.push(nums[i])
        }else {
            return true
        }
        // if (!memo[nums[i]]) {
        //     memo[nums[i]] = nums[i]
        // } else {
        //     return true
        // }

        console.log('memo: ', memo);

        // for (j = i+1;j<nums.length; j++) {

        //     if (nums[i] === nums[j]) {
        //         return  true;
        //     }

        // }
    }
    return false
};  

console.log('check: ', containsDuplicate2(test2));