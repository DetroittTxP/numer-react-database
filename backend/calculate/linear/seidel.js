const Seidel=(matrix,vector,x0)=>{
     let n = matrix.length;
     let x = [...x0];
     let result = [];
     let error = 99999;
     let iteration = 0;

     while(error > 0.001){
        for(let i =0 ; i <matrix.length;i++)
        {
            let s = 0;
            for(let j = 0 ;j<matrix.length;j++)
            {
                if(j!==i)
                {
                    s+=matrix[i][j] * x[j];
                }
            }
            x[i] = (vector[i] - s) / matrix[i][i];
        }

        iteration++;
        error = Math.max(...x.map((xi, i) => Math.abs(xi - x0[i])));
        x0 = [...x];
        result.push({
            ITERATION:iteration,
            X:x
          })
     }

     return result;
}

const A = [[5, 2, 0, 0], [2, 5, 2, 0], [0, 2, 5, 2], [0, 0, 2, 5]];
const b = [12,17,14,7];
const x = [0, 0, 0, 0];

let ans = Seidel(A,b,x)


console.log(ans);
  