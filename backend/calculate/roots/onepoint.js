const {evaluate} =require('mathjs');

const Onepoint=(equation,x0)=>{
    let error = 999;
    let x1;
    let result = [];
    let iteration = 1;

    while(error > 0.000001){
      
       x1 = evaluate(equation,{x:x0});
       error = Math.abs((x1-x0)/ x1) *100;
       x0 = x1;
       result.push({
         iteration:iteration,
         x0:x0,
         x1:x1,
       })
       iteration++;
    }
    return result;
}

// console.log(Onepoint('(1-0.5x)/1.5',0))

// console.log(Onepoint('(1-0.5x)/1.5',0));

// const Onepoint = (equation,x0)=>{
//       let error = 99999;
//       let Last = 0;
//       let New;
//       let result = [];
//       let i  = 1;


//       while(error > 0.0001){
//         New = evaluate(equation,{x:x0});
//         e = Math.abs((New-Last) / New) *100;
//         Last = New;

//         result.push({
//             iteration:i,
//             x0:Last,
//             x1:New,
//         })
//       }

//       return result;
// }



module.exports = Onepoint;

