const Lagrangepolynomial=(points,x)=>{
  
    let sum = 0;
    for(let i= 0 ;i <points.length;i++){
        let t = points[i].y;
        for(let j = 0 ;j<points.length;j++){
            if(i !== j){
                t *= (x - points[j].x) / (points[i].x - points[j].x);
            }
        }
        sum+=t;
    }
    return sum;

}

const Lagrangepolynomialdata=(points,x)=>{
    let datasource = [];
    let min = points[0].x;
    let max = points[points.length-1].x;
    let shaung = (max - min) / 100;

    for(let i =min ;i<(max+shaung) ;i+=shaung){
        datasource.push({
            x:i,
            y:Lagrangepolynomial(points,i).toFixed(6)
        })
    }

   if(!datasource.find((e)=> e.x === x)){
       datasource.push({
          x:x,
          y:Lagrangepolynomial(points,x)
       })
       datasource.sort((a,b)=> a.x - b.x);

   }

   
    return datasource;
}

module.exports = Lagrangepolynomialdata;
// let points = [  { x: 0, y: 9.81 }, 
//     { x: 20000, y: 9.7478 },  
//     { x: 40000, y: 9.6879 },  
//     { x: 60000, y: 9.6879 }, 
//      { x: 80000, y: 9.5682 },
//   ];

//   let x = 42000;

//  let eee = Lagrangepolynomialdata(points,x);
   
//  eee.forEach((e) => console.log(e));

