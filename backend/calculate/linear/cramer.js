

const {det,clone} = require('mathjs');

const Cramer=(a,b)=>{
    let detA = det(a);
    let result = [];

    for(let i = 0 ; i <a.length;i++)  
    {
        let newA = clone(a);
        for(let j = 0 ; j<a.length;j++) 
        {
            newA[j][i] = b[j];
           
        }
    
        let detnewA = det(newA);
        let xi = detnewA / detA
        result.push(xi)
       
    }
   
  

    return result;
}

  const a1 = [
    [2,3,5],
    [3,1,-2],
    [1,3,4],
  ]
  const b1 = [0,-2,-3]


module.exports = Cramer


