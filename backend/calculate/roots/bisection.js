const { evaluate }= require('mathjs')

const Biseciton = (func, xl, xr) => {
    
    let xm = (xl+xr)/2
    let fxl = evaluate(func,{x:xl});
    let fxm = evaluate(func,{x:xm});
    let iteration = 0;
    let dataTable = [];

    while(Math.abs(fxm) > 0.000001){

        
         xm = (xl + xr)/2;
         fxm = evaluate(func,{x:xm});
        
         if(fxl * fxm < 0 ){
              xr = xm;

         }else{
              xl = xm;
              fxl = fxm
         }
         let error = Math.abs((xr - xl) / xm); 
         dataTable.push({ 
              
              iteration:iteration,
              xm:xm,
              xl:xl,
              xr:xr,
              error:error
         })
          
         iteration++;  
    }
    return dataTable;
  };
  

// console.log(Biseciton('(x^4)-13',0,4));

module.exports = Biseciton;
