
const newtonDividedDifference = (points, x) => {
    let n = points.length;
    let divDiffTable = [];
    for (let i = 0; i < n; i++) {
      divDiffTable.push([points[i].y]);
    }
    for (let j = 1; j < n; j++) {
      for (let i = 0; i < n - j; i++) {
        divDiffTable[i].push((divDiffTable[i + 1][j - 1] - divDiffTable[i][j - 1]) / (points[i + j].x - points[i].x));
      }
    }
    let result = divDiffTable[0][0];
    let term = 1;
    for (let i = 1; i < n; i++) {
      term *= (x - points[i - 1].x);
      result += divDiffTable[0][i] * term;
    }
    return result;
  }

  const DataNewton = (points,x)=>{


    let datasource = [];
    let min = points[0].x;
    let max = points[points.length-1].x;
    let gap = (max-min) / 100;

    for(let i =min ;i <= (max+gap); i += gap){
       datasource.push({
          x:i,
          y:newtonDividedDifference(points,i)
       })
    }

    if(!datasource.find((e)=> e.x === x)){
          datasource.push({
            x:x,
            y:newtonDividedDifference(points,x)
        })
    
        datasource.sort((a,b)=> a.x - b.x);
    }
 

    return datasource;
      
  }

// let points = [  { x: 0, y: 9.81 }, 
//     { x: 20000, y: 9.7478 },  
//     { x: 40000, y: 9.6879 },  
//     { x: 60000, y: 9.6879 }, 
//      { x: 80000, y: 9.5682 },
//   ];

// let x = 42000
  
//    let ans =  DataNewton(points,x)
//    ans.forEach((e) => console.log(e))

  
  
  module.exports = DataNewton;














  // let points = [  { x: 0, y: 9.81 }, 
  //   { x: 20000, y: 9.7478 },  
  //   { x: 40000, y: 9.6879 },  
  //   { x: 60000, y: 9.6879 }, 
  //    { x: 80000, y: 9.5682 },
  // ];

  // let x = 42000
 
  // console.log(data(points,x));
  

 //   let points = [  { x: 0, y: 9.81 },  { x: 20000, y: 9.7478 },  { x: 40000, y: 9.6879 },  { x: 60000, y: 9.6879 },  { x: 80000, y: 9.5682 },];
  //    let point2 = [
  //       {x:10 , y: 5},
  //       {x:15 , y:9},
  //       {x:20 , y:15},
  //       {x:40, y:18},
  //       {x:50 , y:22},
  //       {x:60 , y:30},
  //       {x:70 , y:35},
  //       {x:80 , y:43},
  //    ]
  
  // console.log(newtonDividedDifference(point2, 65)); 