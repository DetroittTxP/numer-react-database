
const Lagrangequadratic=(points,x)=>{
    let x0 = points[0].x;
    let x1 = points[2].x;
    let x2 = points[points.length-1].x;
    let fx0 = points[0].y;
    let fx1 = points[2].y;
    let fx2 = points[points.length-1].y

   let L0 = ((x - x1) * (x - x2)) / ((x0 - x1) * (x0 - x2));
    let L1 = ((x - x0) * (x - x2)) / ((x1 - x0) * (x1 - x2));
    let L2 = ((x - x0) * (x - x1)) / ((x2 - x0) * (x2 - x1));

    let fx = (L0 * fx0) + (L1 * fx1) + (L2 * fx2);

    return fx;

}

const Lagrangequadraticdata=(points,x)=>{
  let datasource = [];
  let min = points[0].x;
  let max = points[points.length-1].x;
  let gap = (max-min) / 100;

  for(let i =min ;i <= (max+gap); i += gap){
     datasource.push({
        x:i,
        y:Lagrangequadratic(points,i)
     })
  }
  
  if(!datasource.find(e => e.x === x)){
      datasource.push({x:x,y:Lagrangequadratic(points,x)});
      datasource.sort((a,b)=> a.x - b.x);
  }

  return datasource
}

// let points = [  { x: 0, y: 9.81 }, 
//     { x: 20000, y: 9.7478 },  
//     { x: 40000, y: 9.6879 },  
//     { x: 60000, y: 9.6879 }, 
//      { x: 80000, y: 9.5682 },
//   ];

// let x = 42000

// console.log(Lagrangequadraticdata(points,x));



module.exports = Lagrangequadraticdata;