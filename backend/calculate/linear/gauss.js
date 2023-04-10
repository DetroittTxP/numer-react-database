const Gauss=(A,B)=>{
  let n = A.length;
  let x = new Array(n).fill(0);

  //กำจัด
  for(let i =0  ;i<n-1;i++)
  {
      for(let j = i+1;j<n;j++)
      {
          let factor = A[j][i] / A[i][i];
          for(let k = i+1;k<n;k++)
          {
              A[j][k] -= factor * A[i][k]

          }
          B[j] -= factor * B[i];
      }
  }

  //เเบคซับ
  for(let i = n-1; i>=0; i--)
  {
      let sum = 0;
      for(let j = i+1;j<n;j++)
      {
          sum+=A[i][j] * x[j];
      }
      x[i] = (B[i] - sum) / A[i][i];
  }

  return x;


} 

module.exports = Gauss;

//   const a1 = [
//     [2,3,5],
//     [3,1,-2],
//     [1,3,4],
//   ]
//   const b1 = [0,-2,-3]

// console.log(gauss(a1,b1));
  