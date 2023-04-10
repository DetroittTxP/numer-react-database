
const math = require('mathjs');

const Falseposition=(equation,xl,xr)=>{

    let err = 9999;
    let x1,fxl,fxr,fx1;
    let iteration = 0;
    let dataTable = [];

    while(err > 0.00001){
        fxl = math.evaluate(equation,{x:xl});
        fxr = math.evaluate(equation,{x:xr});

        x1 = ((xl*fxr)-(xr*fxl)) / (fxr-fxl);
        fx1 = math.evaluate(equation,{x:x1});

        if(fx1 * fxr < 0){
            err = Math.abs((x1-xl)/x1)*100
            xl = x1;

        }else if(fx1 * fxr > 0){
            err = Math.abs((x1-xr)/x1)*100;
            xr = x1;
        }else{
            break;
        }

        dataTable.push({
            iteration:iteration,
            x1:x1,
            xl:xl,
            xr:xr,
            error:err,
        })

        iteration++;
    }
    return dataTable;
}

module.exports = Falseposition;