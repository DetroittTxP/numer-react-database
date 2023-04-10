
const Jordan=(matrix)=>{
    let rows = matrix.length;
    let cols = matrix[0].length;

    for(let i =0 ;i<rows-1;i++)
    {
        for(let j = i+1;j<rows;j++)
        {
            let factor = matrix[j][i] / matrix [i][i];
            for(let k = i;k<cols;k++)
            {
                matrix[j][k] -= factor * matrix[i][k]
            }
        }
    }

    for(let i = rows-1;i>=0;i--)
    {
        let factor = matrix[i][i];
        for(let j = i;j< cols;j++)
        {
            matrix[i][j] /= factor;
        }
        for(let j = i-1;j>=0;j--)
        {
            let factor = matrix[j][i];
            for(let k = i;k<cols;k++)
            {
                matrix[j][k] -= factor * matrix[i][k]
            }
        }
     }

     let result = [];
     for(let i =0 ; i<rows;i++)
     {
        result.push(matrix[i][cols-1])
     }

     return result;


}

const Jordaninverse=(matrix)=>{
    let n = matrix.length;
    let result = [];

    for(let i = 0; i<n;i++)
    {
        result.push([]);
        for(let j = 0;j<n;j++)
        {
            result[i].push(i === j ? 1 : 0);
        }
    }

    for(let i =0 ; i<n;i++)
    {
        let pivot = matrix[i][i];
        for(let j = 0;j<n;j++)
        {
            matrix[i][j] /= pivot;
            result[i][j] /= pivot;
        }

        for(let j = 0;j<n;j++)
        {
            if( j !== i)
            {
                let factor = matrix[j][i];
                for(let k =0 ;k<n;k++)
                {
                    matrix[j][k] -= factor * matrix[i][k];
                    result[j][k] -= factor * result[i][k];
                }
            }
        }
    }

    return result;
    
}

module.exports = {Jordan,Jordaninverse}










// const a1 = [
//     [2,3,5,0],
//     [3,1,-2,-2],
//     [1,3,4,-3],
//   ]

//   const a2 =[
//     [1,2,1],
//     [0,1,-1],
//     [-1,0,2]
        
//   ]



// console.log(Jordaninverse(a1));

