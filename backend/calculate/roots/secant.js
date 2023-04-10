const { evaluate } = require('mathjs');

const Secant = (equation,x0,x1)=>{
    let fx0 = evaluate(equation,{x:x0});
    let fx1 = evaluate(equation,{x:x1});
    let result = [];
    let iteration = 1;
    
    while(Math.abs(x1-x0) > 0.00001){
        let x2 = x1 - fx1 * (x1 - x0) / (fx1 - fx0);
        
        result.push({
            iteration:iteration,
            x2:x2,
            x1:x1,
            x0:x0,
            fx0:fx0,
            fx1:fx1,
        })
        x0 = x1;
        x1 = x2;
        fx0 = fx1;
        fx1 = evaluate(equation,{x:x1});
        iteration++;
                                
    }
    return result;
}

// console.log(Secant('x-sin(x)-5',0,1));

module.exports = Secant;