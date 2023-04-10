const Jacobi=(matrix,vector,x0)=>{
    let x = [...x0];
    let result = [];
    let error = 99999;
    let iteration = 0;

    while(error > 0.001){
        let xNew = [];
        for(let i =0 ; i<matrix.length;i++)
        {
            let s = 0;
            for(let j = 0;j<matrix.length;j++)
            {
                if(j !== i)
                {
                    s += matrix[i][j] * x[j];
                }
            }
            xNew[i] = (vector[i] - s) / matrix[i][i];
        }

        iteration++;
        error = Math.max(...xNew.map((xi, i) => Math.abs(xi - x[i])));
        x = [...xNew];
        result.push({ITERATION:iteration,x:x});
    }
    return result;
}


module.exports = Jacobi;
// const A = [[5, 2, 0, 0], [2, 5, 2, 0], [0, 2, 5, 2], [0, 0, 2, 5]];
// const b = [12,17,14,7];
// const x = [0, 0, 0, 0];

// let ans = Jacobi(A,b,x)

// console.log(ans);
  
  