const choleskey=(matrix)=>{
    let size = matrix.length;
    let L = Array.from({length:size},()=>Array(size).fill(0));

    for(let i = 0 ;i<size;i++){
        for(let j = 0 ;j<=i;j++){
            let sum = 0;
            for(let k = 0;k<j;k++)
            {
                sum += L[i][k] * L[j][k];
            }

            if( i === j)
            {
                L[i][j] = Math.sqrt(matrix[i][i] - sum);

            }else{
                L[i][j] = (1 / L[j][j]) * (matrix[i][j] - sum);
            }
        }
    }
    return L;
}


// const isSymmetric=(A)=> {
//     const n = A.length;
    
//     for (let i = 0; i < n; i++) {
//       for (let j = 0; j < i; j++) {
//         if (A[i][j] !== A[j][i]) {
          
//           return "matrix not Symmetric"
//         }
//       }
//     }
    
//     return choleskey(A);
    
//   }
  
  


module.exports = choleskey
  
// let m = [
//     [1,2,1],
//     [2,-1,3],
//     [-1,1,-1],
// ]

// let m2 = [
//     [2,3,5],
//     [3,1,-2],
//     [1,3,4]
// ]

// let m3 = [
//     [5, 2, 0, 0], 
//     [2, 5, 2, 0], 
//     [0, 2, 5, 2], 
//     [0, 0, 2, 5]];

// console.log(isSymmetric(m3));