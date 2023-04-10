
const {factorial,derivative,evaluate} = require('mathjs')


const Taylor=(eq,x0,x,n)=>{
     let result = 0;
     let dfunc = eq;
     let diff = 0;
     let dataset = [];

     for(let i = 2;i<n+2;i++){
          dfunc = derivative(dfunc,'x').toString()

          diff = evaluate(dfunc,{x:x0});

          result += evaluate(eq,{x:x0}) + (x-x0)  *   (diff)   + ((Math.pow((x-x0),i)) / factorial(i))
          
          dataset.push({
               iteration:i-1,
               result:result
          })
     }
     return dataset;
}

// Taylor('sin(x)',2,4,4)


module.exports = Taylor;


























// // const {deriative,factorial,evaluate} = require('mathjs')
// const math = require('mathjs')

// const Taylor=(equation,x0,x,n)=>{
//     let result = 0;
//     for( let i = 0 ; i<= n;i++){
//         result += math.evaluate(equation,{x:x0}) + math.derivative(equation,'x').evaluate({x:x0})*(x-x0)+()
//     }
//     return result;
// }
// let x = Taylor('sin(x)',0,Math.pi / 4)
// console.log(Taylor());

// module.exports = Taylor;

// const { evaluate } = require('mathjs');
// const math = require('mathjs');

// function taylorSeries(equation, x0, x, n) {
//   let result = x0;
//   let func = evaluate(equation,{x:x0});
//   let derivative;

//   for (let i = 0; i < n; i++) {
//     derivative = String(math.derivative(equation, 'x'))
//     let dd =evaluate(derivative,{x: x0});
//     result = result + (math.evaluate(equation, {x: x0}) + (x - x0) * dd) / math.factorial(i + 1);
//     x0 = result;
//   }
//   return result;
// }

// let equation = "x^2 + 3x + 2";
// let x0 = 0;
// let x = 1;
// let n = 4;
// console.log(taylorSeries(equation, x0, x, n));

// const math = require('mathjs');

// function taylorSeries(equation, x0, x, n) {
//   let fn = equation;
//   let result = 0;
//   let dx = x - x0;

//   for (let i = 0; i <= n; i++){
//     let deriv = math.derivative(fn, 'x').evaluate({x: x0});
//     let term = math.pow(dx, i) / math.factorial(i) * deriv;
//     result = result + term;

//     fn = math.derivative(fn, 'x');
//   }

//   return result;
// }

// let equation = 'ln(x)';
// let x0 = 2;
// let x = 4;
// let n = 4;

// console.log(taylorSeries(equation, x0, x, n));
