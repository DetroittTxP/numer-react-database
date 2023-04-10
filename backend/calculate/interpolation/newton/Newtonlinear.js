 const Newtonlinear = (points,x)=>{
    let n = points.length;
    
    let x0 = points[0].x
    let fx0 = points[0].y;
    let x1 = points[n-1].x;
    let fx1 = points[n-1].y;
     

     let c0 = fx0 + 0 ;
     let c1 = (fx1 - fx0) / (x1 - x0);
     let fx = c0 + c1 * (x-x0);
     
     return fx;
 }



 const Newtonlineardata=(points,x)=>{
      let datasource = [];
      let min = points[0].x;
      let max = points[points.length-1].x;
      let gap = (max-min) / 100;

      for(let i =min ;i <= (max+gap); i += gap){
         datasource.push({
            x:i,
            y:Newtonlinear(points,i)
         })
      }
     
      if(!datasource.find((e)=> e.x === x)){
         datasource.push({
            x:x,
            y:Newtonlinear(points,x)
         })
   
         datasource.sort((a,b)=> a.x - b.x);
   
      }

      return datasource;
 }

//   let points = [  { x: 0, y: 9.81 }, 
//                   { x: 20000, y: 9.7478 },  
//                   { x: 40000, y: 9.6879 },  
//                   { x: 60000, y: 9.6879 }, 
//                    { x: 80000, y: 9.5682 },
//                 ];

//   let x = 42000
  
// console.log(Newtonlineardata(points,x));
  
module.exports = Newtonlineardata;