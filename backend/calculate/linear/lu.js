
const LU = (matrix)=>{
    let size = matrix.length;
    let L = Array.from({length:size},()=>Array(size).fill(0))
    let U = Array.from({length:size},()=>Array(size).fill(0))
    
    for(let i = 0 ;i<size;i++)
    {
        for(let j = i ;j<size;j++)
        {
            let sum = 0;
            for(let k = 0; k<size;k++)
            {
                sum+= L[i][k] * U[k][j];
            }
            U[i][j] = matrix[i][j] - sum;
        }

        for(let j=  i+1;j<size;j++)
        {
            let sum =0 ;
            for(let k = 0 ; k<i;k++)
            {
                sum += L[j][k] * U[k][i];
            }
            L[j][i] = (matrix[j][i] - sum) / U[i][i]
        }
        L[i][i] = 1;
    }

    let result = {
        LOWER:L,
        UPPER:U,
    }
    
    return result;
    
}

// let m = [
//     [1,2,1,4],
//     [2,-1,3,2],
//     [-1,1,-1,-1],
// ]

// let m2 = [
//     [2,3,5,0],
//     [3,1,-2,-2],
//     [1,3,4,-3]
// ]

module.exports = LU;













