const { derivative, evaluate } = require('mathjs');

const Newton = (equation,x0)=>{
     let result = [];

    let parsediff = String(derivative(equation, 'x'));
    let x1 = x0 - (evaluate(equation, { x: x0 }) / evaluate(parsediff, { x: x0 }));
    let iteration = 1;
    
    while (Math.abs(evaluate(equation, { x: x1 })) > 0.00001) {
       
        x0 = x1;
        x1 = x0 - (evaluate(equation, { x: x0 }) / evaluate(parsediff, { x: x0 }));
        result.push({
            iteration:iteration,
            x1:x1,
            x0:x0,
            error:Math.abs(evaluate(equation, { x: x1 }))
        })
        iteration++;
    }
    return result;

}


module.exports = Newton






// let iteration = 0;
    // let error = 999;
    // let diff = String(derivative(equation, 'x'));
    // let x1;

    // while(error > 0.00001){
    //     let fx = evaluate(equation,{x:x0});
    //     let fdx = evaluate(diff,{x:x0});

        
    //     x1 = x0 - (fx/fdx);
    //     error = Math.abs((x1-x0) / x1) *100;
    //     x0 = x1;
        
    //     result.push({
    //         iteration:iteration,
    //         x1:x1,
    //         x0:x0,
    //     })
    //     iteration++;
    // }

    // return result;

