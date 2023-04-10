const { lusolve } = require('mathjs');

const LeastPolynomial = (points, x, order) => {
    let n = points.length;
    let matrix = [];
    let sumY = [];
    for (let i = 0; i < order + 1; i++) {
      let row = [];
      for (let j = 0; j < order + 1; j++) {
        let sum = 0;
        for (let k = 0; k < n; k++) {
          sum += Math.pow(points[k].x, i + j);
        }
        row.push(sum);
      }
      matrix.push(row);
      let sum = 0;
      for (let k = 0; k < n; k++) {
        sum += points[k].fx * Math.pow(points[k].x, i);
      }
      sumY.push(sum);
    }
  
    let coef = lusolve(matrix, sumY);
  
    let fx = 0;
    for (let i = 0; i < order + 1; i++) {
      fx += coef[i][0] * Math.pow(x, i);
    }
    return fx;
  };

  const DataRegressionPolynomial=(points, x, order)=>{
      let min = points[0].x;
      let max = points[points.length-1].x;
      let gap = (max-min) / 100;
      let datasource = [];

      for(let i = min ;i<=(max+gap);i+=gap){
         datasource.push({
            x:i,
            y:LeastPolynomial(points,i,order)
         })
      }

      if(!datasource.find(e => e.x === x)){
         datasource.push({
            x:x,
            y:LeastPolynomial(points,x,order)
         })

         datasource.sort((a,b) => a.x - b.x)
      }
      
      return datasource;
  }

  module.exports = DataRegressionPolynomial;


  
  

// let points = [
//     {x:10,fx:5},
//     {x:15,fx:9},
//     {x:20,fx:15},
//     {x:30,fx:18},
//     {x:40,fx:22},
//     {x:50,fx:30},
//     {x:60,fx:35},
//     {x:70,fx:38},
//     {x:80,fx:43}
// ]

// let ans = DataRegressionPolynomial (points,65,2);
// ans.forEach((e) => console.log(e))