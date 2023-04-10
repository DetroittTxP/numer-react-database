// const Spline = require('cubic-spline');

// const Cubicspline=(x,y,point)=>{
//     const spline = new Spline(x,y);
//     return spline.at(point);
// }

// const dataSpline=(x,y,point)=>{
//     let min = x[0];
//     let max = x[x.length-1];
//     let gap = (max-min) / 100;
//     let datasource = [];
    
    

//     for(let i =min ;i <= (max); i += gap){
//         datasource.push({
//            x:i,
//            y:Cubicspline(x,y,i)
//         })
//      }

//      if(!datasource.find((e)=> e.x === point)){
//         datasource.push({
//           x:point,
//           y:Cubicspline(x,y,point)
//       })
  
//       datasource.sort((a,b)=> a.x - b.x);
//     }
     
     
     
//      return datasource;
// }



// let x = [0,20000,40000,60000,80000];
// let y = [9.81,9.7478,9.6879,9.6879,9.5682];


//   let points = 42000;

//  let ans =  dataSpline(x,y,points)
//  ans.forEach((e) => console.log(e))

// module.exports = dataSpline;