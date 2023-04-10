
const {evaluate,} = require('mathjs')


const Trapzoidal=(text,xlower,xupper)=>{
    let Flower = evaluate(text,{x:xlower})
    let Fupper = evaluate(text,{x:xupper})
    let h = xupper - xlower
    let result = 1/2 * h * (Flower + Fupper)
    return result;
}

const compositeTrap = (text, xlower, xupper, numbercomposite) => {
    let sum = 0;
    let h = (xupper - xlower) / numbercomposite;
    let data = [];

    let totalArea = 0;

    for (let i = 0; i < numbercomposite; i++) {
        let xi = xlower + i * h;
        let xi1 = xi + h;

        let fx0 = evaluate(text, { x: xi });
        let fx1 = evaluate(text, { x: xi1 });

        let trapArea = (h / 2) * (fx0 + fx1);
        totalArea += trapArea;

        data.push({
            x: xi,
            fx: fx0,
            trapArea: trapArea
        });

        if (i === numbercomposite - 1) {
            data.push({
                x: xi1,
                fx: fx1,
                trapArea: trapArea
            });
        }
    }

    data.push({
        totalArea: totalArea,
        trapArea:totalArea
    });

    return data;
};




const Caltrapcomposite=(text,xlower,xupper,numbercomposite)=>{
    let sum = 0
    let h = (xupper-xlower) / numbercomposite;

    for(let i =0 ;i<numbercomposite;i++){
        let xi = xlower+ i * h

        let fx0 = evaluate(text,{x:xi});;
        let fx1 = evaluate(text,{x:xi+h});
 

        sum+= h/2 * (fx0 + fx1);
   }

   return sum;
}


const UnderGraph=(text,xlower,xupper,numbercomposite)=>{
    let data = compositeTrap(text,xlower,xupper,numbercomposite);

    let allsum = [];

    for(let i =0;i<data.length-1;i++){
        allsum.push({
            
        })
    }
    console.log(data);
    

}




 

let eq = '(4x^5)-(3x^4)+(x^3)-6x+2';
let l = 2;
let u = 8;
let n = 2;
// Caltrapcomposite(eq,l,u,n)
//  UnderGraph(eq,l,u,n)

console.log(compositeTrap(eq,l,u,n));

module.exports = {Trapzoidal,compositeTrap}