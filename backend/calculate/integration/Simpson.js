const {evaluate, log} = require('mathjs');




const Simpson =(eq,lower,upper)=>{
    let h = (upper-lower) / 2;
    
    let fx0 = evaluate(eq,{x:lower});
    let fx1 = evaluate(eq,{x:lower+h});
    let fx2 = evaluate(eq,{x:upper})

    let I = h/3 * (fx0+(4*fx1)+fx2)
    return I;
}


const CompositeSimpson=(eq,xlower,xupper,n)=>{

  let sum = 0;
  let data = [];
  let h = (xupper - xlower) / n;

  for (let i = 0; i <=n; i++) {
    let xi = xlower + i * h;
    let fxi = evaluate(eq, { x: xi });

    data.push({
      x: xi,
      fx: fxi,
    });

    if (i === 0 || i === n) {
        sum += fxi;
      } else if (i % 2 === 0) {
        sum += 2 * fxi;
      } else {
        sum += 4 * fxi;
      }
  }

  sum = (h / 3) * sum;
  data.push({sum:sum})
  return data;
}

// console.log(CompositeSimpson('4x^5-3x^4+x^3-6x+2',4,8,6));

module.exports = {Simpson,CompositeSimpson}